import React,{useState,useEffect} from 'react';
import ReactPaginate from 'react-paginate';

const App=()=>{
  const [items,setItems]=useState([]);

  const handlePageClick=async(data)=>{
    let currentPage=data.selected+1;
    const comments=await fetchComments(currentPage);
    setItems(comments);
  }

  useEffect(()=>{
    const getComments=async()=>{
      const resp=await fetch(`https://jsonplaceholder.typicode.com/comments?_page=1&_limit=12`);
      const data=await resp.json();
      setItems(data);
    }
    getComments();
  },[])

  console.log(items);

  const fetchComments=async(currentPage)=>{
    const resp=await fetch(`https://jsonplaceholder.typicode.com/comments?_page=${currentPage}&_limit=12`)
    const data=await resp.json();
    return data;
  }

   return (
     <div className='container'>
      
     <div className='row m-4'>
     {items && items.map(item=>{
       return (
        <div className='col-sm-6 col-md-4 v my-4'>
          <div className='card shadow-sm w-100' style={{minHeight:225}}> 
            <div className='card-body'>
              <h5 className='card-title text-center h2'>{`Id: ${item.id}` }</h5>
              <h6 className='card-subtitle mb-2 text-muted text-center'>{`Email: ${item.email}` }</h6>
              <p className='card-text'>{`Comment: ${item.body}` }</p>
            </div>
          </div>
        </div>

       )
     })}
     </div>

        <ReactPaginate
           previousLabel={"Previous"}
           nextLabel={"Next"}
           breakLabel={"---"}
           pageCount={15}
           marginPagesDisplayed={2}
           pageRangeDisplayed={3}
           onPageChange={handlePageClick}
           containerClassName={"pagination justify-content-center"}
           pageClassName={"page-item"}
           pageLinkClassName={"page-link"}
           previousClassName={"page-item"}
           previousLinkClassName={"page-link"}
           nextClassName={"page-item"}
           nextLinkClassName={"page-link"}
           breakClassName={"page-item"}
           breakLinkClassName={"page-link"}
           activeClassName={"active"}
        />
     </div>
   )
}

export default App;
