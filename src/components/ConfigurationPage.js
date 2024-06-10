import {useState} from 'react'
import '../styles/ConfigurationPage.css'

const ConfigurationPage = () => {
  const [activeTab, setActiveTab] = useState('general')

  return (
    <div className="configuration-container">
      <h1>Configuration</h1>
      <div className="nav-links">
        <button type="button" onClick={() => setActiveTab('general')}>
          General
        </button>
        <button type="button" onClick={() => setActiveTab('display')}>
          Display
        </button>
        <button type="button" onClick={() => setActiveTab('advanced')}>
          Advanced
        </button>
      </div>

      {activeTab === 'general' && (
        <div className="tab-content">
          <h2>Chatbot Name</h2>
          <input type="text" placeholder="Enter Chatbot Name" />
          <h2>Welcome Message</h2>
          <input type="text" placeholder="Enter Welcome Message" />
          <h2>Input Placeholder</h2>
          <input type="text" placeholder="Enter Placeholder Text" />
        </div>
      )}

      {activeTab === 'display' && (
        <div className="tab-content">
          <h2>Primary Color</h2>
          <input type="color" />
          <h2>Font Color</h2>
          <input type="color" />
          <h2>Font Size</h2>
          <input type="number" />
          <h2>Chat Height</h2>
          <input type="number" />
          <h2>Chat Icon Size</h2>
          <select>
            <option>16px</option>
            <option>32px</option>
            <option>48px</option>
          </select>
          <h2>Position on Screen</h2>
          <select>
            <option>bottom right</option>
            <option>bottom left</option>
          </select>
          <h2>Distance from Bottom</h2>
          <input type="number" />
          <h2>Horizontal Distance</h2>
          <input type="number" />
          <h2>Upload Image</h2>
          <button type="button">Upload Image</button>
        </div>
      )}

      {activeTab === 'advanced' && (
        <div className="tab-content">
          <p>There are No Advanced Feature were Exists.</p>
        </div>
      )}
    </div>
  )
}

export default ConfigurationPage
