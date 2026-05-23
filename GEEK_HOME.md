# Geek Terminal Personal Homepage

A modern, geek-style personal homepage for Yinghao Zhang, built with Jekyll and featuring a terminal-inspired design.

## Features

### 🎨 Design
- **Dark Theme**: Classic geek aesthetic with deep dark colors
- **Terminal Interface**: Mimics a command-line terminal window
- **ASCII Art**: Features a stylized "YINGHAO" ASCII banner
- **Glitch Effects**: Animated glitch effect on the name
- **Typing Animation**: Terminal-style typing effect for commands

### 🔧 Technical Features
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Smooth Animations**: CSS animations and transitions for better UX
- **Interactive Elements**: Hover effects and keyboard shortcuts
- **Modern CSS**: Uses CSS variables, flexbox, and grid layout

### 📱 Content Sections
- **Profile**: Avatar, name, title, and location
- **Research Interests**: Brief description of research focus
- **Education**: Academic background and degrees
- **Publications**: List of key publications with venues
- **Skills**: Visual skill bars for technical abilities
- **Contact**: Social links and email

## Keyboard Shortcuts
- `Ctrl + Shift + T`: Toggle theme (light/dark)
- `Ctrl + Shift + M`: Toggle matrix rain background (optional)

## File Structure
```
├── _layouts/
│   └── geek.html          # Main layout file
├── assets/
│   ├── css/
│   │   └── geek-styles.css # Additional styles
│   └── js/
│       └── geek-terminal.js # Interactive JavaScript
├── _pages/
│   └── about.md           # Main content
└── README.md              # This file
```

## Customization

### Colors
Edit the CSS variables in `geek.html` or `geek-styles.css`:
```css
:root {
    --bg-primary: #0d1117;
    --accent-primary: #58a6ff;
    --accent-secondary: #7ee787;
    /* ... */
}
```

### ASCII Art
Modify the ASCII art in `geek.html`:
```html
<div class="ascii-art">
    YOUR_ASCII_ART_HERE
</div>
```

### Content
Update `_pages/about.md` with your personal information.

## Technologies Used
- **Jekyll**: Static site generator
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with variables and animations
- **JavaScript**: Interactive effects and animations
- **Git**: Version control

## Browser Support
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## License
This project is open source and available under the MIT License.

## Author
Yinghao Zhang - PhD Candidate at Harbin Institute of Technology

---

**Built with ❤️ and lots of ☕**