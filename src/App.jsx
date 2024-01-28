// import logo from './logo.svg';
import * as React from 'react'
import Login from './pages/Login';
import Patient from './pages/Patient';
import PatientSearch from './pages/PatientSearch';
import DrugSearch from './pages/DrugSearch';
import SignUp from './pages/SignUp';
import { ChakraProvider } from '@chakra-ui/react'
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

const App = () => {

  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<PatientSearch />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/search" element={<DrugSearch />} />
          <Route path='/patient' element={<Patient />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <h1>
//           Hi Emmy
//         </h1>
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
