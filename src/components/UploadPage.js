import {useState} from 'react'
import '../styles/UploadPage.css'

const UploadPage = () => {
  const [projects] = useState([
    {id: 1, title: 'Uploaded from Youtube', icon: 'youtube-icon'},
    {id: 2, title: 'Uploaded from Spotify Podcast', icon: 'spotify-icon'},
    {id: 3, title: 'Uploaded from RSS Feed', icon: 'rss-feed-icon'},
  ])

  const handleKeyDown = (event, title) => {
    if (event.key === 'Enter') {
      console.log(title)
    }
  }

  return (
    <div className="upload-page">
      <h1>Upload</h1>
      <div className="project-cards">
        {projects.map(project => (
          <div
            key={project.id}
            className="project-card"
            role="button"
            tabIndex={0}
            onClick={() => console.log(project.title)}
            onKeyDown={e => handleKeyDown(e, project.title)}
          >
            <img
              src={`/path-to-icons/${project.icon}.png`}
              alt={project.title}
            />
            <h2>{project.title}</h2>
          </div>
        ))}
      </div>
      <div
        className="drag-drop-box"
        role="button"
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        <p>Drag and drop files here</p>
        <button type="button">Select File</button>
      </div>
      {/* Pop-up modal for file upload */}
    </div>
  )
}

export default UploadPage
