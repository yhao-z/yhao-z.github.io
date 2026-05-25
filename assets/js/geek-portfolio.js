// Geek Portfolio JavaScript
// Keyboard navigation and scroll animations

document.addEventListener('DOMContentLoaded', function() {
    // Keyboard navigation between pages
    const tabs = document.querySelectorAll('.nav-tab');
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const menuPanel = document.querySelector('.mobile-menu-panel');
    const langToggle = document.querySelector('.mobile-lang-toggle');
    const langPanel = document.querySelector('.mobile-lang-panel');
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
            const tabsArray = Array.from(tabs);
            const currentPath = window.location.pathname;
            
            // 找到当前页面对应的索引
            let currentIndex = -1;
            tabsArray.forEach((tab, index) => {
                const href = tab.getAttribute('href');
                // 处理根路径和子路径
                if (href === currentPath || 
                    (href === '/' && (currentPath === '/' || currentPath === '')) ||
                    (href !== '/' && currentPath.startsWith(href))) {
                    currentIndex = index;
                }
            });
            
            if (currentIndex === -1) return;
            
            let newIndex;
            if (e.key === 'ArrowLeft') {
                newIndex = currentIndex > 0 ? currentIndex - 1 : tabsArray.length - 1;
            } else {
                newIndex = currentIndex < tabsArray.length - 1 ? currentIndex + 1 : 0;
            }
            
            window.location.href = tabsArray[newIndex].getAttribute('href');
        }
    });

    if (menuToggle && menuPanel) {
        const closeMenu = () => {
            menuPanel.classList.remove('open');
            menuPanel.setAttribute('aria-hidden', 'true');
            menuToggle.setAttribute('aria-expanded', 'false');
        };

        menuToggle.addEventListener('click', function(event) {
            event.stopPropagation();
            const isOpen = menuPanel.classList.toggle('open');
            menuPanel.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
            menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });

        document.addEventListener('click', function(event) {
            if (!menuPanel.contains(event.target) && !menuToggle.contains(event.target)) {
                closeMenu();
            }
        });

        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                closeMenu();
            }
        });
    }

    if (langToggle && langPanel) {
        const closeLangMenu = () => {
            langPanel.classList.remove('open');
            langPanel.setAttribute('aria-hidden', 'true');
            langToggle.setAttribute('aria-expanded', 'false');
        };

        langToggle.addEventListener('click', function(event) {
            event.stopPropagation();
            const isOpen = langPanel.classList.toggle('open');
            langPanel.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
            langToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });

        langPanel.addEventListener('click', function(event) {
            const target = event.target;
            if (target && target.matches('.lang-btn')) {
                closeLangMenu();
            }
        });

        document.addEventListener('click', function(event) {
            if (!langPanel.contains(event.target) && !langToggle.contains(event.target)) {
                closeLangMenu();
            }
        });

        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                closeLangMenu();
            }
        });
    }

    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(section);
    });
});
