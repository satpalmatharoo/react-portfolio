import React from "react";
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className="container">
      <div className="listcontainer">
          <div className="navtab">
              <a
                href="#Aboutme"
                onClick={() => handlePageChange("Aboutme")}
                // This is a conditional (ternary) operator that checks to see if the current page is "Home"
                // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                className={
                  currentPage === "Aboutme" ? "nav-link active" : "nav-link"
                }
              >
                Aboutme sleep pal 
              </a>
          </div>
         





