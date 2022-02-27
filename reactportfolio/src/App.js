// import logo from './logo.svg';
 import './App.css';
 //import components
 import Aboutme from './components/pages/Aboutme';
 import Portfolio from './components/pages/Portfolio';
 

function App() {
  return (
    <div className="App">
    {/* <h1> like such a big smurfy nerd</h1> */}
    <div className="home">
    <Aboutme />
    <Portfolio/>
    </div>
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
