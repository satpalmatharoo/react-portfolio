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
                Aboutme 
              </a>
          </div>
      
          <div className="navtab">
              <a
                href="#Portfolio"
                onClick={() => handlePageChange("Portfolio")}
                // This is a conditional (ternary) operator that checks to see if the current page is "Home"
                // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                className={
                  currentPage === "Portfolio" ? "nav-link active" : "nav-link"
                }
              >
                Portfolio
              </a>
          </div>
          <div className="navtab">
              <a
                href="#Contactme"
                onClick={() => handlePageChange("Contactme")}
                // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                className={
                  currentPage === "Contactme" ? "nav-link active" : "nav-link"
                }
              >
                Contactme 
              </a>
          </div>
         
      </div>
    </div>
  );
}
export default NavTabs;






          