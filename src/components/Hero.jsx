
import './Hero.css';
function Hero () {
    return(
        <section id="home" className="hero" data-aos = "fade-up" aria-label="Hero Section">
            <div className="hero-content">
                <div className="hero-text">
                    <h1 className="glow-text typewriter">Hi, I'm Ajay Venkatesh</h1>
                    <p>MCA graduate, passionate about building impactful software.</p>
                    <a href="/AJAYVENKATESH_PS_RESUME.pdf" download className="hero-btn">Download Resume</a>
                </div>
                <div className="hero-image">
                    <img src="./profile.jpeg" alt=" Ajay's Profile"/>
                </div>
            </div>
        </section>
    );
}

export default Hero;