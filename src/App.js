import logo from './logo.svg';
import './App.css';
import Main from './main';
import BasicPage from './Pages/BasicPage.js';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import LoginDoc from './Pages/LoginDoc';
import SignUpDoc from './Pages/SignUpDoc';
import Login from './Pages/login.component';
import SignUp from './Pages/signup.component';
import PatientHome from './Pages/PatientHome';
import LabHome from './Pages/LabHome';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BasicPage/>}></Route>
        <Route path="/lab/signin" element={<LoginDoc/>}></Route>
        <Route path="/lab/signup" element={<SignUpDoc/>}></Route>
        <Route path="/patient/signup" element={<SignUp/>}></Route>
        <Route path="/patient/signin" element={<Login/>}></Route>
        <Route path="/patient/:patId/home" element={<PatientHome/>}></Route>
        <Route path="/patient/:labId/home" element={<LabHome/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
