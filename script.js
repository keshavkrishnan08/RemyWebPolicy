// Typewriter effect for the privacy policy
class TypewriterEffect {
    constructor(element, options = {}) {
        this.element = element;
        this.text = element.innerHTML;
        this.speed = options.speed || 30;
        this.delay = options.delay || 100;
        this.cursor = options.cursor || '|';
        this.cursorBlinkSpeed = options.cursorBlinkSpeed || 500;
        
        this.init();
    }
    
    init() {
        this.element.innerHTML = '';
        this.element.style.borderRight = `2px solid #00d4ff`;
        this.element.style.animation = `blink ${this.cursorBlinkSpeed}ms infinite`;
        
        this.typeText();
    }
    
    async typeText() {
        const textNodes = this.parseHTML(this.text);
        let currentIndex = 0;
        
        for (const node of textNodes) {
            if (node.type === 'text') {
                await this.typeString(node.content);
            } else if (node.type === 'element') {
                await this.typeElement(node);
            }
            
            // Add a small delay between elements
            await this.sleep(100);
        }
        
        // Remove cursor after typing is complete
        setTimeout(() => {
            this.element.style.borderRight = 'none';
            this.element.style.animation = 'none';
        }, 1000);
    }
    
    async typeString(text) {
        for (let i = 0; i < text.length; i++) {
            this.element.innerHTML += text[i];
            
            // Scroll to bottom to keep content visible
            this.element.scrollIntoView({ behavior: 'smooth', block: 'end' });
            
            await this.sleep(this.speed);
        }
    }
    
    async typeElement(elementData) {
        const tag = elementData.tag;
        const attributes = elementData.attributes || {};
        const content = elementData.content || '';
        
        // Type opening tag
        this.element.innerHTML += `<${tag}`;
        
        // Type attributes
        for (const [key, value] of Object.entries(attributes)) {
            this.element.innerHTML += ` ${key}="${value}"`;
        }
        
        this.element.innerHTML += '>';
        
        // Type content
        if (content) {
            await this.typeString(content);
        }
        
        // Type closing tag
        this.element.innerHTML += `</${tag}>`;
    }
    
    parseHTML(html) {
        const nodes = [];
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        
        const walker = document.createTreeWalker(
            doc.body,
            NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT,
            null,
            false
        );
        
        let node;
        while (node = walker.nextNode()) {
            if (node.nodeType === Node.TEXT_NODE) {
                const text = node.textContent.trim();
                if (text) {
                    nodes.push({ type: 'text', content: text + ' ' });
                }
            } else if (node.nodeType === Node.ELEMENT_NODE) {
                const tag = node.tagName.toLowerCase();
                const attributes = {};
                
                for (const attr of node.attributes) {
                    attributes[attr.name] = attr.value;
                }
                
                nodes.push({
                    type: 'element',
                    tag: tag,
                    attributes: attributes,
                    content: node.textContent.trim()
                });
            }
        }
        
        return nodes;
    }
    
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// Smooth scroll effect
class SmoothScroll {
    constructor() {
        this.init();
    }
    
    init() {
        // Add smooth scrolling to all anchor links
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

// Parallax effect for background
class ParallaxEffect {
    constructor() {
        this.init();
    }
    
    init() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = document.querySelector('.container');
            
            if (parallax) {
                const speed = scrolled * 0.5;
                parallax.style.transform = `translateY(${speed}px)`;
            }
        });
    }
}

// Intersection Observer for animations
class ScrollAnimations {
    constructor() {
        this.init();
    }
    
    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        // Observe elements for animation
        document.querySelectorAll('.typewriter-text h2, .typewriter-text p, .typewriter-text ul').forEach(el => {
            observer.observe(el);
        });
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize other effects
    new SmoothScroll();
    new ScrollAnimations();
    
    // Remove loading class immediately
    document.body.classList.remove('loading');
});

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    @keyframes blink {
        0%, 50% { border-color: #00d4ff; }
        51%, 100% { border-color: transparent; }
    }
    
    .animate-in {
        animation: slideInUp 0.6s ease-out forwards;
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .loading {
        overflow: hidden;
    }
    
    .loading .typewriter-container {
        opacity: 0.3;
    }
`;
document.head.appendChild(style);
