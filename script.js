// Menu loader functionality
async function loadMenu() {
    try {
        console.log('Loading menu...');
        const response = await fetch('menu.json');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const menuData = await response.json();
        console.log('Menu data loaded from file');
        displayMenuItems(menuData);
        
    } catch (error) {
        console.error('Error loading menu from file, using fallback:', error);
        console.log('Using fallback menu data');
        displayMenuItems(fallbackMenuData);
    }
    
    setupCategoryFilters();
}

function displayMenuItems(menuData) {
    const container = document.getElementById('menuItemsContainer');
    
    if (!menuData || menuData.length === 0) {
        container.innerHTML = '<p>No menu items available at the moment.</p>';
        return;
    }
    
    console.log('Displaying menu items:', menuData.length);
    
    const menuHTML = menuData.map(item => {
        // Ensure all required fields exist
        const category = item.category || 'unknown';
        const name = item.name || 'Unnamed Item';
        const price = item.price || 'Price unavailable';
        const description = item.description || '';
        const allergens = item.allergens || [];
        const spicy = item.spicy || false;
        const popular = item.popular || false;
        
        return `
        <div class="menu-item" data-category="${category}">
            <div class="item-details">
                <div class="item-name">
                    <h3>${name}</h3>
                    <span class="price">${price}</span>
                </div>
                ${description ? `<p class="item-description">${description}</p>` : ''}
                <div class="item-tags">
                    ${spicy ? '<span class="spicy-tag">🌶️ Spicy</span>' : ''}
                    ${popular ? '<span class="popular-tag">★ Popular</span>' : ''}
                    ${allergens.map(allergen => `<span class="allergen-tag">${allergen}</span>`).join('')}
                </div>
            </div>
        </div>
        `;
    }).join('');
    
    container.innerHTML = menuHTML;
    console.log('Menu HTML generated successfully');
}

function setupCategoryFilters() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    console.log('Setting up category filters:', categoryButtons.length);
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const category = this.getAttribute('data-category');
            const menuItems = document.querySelectorAll('.menu-item');
            
            console.log('Filtering by category:', category);
            
            menuItems.forEach(item => {
                if (category === 'all' || item.getAttribute('data-category') === category) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// Fireworks functions
function isWednesday() {
    const today = new Date();
    return today.getDay() === 3; // 0 = Sunday, 1 = Monday, ..., 3 = Wednesday
}

function createFirework(x, y) {
    const container = document.getElementById('fireworks-container');
    const firework = document.createElement('div');
    firework.className = 'firework';
    firework.style.left = x + 'px';
    firework.style.top = y + 'px';
    firework.style.backgroundColor = getRandomColor();
    
    container.appendChild(firework);
    
    // Explode into particles
    setTimeout(() => {
        explodeFirework(firework);
    }, 500);
}

function explodeFirework(firework) {
    const x = parseInt(firework.style.left);
    const y = parseInt(firework.style.top);
    const color = firework.style.backgroundColor;
    
    // Remove the original firework
    firework.remove();
    
    // Create particles
    const particleCount = 30;
    for (let i = 0; i < particleCount; i++) {
        createParticle(x, y, color);
    }
}

function createParticle(x, y, color) {
    const container = document.getElementById('fireworks-container');
    const particle = document.createElement('div');
    particle.className = 'firework-particle';
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    particle.style.backgroundColor = color;
    
    container.appendChild(particle);
    
    // Random direction and distance
    const angle = Math.random() * Math.PI * 2;
    const distance = 50 + Math.random() * 100;
    const duration = 1000 + Math.random() * 1000;
    
    // Animate particle
    particle.animate([
        {
            transform: 'translate(0, 0) scale(1)',
            opacity: 1
        },
        {
            transform: `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) scale(0)`,
            opacity: 0
        }
    ], {
        duration: duration,
        easing: 'cubic-bezier(0.1, 0.8, 0.2, 1)'
    });
    
    // Remove particle after animation
    setTimeout(() => {
        particle.remove();
    }, duration);
}

function getRandomColor() {
    const colors = [
        '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF',
        '#FFA500', '#FF69B4', '#9370DB', '#32CD32', '#FFD700', '#FF6347'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}

function startFireworks() {
    // Create Wednesday banner
    const banner = document.createElement('div');
    banner.className = 'wednesday-banner';
    banner.textContent = '🎉 Wednesday Special Offers Active! 🎉';
    document.body.appendChild(banner);
    
    // Create initial fireworks
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            createFirework(
                Math.random() * window.innerWidth,
                Math.random() * window.innerHeight
            );
        }, i * 300);
    }
    
    // Continue creating fireworks periodically
    const fireworksInterval = setInterval(() => {
        createFirework(
            Math.random() * window.innerWidth,
            Math.random() * window.innerHeight
        );
    }, 1000);
    
    // Stop fireworks after 30 seconds
    setTimeout(() => {
        clearInterval(fireworksInterval);
        banner.remove();
    }, 30000);
}

