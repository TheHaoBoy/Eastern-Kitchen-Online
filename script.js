// Menu loader functionality
async function loadMenu() {
    try {
        console.log('Loading menu...');
        const response = await fetch('menu.json');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const menuData = await response.json();
        console.log('Menu data loaded:', menuData);
        
        if (!Array.isArray(menuData)) {
            throw new Error('Menu data is not an array');
        }
        
        displayMenuItems(menuData);
        setupCategoryFilters();
        
    } catch (error) {
        console.error('Error loading menu:', error);
        document.getElementById('menuItemsContainer').innerHTML = 
            '<div class="error-message"><p>Sorry, our menu is currently unavailable. Please call us at 01792 974 193 for today\'s offerings.</p><p>Error: ' + error.message + '</p></div>';
    }
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

// Load menu when page is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing menu...');
    loadMenu();
});

// Fallback menu data if JSON file fails
const fallbackMenuData = [
    {
      "category": "starters",
      "name": "Chicken & Sweetcorn Soup",
      "price": "£3.00",
      "description": "Contains Eggs",
      "allergens": ["eggs"]
    },
    {
      "category": "starters", 
      "name": "Spring Roll (1)",
      "price": "£3.20",
      "description": ""
    },
    {
      "category": "spare-ribs",
      "name": "Salt & Pepper Spare Ribs",
      "price": "£6.70",
      "description": "Contains starch",
      "allergens": ["starch"]
    }
  ];
  
  // Modify the loadMenu function to use fallback
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