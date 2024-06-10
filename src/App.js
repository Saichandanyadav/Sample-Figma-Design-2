import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import HomePage from './components/HomePage'
import ProjectPage from './components/ProjectPage'
import UploadPage from './components/UploadPage'
import ConfigurationPage from './components/ConfigurationPage'
import AccountSettingsPage from './components/AccountSettingsPage'
import NavBar from './components/NavBar'
import './App.css'

const App = () => (
  <Router>
    <NavBar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<ProjectPage />} />
      <Route path="/upload" element={<UploadPage />} />
      <Route path="/configuration" element={<ConfigurationPage />} />
      <Route path="/account-settings" element={<AccountSettingsPage />} />
    </Routes>
  </Router>
)

export default App
