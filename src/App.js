import React from 'react';
import ReactPaginate from 'react-paginate';

const App=()=>{

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
           marginPagesDisplayed={3}
           pageRangeDisplayed={4}
           onPageChange={handlePageClick}
           containerClassName={"pagination"}
           pageClassName={"page-item"}
           pageLinkClassName={"page-link"}
           previousClassName={"page-item"}
           previousLinkClassName={"page-link"}
           nextClassName={"page-item"}
           nextLinkClassName={"page-link"}
        />
     </div>
   )
}

export default App;
