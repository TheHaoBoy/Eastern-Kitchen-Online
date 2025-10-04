# Eastern Kitchen - Chinese Takeaway Website

A beautiful, responsive website for Eastern Kitchen Chinese takeaway restaurant featuring an interactive menu, special offers, and engaging visual effects.

## 🏮 Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Interactive Menu** - Dynamic menu loading from JSON with category filtering
- **Special Effects**:
  - Wednesday celebration fireworks
  - Click-to-spawn interactive lanterns
  - Spawns lanterns on click
- **Business Information** - Complete contact details and opening hours
- **Allergy Awareness** - Prominent allergy information display
- **Special Offers** - Wednesday-only promotions section

## 🚀 Quick Start

### Prerequisites
- A modern web browser
- Python 3.x (for local development server)

### Installation & Running

1. **Download all project files** into a single folder:
   - `index.html`
   - `style.css` 
   - `script.js`
   - `menu.json`
   - `img/header_img.jpg`

2. **Run a local server**:
   ```bash
   python -m http.server 8000
   ```

3. **Open your browser** and navigate to:
   ```
   http://localhost:8000
   ```

### File Structure
```
eastern-kitchen/
├── index.html          # Main website structure
├── style.css           # All styling and animations
├── script.js           # Interactive functionality
├── menu.json           # Menu data (can be updated easily)
├── README.md           # This file
└── img/                # Containing all images
    └── header_img.jpg  # Image for the website header
```

## 📋 File Descriptions

### `index.html`
- Main website structure
- Semantic HTML5 elements
- Responsive meta tags
- Font Awesome icons integration

### `style.css`
- Complete styling with CSS variables
- Responsive design with media queries
- On click animations

### `script.js`
- Menu loading and filtering system
- Interactive features (fireworks, lanterns)
- Wednesday detection for special effects
- Event handlers and animations

### `menu.json`
- Structured menu data in JSON format
- Easy to update prices and items
- Categories and allergen information

## 🎯 Key Functionality

### Menu System
- **Dynamic Loading**: Menu items loaded from `menu.json`
- **Category Filtering**: Click category buttons to filter items
- **Allergen Tags**: Clear display of common allergens
- **Spicy Indicators**: Visual markers for spicy dishes

### Interactive Elements
- **Click Lanterns**: Click anywhere to spawn floating lanterns
- **Wednesday Fireworks**: Automatic celebration on Wednesdays
- **Smooth Scrolling**: Animated navigation between sections

### Business Information
- **Contact Details**: Address and phone number with click-to-call
- **Opening Hours**: Clear schedule display
- **Payment Info**: Cash-only and pickup-only notices
- **Allergy Notice**: Prominent safety information

## 🛠️ Customization

### Updating Menu Items
Edit `menu.json` to add, remove, or modify menu items:
```json
{
  "category": "starters",
  "name": "Your Dish Name",
  "price": "£X.XX",
  "description": "Dish description",
  "allergens": ["eggs", "nuts"],
  "spicy": true
}
```

### Changing Colors
Modify CSS variables in `style.css`:
```css
:root {
  --primary: #c62828;    /* Main red color */
  --secondary: #ffd54f;  /* Gold accent */
  --dark: #212121;       /* Text color */
  --light: #f5f5f5;      /* Background */
}
```

### Special Offers
Update the offers section in `index.html` to change promotions.

## 🌐 Deployment

### Simple Deployment (Netlify)
1. Drag and drop your project folder to [Netlify Drop](https://app.netlify.com/drop)
2. Your site will be live instantly with a free `.netlify.app` domain

### Traditional Web Hosting
1. Upload all files to your web host via FTP/SFTP
2. Ensure files maintain the same folder structure
3. Update contact information in `index.html`

## 📱 Browser Compatibility

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

## 🎨 Design Features

- **Chinese Aesthetic**: Traditional red and gold color scheme
- **Modern UI**: Clean, accessible design
- **Performance Optimized**: Fast loading and smooth animations
- **SEO Friendly**: Semantic HTML structure

## 🔧 Troubleshooting

### Common Issues

**Menu not loading?**
- Check that `menu.json` is in the same folder
- Verify JSON syntax is valid
- Check browser console for errors (F12)

**Animations not working?**
- Ensure JavaScript is enabled
- Check for console errors
- Try refreshing with Ctrl+F5

**Mobile display issues?**
- Test responsive design using browser dev tools
- Check viewport meta tag in HTML

## 📄 License

This project is for business use by Eastern Kitchen (Haolin LTD) All rights reserved.

## 🆘 Support

For technical issues with the website functionality, ensure all files are properly uploaded and the local server is running correctly.

---

*Last Updated: 2025*  
*© 2025 Eastern Kitchen. All rights reserved.*
