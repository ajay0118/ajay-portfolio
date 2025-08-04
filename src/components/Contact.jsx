import './Contact.css';
import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

function Contact() {
  const form = useRef();
  const contactRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, [isVisible]);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs.sendForm(
      'portfolio',    
      'template_ckjtjzm',
      form.current,
      'nX2A4iqDvS7UXfNDA'
    )
    .then(() => {
      setSubmitStatus('success');
      form.current.reset();
    })
    .catch((error) => {
      setSubmitStatus('error');
      console.error(error);
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <section 
      ref={contactRef}
      id="contact" 
      className={`contact-section ${isVisible ? 'animate-in' : ''}`} 
      aria-label="Contact Me"
    >
      <h2 className={`contact-heading ${isVisible ? 'animate-in' : ''}`}>📨 Contact Me</h2>
      
      {submitStatus === 'success' && (
        <div className="success-message">
           Message sent successfully! I'll get back to you soon.
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="error-message">
           Failed to send message. Please try again or contact me directly via email.
        </div>
      )}

      <form ref={form} onSubmit={sendEmail} className={`contact-form ${isVisible ? 'animate-in' : ''}`}>
        <div className="form-group">
          <input 
            type="text" 
            name="user_name" 
            placeholder="Your Name" 
            required 
            aria-label="Your Name"
            disabled={isSubmitting}
          />
        </div>
        
        <div className="form-group">
          <input 
            type="email" 
            name="user_email" 
            placeholder="Your Email" 
            required 
            aria-label="Your Email"
            disabled={isSubmitting}
          />
        </div>
        
        <div className="form-group">
          <textarea 
            name="message" 
            placeholder="Your Message" 
            required 
            aria-label="Your Message"
            disabled={isSubmitting}
            rows="5"
          />
        </div>
        
        <button 
          type="submit" 
          disabled={isSubmitting}
          aria-label={isSubmitting ? "Sending message..." : "Send message"}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      <div className={`social-icons ${isVisible ? 'animate-in' : ''}`}>
        <a 
          href="mailto:ajayvenkateshmac0118@gmail.com" 
          aria-label="Send email to Ajay Venkatesh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope />
        </a>
        <a 
          href="https://github.com/ajay0118" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Visit Ajay's GitHub profile"
        >
          <FaGithub />
        </a>
        <a 
          href="https://linkedin.com/in/ajayvenkateshps" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Visit Ajay's LinkedIn profile"
        >
          <FaLinkedin />
        </a>
        <a 
          href="https://instagram.com/a_j_a_y_venkatesh_/" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Visit Ajay's Instagram profile"
        >
          <FaInstagram />
        </a>
      </div>
    </section>
  );
}

export default Contact;
