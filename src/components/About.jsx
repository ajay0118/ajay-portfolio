import './About.css';

function About() {
    return ( 
        <section id='about' className='about-section' data-aos="fade-up" aria-label="About Me"> 
            <div className='about-container'>
                <h2>About Me</h2>
                <p>
                    I’m Ajayvenkatesh, an MCA graduate passionate about full-stack development and real-world problem solving. I love turning ideas into impactful applications and continuously exploring new technologies. My journey has been shaped by a strong academic foundation and a hands-on, self-driven learning approach. I’m now seeking software development roles where I can grow, adapt quickly, and contribute with purpose.                    
                </p>

                <h3>Skills</h3>
                <ul className='skills-list'>
                    <li><img src="/icons/java.png" alt="Java" /> Java</li>
                    <li><img src="/icons/html.png" alt="HTML5" /> HTML5</li>
                    <li><img src="/icons/css.png" alt="CSS" /> CSS</li>
                    <li><img src="/icons/javascript.png" alt="JavaScript" /> JavaScript</li>
                    <li><img src="/icons/reactjs.png" alt="React" /> React.js</li>
                    <li><img src="/icons/nodejs.png" alt="Node.js" /> Node.js</li>
                    <li><img src="/icons/mysql.png" alt="MySQL" /> MySQL</li>
                    <li><img src="/icons/mongodb.png" alt="MongoDB" /> MongoDB</li>
                    <li><img src="/icons/github.png" alt="GitHub" /> GitHub</li>
                    <li><img src="/icons/ml.png" alt="Machine Learning" /> Machine Learning</li>
                    <li><img src="/icons/cnn.png" alt="CNN" /> CNN</li>
                    <li><img src="/icons/db.png" alt="Database" /> Database</li>
                </ul>  
            </div>
        </section>
    );
}

export default About;