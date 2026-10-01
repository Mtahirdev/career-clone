import React, { useState } from "react";
import * as ReactPaginateModule from "react-paginate";

const Test = () => {
  const ReactPaginate = ReactPaginateModule.default.default;

  console.log("ReactPaginate:", ReactPaginate);
  console.log("Type:", typeof ReactPaginate);

  const [page, setPage] = useState(0);

  return (
    <div className="w-full flex justify-center mt-10">
      <ReactPaginate
        pageCount={7}
        onPageChange={(event) => setPage(event.selected)}
        previousLabel="←"
        nextLabel="→"
        containerClassName="flex items-center gap-2"
        pageClassName="px-3 py-2 border rounded"
        previousClassName="px-3 py-2 border rounded"
        nextClassName="px-3 py-2 border rounded"
        activeClassName="bg-blue-500 text-white"
      />
    </div>
  );
};

export default Test;