// Interactive Click-to-Spawn Lanterns
function setupInteractiveLanterns() {
    const container = document.getElementById('interactive-lanterns');
    if (!container) return;
    
    // Click event listener for the entire document
    document.addEventListener('click', function(event) {
        createLanternAtPosition(event.clientX, event.clientY);
    });
    
    console.log('Interactive lanterns ready - click anywhere to spawn lanterns!');
}

function createLanternAtPosition(x, y) {
    const container = document.getElementById('interactive-lanterns');
    const lantern = document.createElement('div');
    lantern.className = 'interactive-lantern';
    
    // Random lantern color variations
    const colors = [
        'linear-gradient(45deg, #c62828, #e53935)', // Red
        'linear-gradient(45deg, #f57c00, #ff9800)', // Orange
        'linear-gradient(45deg, #f44336, #e57373)', // Light Red
        'linear-gradient(45deg, #d32f2f, #f44336)'  // Dark Red
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    // Random size variation
    const size = 0.7 + Math.random() * 0.6; // 0.7 to 1.3
    
    // Create lantern structure
    const lanternHTML = `
        <div class="lantern-body" style="background: ${randomColor}; transform: scale(${size})"></div>
        <div class="lantern-top"></div>
        <div class="lantern-bottom"></div>
        <div class="lantern-tassel"></div>
        <div class="lantern-glow"></div>
    `;
    
    lantern.innerHTML = lanternHTML;
    
    // Position at click location
    lantern.style.left = (x - 20) + 'px';
    lantern.style.top = (y - 30) + 'px';
    
    // Random horizontal drift
    const drift = -30 + Math.random() * 60; // -30px to +30px
    lantern.style.setProperty('--drift', drift + 'px');
    
    // Random animation duration
    const duration = 6 + Math.random() * 4; // 6-10 seconds
    lantern.style.animationDuration = duration + 's';
    
    // Add custom animation for horizontal drift
    lantern.style.animation = `floatUpAndFade ${duration}s ease-out forwards, driftHorizontal ${duration}s ease-in-out forwards`;
    
    // Add to container
    container.appendChild(lantern);
    
    // Remove element after animation completes
    setTimeout(() => {
        if (lantern.parentNode) {
            lantern.parentNode.removeChild(lantern);
        }
    }, duration * 1000);
    
    // Add CSS for horizontal drift
    if (!document.getElementById('lantern-drift-style')) {
        const style = document.createElement('style');
        style.id = 'lantern-drift-style';
        style.textContent = `
            @keyframes driftHorizontal {
                0% { transform: translateX(0) translateY(0) scale(0.8); }
                100% { transform: translateX(var(--drift, 0px)) translateY(-100vh) scale(1.2); }
            }
        `;
        document.head.appendChild(style);
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initialising menu...');

    loadMenu();
    setupInteractiveLanterns();
    
    // Check if it's Wednesday and start fireworks
    if (isWednesday()) {
        // Wait a moment for the page to load, then start fireworks
        setTimeout(startFireworks, 1000);
    }
});