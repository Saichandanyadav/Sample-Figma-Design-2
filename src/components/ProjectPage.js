import {useState} from 'react'
import '../styles/ProjectPage.css'

const ProjectPage = () => {
  const [projects, setProjects] = useState([
    {id: 1, title: 'Project 1', description: 'Description 1', time: '10:00 AM'},
    {id: 2, title: 'Project 2', description: 'Description 2', time: '11:00 AM'},
  ])

  const [showModal, setShowModal] = useState(false)
  const [newProjectTitle, setNewProjectTitle] = useState('')
  const [newProjectDescription, setNewProjectDescription] = useState('')
  const [error, setError] = useState('')

  const handleCreateNewProject = () => {
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
    setNewProjectTitle('')
    setNewProjectDescription('')
    setError('')
  }

  const handleAddProject = () => {
    if (newProjectTitle.trim() === '') {
      setError("Project Name Can't be Empty")
      return
    }
    const newProject = {
      id: projects.length + 1,
      title: newProjectTitle,
      description: newProjectDescription,
      time: new Date().toLocaleTimeString(),
    }
    setProjects([...projects, newProject])
    handleCloseModal()
  }

  return (
    <div className="project-page">
      <div className="header">
        <h1>Projects</h1>
        <button type="submit" onClick={handleCreateNewProject}>
          Create New Project
        </button>
      </div>
      <div className="project-cards">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <img src="/path-to-image" alt={project.title} />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p>{project.time}</p>
          </div>
        ))}
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Create Project</h2>
            <input
              type="text"
              placeholder="Type here"
              value={newProjectTitle}
              onChange={e => setNewProjectTitle(e.target.value)}
            />
            {error && <p className="error">{error}</p>}
            <input
              type="text"
              placeholder="Project Description"
              value={newProjectDescription}
              onChange={e => setNewProjectDescription(e.target.value)}
            />
            <div className="modal-buttons">
              <button type="button" onClick={handleAddProject}>
                Create
              </button>
              <button type="button" onClick={handleCloseModal}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProjectPage
