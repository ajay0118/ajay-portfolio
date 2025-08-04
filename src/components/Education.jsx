import './Education.css';

function Education() {
  return (
    <section id="education" className="education-section" aria-label="Education Timeline">
      <div className="education-container">
        <h2>📚 My Education Journey</h2>
        <div className="timeline">

          <div className="timeline-item" >
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>🏫 HSC (2020)</h3>
              <p>Sourashtra Hr. Sec. School</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>🎓 Undergraduate (2023)</h3>
              <p>Bachelor of Science (computer science), The American College</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>📈 TANCET Score</h3>
              <p>Scored <strong>97.855</strong> in TANCET 2023</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>🎓 Postgraduate (2025)</h3>
              <p>Master of Computer Applications (MCA), College of Engineering, Guindy (Anna University)</p>
            </div>
          </div>

          

        </div>
      </div>
    </section>
  );
}

export default Education;
