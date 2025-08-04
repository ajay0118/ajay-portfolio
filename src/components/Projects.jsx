import './Projects.css';

function Projects() {
   const projectList = [
    
    {
        title :  "Lung Disease Classification Using ResNet50 with Improved Adaptive Grey Wolf Optimization (IAGWO):",
        description : "Developed a deep learning model for multi-class lung disease classification (Normal, Edema, Pleural Effusion) using ResNet50 and DICOM images. Integrated Improved Adaptive Grey Wolf Optimization (IAGWO) for efficient hyperparameter tuning and performance enhancement.",
        technologies: ["Python", "TensorFlow", "ResNet50", "Deep Learning", "IAGWO"],
        demo: null,
        code: null
    },
    {
        title : "Personal Portfolio Website",
        description: "Designed and developed a fully responsive personal portfolio using ReactJS to showcase my projects, skills, and contact information. It reflects my identity as a developer and serves as a platform to connect with potential employers and collaborators.",
        technologies: ["ReactJS", "HTML", "CSS", "React Icons", "Vite"],
        demo: null,
        code: null
    },

    {
        title : "ShoeHUB",
        description: "Built an intuitive e-commerce website with an appealing user interface, integrated with Stripe for payment processing and implemented an autocomplete feature using the Trie data structure. Tools Used: ReactJS, Express, Sneaks API for Shoe data, Stripe payment Portal and payment service (Test Mode). Trie Data Structure for autocomplete feature.",
        technologies: ["ReactJS", "Express", "Stripe", "Trie Data Structure", "API Integration"],
        demo: null,
        code: null
    },
    {
        title : "Automated Mail Generation",
        description: "Developed a Python script to automate email generation, streamlining communication for the Department's Association of Computer Applications for automated email and certification distribution. Tools Used: Python, Pandas, email, openpyxl, SSL, smtplib.",
        technologies: ["Python", "Pandas", "Email Automation", "Excel", "SSL"],
        demo: null,
        code: null
    },
    {
        title: "Lumen Passus (IoT project): ",
        description: "Lumen Passus is a smart shoe designed to provide guidance and improve mobility for visually impaired people. Utilizing Arduino Uno, ultrasonic sensors, and a buzzer, this smart shoe detects obstacles and alerts the user through sound, ensuring a safer and more confident journey.",
        technologies: ["Arduino", "IoT", "Ultrasonic Sensors", "Hardware", "C++"],
        demo: null,
        code: null
    },
    {
        title : "LearnLocate Android Application:",
        description : "Developed an e-learning Android application using Java and Android Studio, which serves as a comprehensive learning management system. This project integrates Firebase as the backend database to store and manage user data, course materials, and progress tracking.",
        technologies: ["Java", "Android Studio", "Firebase", "Mobile Development", "LMS"],
        demo: null,
        code: null
    }
   ];

   return (
    <section id='projects' className='projects-section' aria-label="Projects">
        <div className='projects-container'>
            <h2>My Projects</h2>
            <div className='projects-grid'>
                {projectList.map((project,index) => (
                    <div className='project-card' key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="project-tech">
                            {project.technologies.map((tech, techIndex) => (
                                <span key={techIndex} className="tech-badge">{tech}</span>
                            ))}
                        </div>
                        <div className="project-links">
                            {project.demo && (
                                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                                    Live Demo
                                </a>
                            )}
                            {project.code && (
                                <a href={project.code} target="_blank" rel="noopener noreferrer" className="project-link">
                                    Source Code
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
   );
}

export default Projects;