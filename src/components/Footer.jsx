import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Ajay Venkatesh. All rights reserved.</p>
      <a href="#home" className="back-to-top">⬆ Back to top</a>
    </footer>
  );
}

export default Footer;
