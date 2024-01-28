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
import SafeModal from './pages/SafeUseModal';
import NotSafeModal from './pages/NotSafeUseModal';
import AddMemberModal from './pages/AddMemberModal';

const App = () => {

  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard/:familyname" element={<PatientSearch />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path='/patient/:familyname' element={<Patient />} />
          <Route path="/safe-modal" element={<SafeModal />} />
          <Route path="/not-safe-modal" element={<NotSafeModal />} />
          <Route path="/add-member-modal" element={<AddMemberModal />} />
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
