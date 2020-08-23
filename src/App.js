// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
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

// export default App;
import React, { Component } from 'react';
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';
import Body from './Body';
import ListEmployeeComponents from './components/ListEmployeeComponents';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddEmployeeComponents from './components/AddEmployeeComponents';
import UpdateCustomerComponent from './components/UpdateCustomerComponent';

class App extends Component {
  render() {
    return (
      <Router>

      <div>
        <Header />
        <Menu />
        {/* <Body/> */}
        <Switch>
        <Route path="/" exact component={ListEmployeeComponents}></Route>
        <Route path="/customer" component={ListEmployeeComponents}></Route>
        <Route path="/update-customer/:id" component={UpdateCustomerComponent}></Route>
        <Route path="/add-customer" component={AddEmployeeComponents}></Route>
       
        </Switch>
        <Footer />

      </div>
      </Router>

    );
  }
}

export default App;