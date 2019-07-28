import React from "react";
import "./Pagination.css";

const pagination = props => {
  const pageLinks = [];
  for (let i = 1; i <= props.pages; i++) {
    let active = props.currentPage === i ? "active" : "";
    pageLinks.push(
      <li className={`${active}`} key={i} onClick={() => props.nextPage(i)}>
        <a href="*">{i}</a>
      </li>
    );
  }
  return (
    <div>
      <ul>
        {props.currentPage > 1 ? (
          <li onClick={() => props.nextPage(props.currentPage - 1)}>
            <a href="*">Prev</a>
          </li>
        ) : (
            ""
          )}
        {pageLinks}
        {props.currentPage < props.pages + 1 ? (
          <li onClick={() => props.nextPage(props.currentPage + 1)}>
            <a href="/">Next</a>
          </li>
        ) : (
            ""
          )}
      </ul>
    </div>
  );
};
export default pagination;
