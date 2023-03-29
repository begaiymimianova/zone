import styles from "./OurCase.module.css";
import Pagination from "../Pagination/Pagination";
import React, { useState} from "react";
import ReactPaginate from "react-paginate";

function OurCase() {
  // const [newsList, setNewList] = useState([]);
  const newsList = [];
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + 5;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = newsList.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(newsList.length / 5);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * 5) % newsList.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <div className={styles.ourCase}>
      <div className={styles.topContent}>
        <h1>Our Case Studies</h1>
        <p>
          Nullam tincidunt adipiscing enim. Mauris sollicitudin fermentum
          libero.
        </p>
        <div className={styles.span}>
          <span>All</span>
          <span>Branding</span>
          <span>Digital</span>
          <span>Marketing</span>
          <span>SEO</span>
          <span>All</span>
        </div>
        <div className={styles.hr}></div>
      </div>
      {currentItems.length > 0 ? (
        <div className={styles.pagination}>
          {/* {currentItems.map(() => (
            <Pagination />
          ))} */}
          <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="<div previous"
            renderOnZeroPageCount={null}
            containerClassName="pagination"
            activeClassName="active"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakClassName="page-item"
            breakLinkClassName="page-link"
          />
        </div>
      ) : (
        <div>
         ...
        </div>
      )}
    </div>
  );
}

export default OurCase;
