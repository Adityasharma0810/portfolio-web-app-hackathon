import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  // Team members data
  const teamMembers = [
    {
      name: "Aditya Sharma",
      role: "Team Lead",
      email: "aditya.sharma@codeforge.dev",
      phone: "(123) 456-7890"
    },
    {
      name: "Aditya Raj",
      role: "Frontend Developer",
      email: "aditya.raj@codeforge.dev",
      phone: "(123) 456-7891"
    },
    {
      name: "Akshat Khoria",
      role: "Backend Developer",
      email: "akshat.khoria@codeforge.dev",
      phone: "(123) 456-7892"
    },
    {
      name: "Amitrakshar Mukherjee",
      role: "UI/UX Designer",
      email: "amitrakshar.mukherjee@codeforge.dev",
      phone: "(123) 456-7893"
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);

    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setSubmitted(false);
    }, 3000);
  };

  // Contact icon component to reduce repetition
  const ContactIcon = ({ icon }) => (
    <div style={{
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      background: 'var(--bg-gradient)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: '1rem',
      color: 'white'
    }}>
      {icon}
    </div>
  );

  // Social media icon component
  const SocialIcon = ({ children }) => (
    <a href="#" style={{ textDecoration: 'none' }}>
      <div style={{
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        background: 'var(--bg-gradient)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontSize: '1.2rem'
      }}>
        {children}
      </div>
    </a>
  );

  return (
    <div className="content">
      <h1>Contact Code Forge</h1>
      <p>Reach out to our team of expert developers ready to forge your digital vision into reality.</p>

      <div className="card" style={{ maxWidth: '900px', margin: '2rem auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

          {/* Team Members Section */}
          <div>
            <h3>The Code Forge Team</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginTop: '1rem' }}>
              {teamMembers.map((member, index) => (
                <div key={index} style={{
                  flex: '1 1 300px',
                  padding: '1rem',
                  borderRadius: '8px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  background: 'var(--card-bg, #ffffff)'
                }}>
                  <h4 style={{ marginTop: 0 }}>{member.name}</h4>
                  <p style={{ color: 'var(--secondary)', marginBottom: '1rem' }}>{member.role}</p>

                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <ContactIcon icon="📧" />
                    <div>
                      <p style={{ margin: 0, fontSize: '0.9rem' }}>{member.email}</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <ContactIcon icon="📱" />
                    <div>
                      <p style={{ margin: 0, fontSize: '0.9rem' }}>{member.phone}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
            <div style={{ flex: 1, minWidth: '250px' }}>
              <h3>Get In Touch</h3>
              <p style={{ marginTop: '1rem' }}>
                Our team is currently available for freelance work and collaborations.
                If you have a project that needs creative minds, let's talk!
              </p>

              <div style={{ marginTop: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <ContactIcon icon="📧" />
                  <div>
                    <h4 style={{ margin: 0 }}>Team Email</h4>
                    <p style={{ margin: 0 }}>codeforge.team@gmail.com</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <ContactIcon icon="📱" />
                  <div>
                    <h4 style={{ margin: 0 }}>Team Phone</h4>
                    <p style={{ margin: 0 }}>(123) 456-7890</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <ContactIcon icon="📍" />
                  <div>
                    <h4 style={{ margin: 0 }}>Location</h4>
                    <p style={{ margin: 0 }}>Bangalore, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ flex: 1, minWidth: '250px' }}>
              <h3>Send Us a Message</h3>

              {submitted ? (
                <div style={{
                  padding: '1rem',
                  backgroundColor: 'rgba(16, 185, 129, 0.1)',
                  borderRadius: '8px',
                  marginTop: '1rem',
                  color: 'var(--secondary)',
                  border: '1px solid var(--secondary)'
                }}>
                  Thank you for your message! Our team will get back to you soon.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <button type="submit">Send Message</button>
                </form>
              )}
            </div>
          </div>

          <div>
            <h3>Connect With Us</h3>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              <SocialIcon>in</SocialIcon>
              <SocialIcon>gh</SocialIcon>
              <SocialIcon>tw</SocialIcon>
              <SocialIcon>ig</SocialIcon>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
