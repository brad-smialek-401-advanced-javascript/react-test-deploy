import React from 'react';
//import { connect } from "react-redux";   WHY?
import Header from "./header/header";
import Footer from "./footer/footer";
import Counter from "./counter/counter";
import "./_app.scss";


function App() {
  return (
    <div className="App">
      Brad is here
      <React.Fragment>
      <Header />
      <hr></hr>
      <Counter />
      <hr></hr>
      <Footer />
      </React.Fragment>
    </div>
  );
}

// code from previous lab 26  NOTE Differences WHY?
// function App() {
//   return (
//     <>
//       <React.Fragment>
//         <Header />
//         <hr></hr>
//         <Counter />
//         <hr></hr>
//         <Footer />
//       </React.Fragment>
//     </>
//   );
// }

export default App;
