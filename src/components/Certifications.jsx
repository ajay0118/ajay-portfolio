import { useRef, useState, useEffect } from 'react';
import './Certifications.css';

function Certifications() {
  const certificationsRef = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

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

    if (certificationsRef.current) {
      observer.observe(certificationsRef.current);
    }

    return () => {
      if (certificationsRef.current) {
        observer.unobserve(certificationsRef.current);
      }
    };
  }, [isVisible]);

  const certifications = [
    {
      id: 1,
      name: "Frontend Developer",
      organization: "Great Learning",
      image: "certifications/certificate_1.jpg"
    },
    {
      id: 2,
      name: "Python Programming",
      organization: "Uniathena",
      image: "certifications/certificate_2.png"
    }
  ];

  const openCertificate = (cert) => {
    setSelectedCertificate(cert);
  };

  const closeCertificate = () => {
    setSelectedCertificate(null);
  };

  return (
    <section
      ref={certificationsRef}
      id="certifications"
      className={`certifications-section ${isVisible ? 'animate-in' : ''}`}
    >
      <div className="certifications-container">
        <h2 className={`certifications-heading ${isVisible ? 'animate-in' : ''}`}>
            Certifications 🏅
        </h2>
        
        <div className={`certifications-grid ${isVisible ? 'animate-in' : ''}`}>
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className="certification-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h3 className="certification-name">{cert.name}</h3>
              <p className="certification-organization">{cert.organization}</p>
              
              <div className="certificate-image-container" onClick={() => openCertificate(cert)}>
                <img 
                  src={cert.image} 
                  alt={`${cert.name} certificate`}
                  className="certificate-image"
                />
                <div className="image-overlay">
                  <span>Click to View</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate View Modal */}
      {selectedCertificate && (
        <div className="modal-overlay" onClick={closeCertificate}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{selectedCertificate.name}</h3>
              <button className="close-btn" onClick={closeCertificate}>×</button>
            </div>
            <img 
              src={selectedCertificate.image} 
              alt={`${selectedCertificate.name} certificate`}
              className="modal-image"
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default Certifications; 