import React from 'react'
import "./App.css"
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Home';
import StudentLogin from './student/StudentLogin';
import AdminLogin from './admin/AdminLogin';
import StudentPageOne from './student/StudentPageOne';
import AdminPageOne from './admin/AdminPageOne';
import LabDetails from './admin/LabDetails';
import ResolvedIssueDetails from './admin/ResolvedIssueDetails';
import InProgressIssueDetails from './admin/InProgressIssueDetails';
import SidebarOneRaiseIssue from './student/SidebarOneRaiseIssue';
import SidebartwoIssuesRaised from './student/SidebarTwoIssuesRaised';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/StudentLogin' element={<StudentLogin />} />
          <Route path='/AdminLogin' element={<AdminLogin />} />
          <Route path='/StudentPageOne' element={<StudentPageOne />} />
          <Route path='/RaiseIssue' element={<SidebarOneRaiseIssue />} />
          <Route path='/IssuesRaised' element={<SidebartwoIssuesRaised />} />
          <Route path='/AdminPageOne' element={<AdminPageOne />} />
          <Route path='/LabDetails' element={<LabDetails />} />
          <Route path='/ResolvedIssueDetails' element={<ResolvedIssueDetails />} />
          <Route path='/InProgressIssueDetails' element={<InProgressIssueDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;