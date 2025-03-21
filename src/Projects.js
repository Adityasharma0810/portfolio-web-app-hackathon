import React from 'react';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce application with user authentication, product management, and payment integration.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
      image: 'https://via.placeholder.com/300x200?text=E-Commerce+App',
      link: '#',
      team: ['Aditya Sharma', 'Akshat Khoria']
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A productivity application for managing tasks, projects, and deadlines with team collaboration features.',
      technologies: ['React', 'Redux', 'Firebase', 'Material UI'],
      image: 'https://via.placeholder.com/300x200?text=Task+Manager',
      link: '#',
      team: ['Aditya Raj', 'Amitrakshar Mukherjee']
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A weather application that provides real-time weather data and forecasts for locations worldwide.',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Weather API'],
      image: 'https://via.placeholder.com/300x200?text=Weather+App',
      link: '#',
      team: ['Aditya Sharma', 'Aditya Raj']
    },
    {
      id: 4,
      title: 'Social Media Analytics',
      description: 'An analytics dashboard for tracking social media performance across multiple platforms.',
      technologies: ['React', 'Chart.js', 'Node.js', 'Social Media APIs'],
      image: 'https://via.placeholder.com/300x200?text=Social+Dashboard',
      link: '#',
      team: ['Akshat Khoria', 'Amitrakshar Mukherjee']
    },
    {
      id: 5,
      title: 'Recipe Finder App',
      description: 'A web application for discovering and saving recipes based on available ingredients.',
      technologies: ['React', 'CSS Grid', 'Food API', 'LocalStorage'],
      image: 'https://via.placeholder.com/300x200?text=Recipe+Finder',
      link: '#',
      team: ['Aditya Raj', 'Akshat Khoria']
    },
    {
      id: 6,
      title: 'Code Forge Portfolio',
      description: 'Our team portfolio website showcasing our collaborative projects and skills (this website).',
      technologies: ['React', 'React Router', 'CSS3', 'Responsive Design'],
      image: 'https://via.placeholder.com/300x200?text=Code+Forge',
      link: '#',
      team: ['Aditya Sharma', 'Aditya Raj', 'Akshat Khoria', 'Amitrakshar Mukherjee']
    }
  ];

  return (
    <div className="content">
      <h1>Our Projects</h1>
      <p>Here's a selection of projects we've worked on as Code Forge. Each demonstrates our collaborative skills and technical expertise.</p>

      <div className="projects-grid">
        {projects.map(project => (
          <div className="card" key={project.id}>
            <img src={project.image} alt={project.title} style={{ width: '100%', borderRadius: '8px', marginBottom: '1rem' }} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div style={{ margin: '1rem 0' }}>
              <h4 style={{ fontSize: '0.9rem', margin: '0 0 0.5rem 0' }}>Team Members:</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {project.team.map((member, index) => (
                  <span key={index} style={{
                    background: 'var(--bg-gradient, linear-gradient(135deg, #6e8efb, #a777e3))',
                    color: 'white',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '20px',
                    fontSize: '0.8rem'
                  }}>{member}</span>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', margin: '1rem 0' }}>
              {project.technologies.map((tech, index) => (
                <span className="skill-item" key={index}>{tech}</span>
              ))}
            </div>

            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <button>View Project</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
