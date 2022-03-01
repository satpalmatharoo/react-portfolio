// import logo from './logo.svg';
import React, {useState} from "react";
import './App.css';
 //import components
 import Aboutme from './components/pages/Aboutme'
 import Contactme from './components/pages/Contactme'
 import Portfolio from './components/pages/Portfolio'
 import Navbar from './components/Navbar';
 import NavTabs from './components/Navtabs';

function App() {
  const [pg, setCurrentPG] = useState(`Aboutme`);
  const renderPage = () => {
    if (pg === "Aboutme") {
      return <Aboutme />;
    }
    if (pg === "Contactme") {
      return < Contactme/>;
    }
    if (pg === "Portfolio") {
      return <Portfolio />;

    }
  };

  const handlePageChange = (page) => setCurrentPG(page);
  return (
    <div className="App">
      <NavTabs
      currentPage={pg} handlePageChange={handlePageChange}/>
  
    {renderPage()}
    </div>
  );
}





//     <div className="App">
//       <header className="App-header"> ..  
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
