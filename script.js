// Smooth scrolling for navigation links with focus management
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Set focus to target for accessibility
            setTimeout(() => {
                target.setAttribute('tabindex', '-1');
                target.focus();
                target.addEventListener('blur', () => {
                    target.removeAttribute('tabindex');
                }, { once: true });
            }, 500);
        }
    });
});

// Navbar background change on scroll
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            entry.target.classList.add('animated');
        }
    });
}, observerOptions);

// Observe menu items
document.querySelectorAll('.menu-item').forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = `all 0.6s ease ${index * 0.1}s`;
    observer.observe(item);
});

// Observe info cards
document.querySelectorAll('.info-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `all 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
});

// Observe value cards
document.querySelectorAll('.value-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateX(-50px)';
    card.style.transition = `all 0.8s ease ${index * 0.2}s`;
    observer.observe(card);
});

// Observe testimonial cards
document.querySelectorAll('.testimonial-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'scale(0.9)';
    card.style.transition = `all 0.6s ease ${index * 0.15}s`;
    observer.observe(card);
});

// Observe story section
const storyText = document.querySelector('.story-text');
const storyImage = document.querySelector('.story-image');

if (storyText && storyImage) {
    storyText.style.opacity = '0';
    storyText.style.transform = 'translateX(-30px)';
    storyText.style.transition = 'all 0.8s ease';
    observer.observe(storyText);
    
    storyImage.style.opacity = '0';
    storyImage.style.transform = 'translateX(30px)';
    storyImage.style.transition = 'all 0.8s ease 0.2s';
    observer.observe(storyImage);
}

// Add hover effect for buttons
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

// Keyboard navigation enhancement
document.addEventListener('keydown', (e) => {
    // Allow Escape key to close any focused element
    if (e.key === 'Escape') {
        if (document.activeElement) {
            document.activeElement.blur();
        }
    }
});

// Lazy loading enhancement for images
if ('loading' in HTMLImageElement.prototype) {
    // Browser supports native lazy loading
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.src;
    });
} else {
    // Fallback for browsers that don't support native lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// Reduced motion support for accessibility
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
    // Disable animations for users who prefer reduced motion
    document.querySelectorAll('*').forEach(element => {
        element.style.animation = 'none';
        element.style.transition = 'none';
    });
}

// Announce page changes to screen readers
function announceToScreenReader(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    document.body.appendChild(announcement);
    
    setTimeout(() => {
        document.body.removeChild(announcement);
    }, 1000);
}

// Modal functionality
const modal = document.getElementById('menuModal');
const viewMenuBtn = document.getElementById('viewMenuBtn');
const closeModalBtn = document.getElementById('closeModal');
const modalOverlay = document.querySelector('.modal-overlay');

// Open modal
function openModal() {
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    
    // Trap focus in modal
    closeModalBtn.focus();
    
    // Announce to screen readers
    announceToScreenReader('Menu modal opened');
}

// Close modal
function closeModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    
    // Return focus to trigger button
    viewMenuBtn.focus();
    
    // Announce to screen readers
    announceToScreenReader('Menu modal closed');
}

// Event listeners for modal
if (viewMenuBtn) {
    viewMenuBtn.addEventListener('click', openModal);
}

if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
}

if (modalOverlay) {
    modalOverlay.addEventListener('click', closeModal);
}

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// Trap focus within modal when open
modal.addEventListener('keydown', (e) => {
    if (e.key === 'Tab' && modal.classList.contains('active')) {
        const focusableElements = modal.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
        }
    }
});

// Order Modal functionality
const orderModal = document.getElementById('orderModal');
const orderOnlineBtn = document.getElementById('orderOnlineBtn');
const closeOrderModalBtn = document.getElementById('closeOrderModal');
const orderTriggers = document.querySelectorAll('.order-trigger');

// Cart state
let cart = [];

// Open order modal
function openOrderModal() {
    orderModal.classList.add('active');
    orderModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    closeOrderModalBtn.focus();
    announceToScreenReader('Order modal opened');
}

// Close order modal
function closeOrderModal() {
    orderModal.classList.remove('active');
    orderModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    orderOnlineBtn.focus();
    announceToScreenReader('Order modal closed');
}

