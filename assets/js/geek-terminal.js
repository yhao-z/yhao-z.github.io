// Geek Terminal JavaScript Effects

// Matrix Rain Effect (Optional Background)
class MatrixRain {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.zIndex = '-1';
        this.canvas.style.opacity = '0.05';
        document.body.appendChild(this.canvas);
        
        this.columns = Math.floor(window.innerWidth / 20);
        this.drops = Array(this.columns).fill(1);
        this.chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
        
        this.resize();
        window.addEventListener('resize', () => this.resize());
        this.animate();
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.columns = Math.floor(window.innerWidth / 20);
        this.drops = Array(this.columns).fill(1);
    }
    
    animate() {
        this.ctx.fillStyle = 'rgba(13, 17, 23, 0.05)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.ctx.fillStyle = '#0f0';
        this.ctx.font = '15px monospace';
        
        for (let i = 0; i < this.drops.length; i++) {
            const text = this.chars[Math.floor(Math.random() * this.chars.length)];
            this.ctx.fillText(text, i * 20, this.drops[i] * 20);
            
            if (this.drops[i] * 20 > this.canvas.height && Math.random() > 0.975) {
                this.drops[i] = 0;
            }
            this.drops[i]++;
        }
        
        requestAnimationFrame(() => this.animate());
    }
}

// Terminal Typing Effect
class TerminalTyping {
    constructor() {
        this.commands = [
            'echo "Hello, World!"',
            'cat about.txt',
            'ls -la projects/',
            'git status',
            'python research.py',
            'whoami',
            'pwd',
            'neofetch'
        ];
        
        this.commandElement = document.querySelector('.command');
        this.currentIndex = 0;
        this.currentChar = 0;
        this.isDeleting = false;
        
        this.type();
    }
    
    type() {
        const currentCommand = this.commands[this.currentIndex];
        
        if (this.isDeleting) {
            this.commandElement.textContent = currentCommand.substring(0, this.currentChar - 1);
            this.currentChar--;
        } else {
            this.commandElement.textContent = currentCommand.substring(0, this.currentChar + 1);
            this.currentChar++;
        }
        
        let typeSpeed = this.isDeleting ? 50 : 100;
        
        if (!this.isDeleting && this.currentChar === currentCommand.length) {
            typeSpeed = 2000;
            this.isDeleting = true;
        } else if (this.isDeleting && this.currentChar === 0) {
            this.isDeleting = false;
            this.currentIndex = (this.currentIndex + 1) % this.commands.length;
            typeSpeed = 500;
        }
        
        setTimeout(() => this.type(), typeSpeed);
    }
}

// Glitch Effect on Hover
class GlitchEffect {
    constructor() {
        this.glitchElements = document.querySelectorAll('.glitch');
        
        this.glitchElements.forEach(element => {
            element.addEventListener('mouseenter', () => this.triggerGlitch(element));
            element.addEventListener('mouseleave', () => this.resetGlitch(element));
        });
    }
    
    triggerGlitch(element) {
        element.style.animation = 'none';
        setTimeout(() => {
            element.style.animation = 'glitch-1 0.3s infinite linear alternate-reverse, glitch-2 0.3s infinite linear alternate-reverse';
        }, 10);
    }
    
    resetGlitch(element) {
        element.style.animation = '';
    }
}

// Smooth Scroll for Anchor Links
class SmoothScroll {
    constructor() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

// Parallax Effect for Terminal Window
class ParallaxEffect {
    constructor() {
        this.terminal = document.querySelector('.terminal-window');
        this.mouseX = 0;
        this.mouseY = 0;
        
        document.addEventListener('mousemove', (e) => {
            this.mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
            this.mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
            
            this.updateParallax();
        });
    }
    
    updateParallax() {
        if (this.terminal) {
            const rotateX = this.mouseY * 2;
            const rotateY = this.mouseX * 2;
            
            this.terminal.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        }
    }
}

// Skill Progress Animation
class SkillProgressAnimation {
    constructor() {
        this.skills = document.querySelectorAll('.skill-progress');
        this.animated = false;
        
        this.observeSkills();
    }
    
    observeSkills() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.animated) {
                    this.animateSkills();
                    this.animated = true;
                }
            });
        }, { threshold: 0.5 });
        
        const skillsSection = document.querySelector('.skills-grid');
        if (skillsSection) {
            observer.observe(skillsSection);
        }
    }
    
    animateSkills() {
        this.skills.forEach((skill, index) => {
            setTimeout(() => {
                const width = skill.style.width;
                skill.style.width = '0%';
                setTimeout(() => {
                    skill.style.width = width;
                }, 50);
            }, index * 100);
        });
    }
}

// Initialize all effects when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize effects
    new TerminalTyping();
    new GlitchEffect();
    new SmoothScroll();
    new SkillProgressAnimation();
    
    // Optional: Enable matrix rain (commented out by default)
    // new MatrixRain();
    
    // Optional: Enable parallax effect (commented out by default)
    // new ParallaxEffect();
    
    // Update current date
    const dateElement = document.getElementById('current-date');
    if (dateElement) {
        dateElement.textContent = new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
    
    // Add keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // Ctrl + Shift + T to toggle terminal theme
        if (e.ctrlKey && e.shiftKey && e.key === 'T') {
            e.preventDefault();
            document.body.classList.toggle('light-theme');
        }
        
        // Ctrl + Shift + M to toggle matrix rain
        if (e.ctrlKey && e.shiftKey && e.key === 'M') {
            e.preventDefault();
            const matrixCanvas = document.querySelector('canvas');
            if (matrixCanvas) {
                matrixCanvas.style.display = matrixCanvas.style.display === 'none' ? 'block' : 'none';
            }
        }
    });
    
    console.log('%c Welcome to Yinghao Zhang\'s Geek Terminal! ', 'background: #58a6ff; color: #0d1117; font-size: 16px; padding: 10px;');
    console.log('%c Press Ctrl+Shift+T to toggle theme ', 'background: #7ee787; color: #0d1117; font-size: 12px; padding: 5px;');
});