# Ajay Venkatesh - Portfolio Website

A modern, responsive portfolio website built with React and Vite, showcasing my skills, projects, and professional journey.

## 🚀 Features

- **Modern Design**: Clean, professional design with glassmorphism effects
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: AOS (Animate On Scroll) library for engaging animations
- **Contact Form**: Integrated with EmailJS for seamless communication
- **Dark Mode**: Elegant dark theme with consistent styling
- **Accessibility**: ARIA labels and keyboard navigation support
- **Performance**: Optimized with Vite for fast loading times

## 🛠️ Technologies Used

- **Frontend**: React 19, Vite
- **Styling**: CSS3 with custom properties and animations
- **Icons**: React Icons
- **Animations**: AOS (Animate On Scroll)
- **Contact Form**: EmailJS
- **Deployment**: Ready for Vercel, Netlify, or GitHub Pages

## 📁 Project Structure

```
ajay-portfolio/
├── public/
│   ├── icons/          # Technology icons
│   ├── profile.jpeg    # Profile image
│   └── AJAYVENKATESH_PS_RESUME.pdf
├── src/
│   ├── components/     # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Education.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx         # Main app component
│   └── main.jsx        # Entry point
└── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ajay-portfolio.git
   cd ajay-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📝 Configuration

### EmailJS Setup
1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a new email service
3. Create an email template
4. Update the configuration in `src/components/Contact.jsx`:
   ```javascript
   emailjs.sendForm(
     'YOUR_SERVICE_ID',     // Replace with your service ID
     'YOUR_TEMPLATE_ID',    // Replace with your template ID
     form.current,
     'YOUR_PUBLIC_KEY'      // Replace with your public key
   )
   ```

### Customization
- Update personal information in component files
- Replace profile image in `public/profile.jpeg`
- Update resume PDF in `public/AJAYVENKATESH_PS_RESUME.pdf`
- Modify color scheme in CSS custom properties
- Add/remove projects in `src/components/Projects.jsx`

## 🎨 Customization Guide

### Colors
The portfolio uses CSS custom properties for easy color customization:
```css
:root {
  --primary: #00bfff;
  --highlight: #00bfff;
  --background: #0a0a0a;
  --text: #f0f0f0;
}
```

### Adding New Sections
1. Create a new component in `src/components/`
2. Add corresponding CSS file
3. Import and add to `src/App.jsx`
4. Update navigation in `src/components/Navbar.jsx`

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload `dist` folder to Netlify

### GitHub Pages
1. Add `homepage` field to `package.json`
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add deploy script to `package.json`
4. Run: `npm run deploy`

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Email**: ajayvenkateshmac0118@gmail.com
- **LinkedIn**: [Ajay Venkatesh](https://linkedin.com/in/ajayvenkateshps)
- **GitHub**: [ajay0118](https://github.com/ajay0118)

---

Made with ❤️ by Ajay Venkatesh
