import React,{useState} from 'react';
import ReactPaginate from 'react-paginate';

const App=()=>{
  const [items,setItems]=useState()
  const handlePageClick=(data)=>{
    
    console.log(data.selected);
  }

   return (
     <div>
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
