// Geek Portfolio JavaScript
// Keyboard navigation and scroll animations

document.addEventListener('DOMContentLoaded', function() {
    // Keyboard navigation between pages
    const tabs = document.querySelectorAll('.nav-tab');
    
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
