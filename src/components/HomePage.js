import {useState} from 'react'
import '../styles/HomePage.css'

const HomePage = () => {
  const [showModal, setShowModal] = useState(false)
  const [projectTitle, setProjectTitle] = useState('')
  const [error, setError] = useState('')

  const handleCreateProject = () => {
    if (projectTitle.trim() === '') {
      setError("Project Name Can't be Empty")
    } else {
      // Add project creation logic here
      setShowModal(false)
      setProjectTitle('')
      setError('')
    }
  }

  return (
    <div className="home-container">
      <h1>Create a New Project</h1>
      <img src="/path/to/your/image.jpg" alt="Project" />
      <p>Your project description goes here.</p>
      <button type="button" onClick={() => setShowModal(true)}>
        Create New Project
      </button>

      {showModal && (
        <div className="modal-backdrop">
          <div className="modal-content">
            <h2>Create Project</h2>
            <input
              type="text"
              placeholder="Type here"
              value={projectTitle}
              onChange={e => setProjectTitle(e.target.value)}
            />
            {error && <p className="error">{error}</p>}
            <div className="modal-buttons">
              <button type="button" onClick={handleCreateProject}>
                Create
              </button>
              <button type="button" onClick={() => setShowModal(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default HomePage