// Event listeners for order modal
if (orderOnlineBtn) {
    orderOnlineBtn.addEventListener('click', openOrderModal);
}

orderTriggers.forEach(trigger => {
    trigger.addEventListener('click', openOrderModal);
});

if (closeOrderModalBtn) {
    closeOrderModalBtn.addEventListener('click', closeOrderModal);
}

// Close order modal with Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && orderModal.classList.contains('active')) {
        closeOrderModal();
    }
});

// Add to cart functionality
const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
const cartItemsContainer = document.getElementById('cartItems');
const cartSubtotal = document.getElementById('cartSubtotal');
const cartTax = document.getElementById('cartTax');
const cartTotal = document.getElementById('cartTotal');
const checkoutBtn = document.getElementById('checkoutBtn');

addToCartBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const orderItem = this.closest('.order-item');
        const name = orderItem.dataset.name;
        const price = parseFloat(orderItem.dataset.price);
        const category = orderItem.dataset.category;
        
        addToCart(name, price, category);
        
        // Visual feedback
        this.style.transform = 'scale(1.2)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);
        
        announceToScreenReader(`${name} added to cart`);
    });
});

function addToCart(name, price, category) {
    const existingItem = cart.find(item => item.name === name);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            name: name,
            price: price,
            category: category,
            quantity: 1
        });
    }
    
    updateCart();
}

function removeFromCart(name) {
    cart = cart.filter(item => item.name !== name);
    updateCart();
    announceToScreenReader(`${name} removed from cart`);
}

function updateQuantity(name, change) {
    const item = cart.find(item => item.name === name);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(name);
        } else {
            updateCart();
        }
    }
}

function updateCart() {
    // Clear cart display
    cartItemsContainer.innerHTML = '';
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart">
                <span class="empty-cart-icon">🛒</span>
                <p>Your cart is empty</p>
                <p class="empty-cart-subtitle">Add items to get started</p>
            </div>
        `;
        checkoutBtn.disabled = true;
    } else {
        // Display cart items
        cart.forEach(item => {
            const cartItemEl = document.createElement('div');
            cartItemEl.className = 'cart-item';
            cartItemEl.innerHTML = `
                <div class="cart-item-header">
                    <span class="cart-item-name">${item.name}</span>
                    <button class="remove-item-btn" aria-label="Remove ${item.name}" data-name="${item.name}">
                        ×
                    </button>
                </div>
                <div class="cart-item-controls">
                    <div class="quantity-controls">
                        <button class="quantity-btn" aria-label="Decrease quantity" data-name="${item.name}" data-change="-1">−</button>
                        <span class="quantity-display">${item.quantity}</span>
                        <button class="quantity-btn" aria-label="Increase quantity" data-name="${item.name}" data-change="1">+</button>
                    </div>
                    <span class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</span>
                </div>
            `;
            cartItemsContainer.appendChild(cartItemEl);
        });
        
        // Add event listeners to quantity buttons
        document.querySelectorAll('.quantity-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const name = this.dataset.name;
                const change = parseInt(this.dataset.change);
                updateQuantity(name, change);
            });
        });
        
        // Add event listeners to remove buttons
        document.querySelectorAll('.remove-item-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const name = this.dataset.name;
                removeFromCart(name);
            });
        });
        
        checkoutBtn.disabled = false;
    }
    
    // Calculate totals
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.085;
    const total = subtotal + tax;
    
    cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
    cartTax.textContent = `$${tax.toFixed(2)}`;
    cartTotal.textContent = `$${total.toFixed(2)}`;
}

// Checkout button
if (checkoutBtn) {
    checkoutBtn.addEventListener('click', function() {
        if (cart.length > 0) {
            const total = parseFloat(cartTotal.textContent.replace('$', ''));
            alert(`Thank you for your order!\n\nTotal: $${total.toFixed(2)}\n\nYour order will be ready for pickup at:\n123 Coffee Street, Downtown, MA 02139\n\nEstimated time: 15-20 minutes`);
            
            // Clear cart
            cart = [];
            updateCart();
            closeOrderModal();
        }
    });
}

// Console message
console.log('☕ Welcome to The Daily Grind! Your perfect cup awaits.');
console.log('♿ This site is built with WCAG 2.1 Level AA accessibility standards.');
console.log('🛒 Online ordering is now available!');

