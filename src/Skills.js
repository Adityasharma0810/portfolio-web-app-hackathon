import React, { useState } from 'react';

function Skills() {
  const [activeTab, setActiveTab] = useState('team');

  // Team members with their individual skills
  const teamMembers = [
    {
      name: "Aditya Sharma",
      role: "Team Lead",
      skills: [
        { category: "Frontend", items: ["React", "JavaScript", "TypeScript", "Redux"] },
        { category: "Backend", items: ["Node.js", "Express", "MongoDB", "RESTful APIs"] },
        { category: "DevOps", items: ["Git", "Docker", "AWS", "CI/CD"] }
      ]
    },
    {
      name: "Aditya Raj",
      role: "Frontend Developer",
      skills: [
        { category: "Frontend", items: ["React", "Vue.js", "CSS/SASS", "Responsive Design"] },
        { category: "UI Frameworks", items: ["Material UI", "Bootstrap", "Tailwind CSS"] },
        { category: "Tools", items: ["Webpack", "Vite", "Jest", "Storybook"] }
      ]
    },
    {
      name: "Akshat Khoria",
      role: "Backend Developer",
      skills: [
        { category: "Backend", items: ["Node.js", "Python", "Django", "Express"] },
        { category: "Database", items: ["MongoDB", "PostgreSQL", "MySQL", "Redis"] },
        { category: "Cloud", items: ["AWS", "Firebase", "Azure", "Serverless"] }
      ]
    },
    {
      name: "Amitrakshar Mukherjee",
      role: "UI/UX Designer",
      skills: [
        { category: "Design", items: ["Figma", "Adobe XD", "Sketch", "Photoshop"] },
        { category: "Frontend", items: ["HTML/CSS", "JavaScript", "Animation"] },
        { category: "UX", items: ["User Research", "Wireframing", "Prototyping", "Usability Testing"] }
      ]
    }
  ];

  // Team collective skills
  const teamSkills = [
    {
      category: "Frontend Development",
      skills: [
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "JavaScript", level: 95 },
        { name: "React", level: 90 },
        { name: "Redux", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "Responsive Design", level: 95 },
        { name: "UI Frameworks", level: 90 }
      ]
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express", level: 85 },
        { name: "Python", level: 80 },
        { name: "Django", level: 75 },
        { name: "RESTful APIs", level: 90 },
        { name: "GraphQL", level: 75 }
      ]
    },
    {
      category: "Database & Cloud",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "MySQL", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "Firebase", level: 85 },
        { name: "AWS", level: 75 },
        { name: "Azure", level: 70 }
      ]
    },
    {
      category: "Design & UX",
      skills: [
        { name: "UI Design", level: 90 },
        { name: "UX Research", level: 85 },
        { name: "Figma", level: 90 },
        { name: "Adobe XD", level: 85 },
        { name: "Prototyping", level: 90 },
        { name: "Wireframing", level: 85 }
      ]
    }
  ];

  return (
    <div className="content">
      <h1>Our Skills</h1>
      <p>Code Forge combines diverse talents to deliver comprehensive digital solutions.</p>

      <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0' }}>
        <div style={{
          display: 'flex',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '8px',
          padding: '0.5rem',
          gap: '1rem'
        }}>
          <button
            onClick={() => setActiveTab('team')}
            style={{
              padding: '0.5rem 1.5rem',
              borderRadius: '6px',
              border: 'none',
              background: activeTab === 'team' ? 'var(--bg-gradient)' : 'transparent',
              color: activeTab === 'team' ? 'white' : 'inherit',
              cursor: 'pointer'
            }}
          >
            Team Skills
          </button>
          <button
            onClick={() => setActiveTab('members')}
            style={{
              padding: '0.5rem 1.5rem',
              borderRadius: '6px',
              border: 'none',
              background: activeTab === 'members' ? 'var(--bg-gradient)' : 'transparent',
              color: activeTab === 'members' ? 'white' : 'inherit',
              cursor: 'pointer'
            }}
          >
            Individual Skills
          </button>
        </div>
      </div>

      {activeTab === 'team' ? (
        // Team collective skills view
        <div>
          {teamSkills.map((category, index) => (
            <div className="card" key={index} style={{ marginBottom: '2rem' }}>
              <h2>{category.category}</h2>
              <div className="skills-container">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    {skill.name}
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '1.5rem' }}>
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} style={{ marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div style={{
                      height: '8px',
                      width: '100%',
                      backgroundColor: 'rgba(99, 102, 241, 0.1)',
                      borderRadius: '4px',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        height: '100%',
                        width: `${skill.level}%`,
                        background: 'var(--bg-gradient)',
                        borderRadius: '4px',
                        transition: 'width 1s ease-in-out'
                      }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        // Individual team members skills
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {teamMembers.map((member, index) => (
            <div className="card" key={index}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: 'var(--bg-gradient)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: 'white',
                  fontSize: '1.5rem',
                  marginRight: '1rem'
                }}>
                  {member.name.charAt(0)}
                </div>
                <div>
                  <h2 style={{ margin: '0 0 0.25rem 0' }}>{member.name}</h2>
                  <p style={{ margin: 0, color: 'var(--secondary, #888)' }}>{member.role}</p>
                </div>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
                {member.skills.map((skillSet, skillSetIndex) => (
                  <div key={skillSetIndex} style={{ flex: '1 1 250px' }}>
                    <h3 style={{ fontSize: '1.1rem', marginTop: 0 }}>{skillSet.category}</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {skillSet.items.map((skill, skillIndex) => (
                        <div key={skillIndex} className="skill-item">
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Skills;
