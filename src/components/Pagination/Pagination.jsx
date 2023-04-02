import styles from "./Pagination.module.css";
// import ratio1 from "../../assets/OurCase_img/Ratio.png";
// import ratio2 from "../../assets/OurCase_img/Ratio2.png";
// import ratio3 from "../../assets/OurCase_img/Ratio3.png";
// import ratio4 from "../../assets/OurCase_img/Ratio4.png";
// import ratio5 from "../../assets/OurCase_img/Ratio5.png";
// import ratio6 from "../../assets/OurCase_img/Ratio6.png";
// import ratio7 from "../../assets/OurCase_img/Ratio7.png";
// import ratio8 from "../../assets/OurCase_img/Ratio8.png";
// import ratio9 from "../../assets/OurCase_img/Ratio9.png";
import ReactPaginate from "react-paginate";
import { useState } from "react";
import { OurCaseConst } from "../../OurCaseConst/OurCaseConst";
import OurCase from "../OurCase/OurCase";

function Pagination() {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + 9;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentPage = OurCaseConst.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(OurCaseConst.length / 9);
  // console.log(OurCaseConst);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 9) % OurCaseConst.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  console.log(OurCaseConst);

  return (
    <>
      {currentPage.length > 0 ? (
        <div className={styles.middle}>
          {currentPage.map((item) => (
            <div
              key={item.id}
              image={item.image}
              title={item.title}
              desc={item.desc}
            >
              <img src={item.image} alt="image" />
              <p>{item.title}</p>
              <p>{item.desc}</p>
            </div>
          ))}
          <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={9}
            pageCount={pageCount}
            previousLabel="< previous"
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
        <div>...</div>
      )}
    </>
  );
}

export default Pagination;
