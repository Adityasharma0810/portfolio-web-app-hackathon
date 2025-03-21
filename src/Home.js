import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [text, setText] = useState('');
  const fullText = "Digital Solutions";
  const [index, setIndex] = useState(0);

  // Typing effect
  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + fullText[index]);
        setIndex(index + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [index]);

  // Mouse particle effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = `${e.pageX}px`;
      particle.style.top = `${e.pageY}px`;
      document.body.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, 1000);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Team members data
  const teamMembers = [
    {
      name: "Aditya Sharma",
      role: "Team Lead"
    },
    {
      name: "Aditya Raj",
      role: "Frontend Developer"
    },
    {
      name: "Akshat Khoria",
      role: "Backend Developer"
    },
    {
      name: "Amitrakshar Mukherjee",
      role: "UI/UX Designer"
    }
  ];

  return (
    <div className="content">
      <h1>
        Welcome to <span className="highlight">Code Forge</span>
      </h1>
      <h2>
        We Craft <span className="typing">{text}</span>
      </h2>
      <p>
        A collaborative team of developers and designers passionate about creating
        beautiful, functional, and user-friendly web applications.
        With expertise in modern web technologies and a keen eye for design.
      </p>

      <div className="team-preview" style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '1rem',
        margin: '2rem 0'
      }}>
        {teamMembers.map((member, index) => (
          <div key={index} style={{
            textAlign: 'center',
            padding: '1rem',
            borderRadius: '8px',
            background: 'var(--card-bg, rgba(255, 255, 255, 0.1))',
            backdropFilter: 'blur(10px)',
            minWidth: '150px'
          }}>
            <h3 style={{ margin: '0 0 0.5rem 0' }}>{member.name}</h3>
            <p style={{ margin: 0, color: 'var(--secondary, #888)' }}>{member.role}</p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '2rem' }}>
        <Link to="/projects">
          <button>View Our Work</button>
        </Link>
        <Link to="/contact" style={{ marginLeft: '1rem' }}>
          <button>Contact Us</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
