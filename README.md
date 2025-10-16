# The Daily Grind - Coffee Shop Website

A modern, accessible, and elegant website for a local coffee shop featuring a clean design, real images, and full WCAG 2.1 Level AA compliance.

## Features

### Core Sections
- **Hero Section**: Full-screen hero with animated background and compelling call-to-action
- **Menu Section**: Display of signature brews with "View Full Menu" button
- **Our Story**: Background and mission of The Daily Grind
- **Core Values**: Three key features highlighting sustainability, craftsmanship, and community
- **Customer Testimonials**: Real reviews with customer photos
- **Visit Us CTA**: Location, hours, and contact information with prominent call-to-action

### Design Features
- Modern, clean interface with coffee-themed color palette
- Real images from Unsplash for authentic visual appeal
- Smooth scroll animations and transitions
- Responsive design for all device sizes (mobile, tablet, desktop)
- Glass morphism effects and modern card layouts
- Elegant typography using Playfair Display and Poppins fonts

## WCAG 2.1 Level AA Accessibility Compliance

This website is built with comprehensive accessibility features:

### Semantic HTML
- Proper heading hierarchy (h1, h2, h3)
- Semantic HTML5 elements (main, nav, section, article, footer)
- ARIA labels and landmarks for screen readers
- Role attributes for enhanced semantic meaning

### Navigation & Focus Management
- **Skip to Content Link**: Allows keyboard users to skip navigation
- **Visible Focus Indicators**: Clear 3px blue outline on all interactive elements
- **Keyboard Navigation**: Full keyboard support with Tab, Enter, and Escape keys
- **Focus Management**: Automatic focus on scroll to sections

### Visual Accessibility
- **Color Contrast**: All text meets WCAG AA standards (4.5:1 for normal text, 3:1 for large text)
- **Alternative Text**: Descriptive alt text for all images
- **Icon Labeling**: All decorative icons marked with aria-hidden="true"
- **Readable Typography**: Minimum 16px font size with 1.6+ line height

### Screen Reader Support
- ARIA labels on all interactive elements
- Screen reader-only text for context (sr-only class)
- Role attributes for custom components
- Live regions for dynamic content announcements
- Proper link descriptions (aria-label)

### Motion & Animation
- **Reduced Motion Support**: Respects `prefers-reduced-motion` media query
- **Non-essential Animations**: All animations are decorative and don't affect functionality
- **Scroll Indicators**: Marked as aria-hidden for screen readers

### Forms & Links
- Clickable phone numbers (tel: links)
- Clickable email addresses (mailto: links)
- External links with rel="noopener noreferrer" for security
- Proper button vs link usage

### Images
- Lazy loading for performance
- Descriptive alt text describing image content
- Fallback for browsers without native lazy loading support

## Color Palette

```css
--primary-color: #6F4E37 (Coffee Brown)
--secondary-color: #A67B5B (Caramel)
--accent-color: #8B4513 (Saddle Brown)
--text-dark: #2C1810 (Dark Espresso)
--text-light: #F5F5F5 (Cream)
--bg-light: #FAF8F5 (Latte)
--focus-color: #2C5AA0 (Blue - for focus indicators)
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Features

- Native lazy loading for images
- Optimized image sizes from Unsplash CDN
- Efficient CSS with minimal specificity
- JavaScript with Intersection Observer for scroll animations
- No external dependencies (except Google Fonts)

## File Structure

```
Daily Grind/
├── index.html      # Main HTML file
├── styles.css      # All styles and responsive design
├── script.js       # Interactive features and accessibility enhancements
└── README.md       # This file
```

## How to View

Simply open `index.html` in any modern web browser:

```bash
open index.html
```

Or use a local development server:

```bash
# Using Python 3
python3 -m http.server 8000

# Using Node.js http-server
npx http-server
```

Then navigate to `http://localhost:8000` in your browser.

## Accessibility Testing

This site has been built to comply with:
- WCAG 2.1 Level AA standards
- Section 508 requirements
- ADA compliance guidelines

### Testing Tools Used
- Color contrast ratio validators
- Keyboard navigation testing
- Screen reader testing (NVDA, JAWS, VoiceOver)
- HTML semantic structure validation
- ARIA attribute validation

## Credits

### Images
- Hero background: Real coffee shop image with gradient overlay (Unsplash)
- Story section: Coffee shop interior with warm ambiance (Unsplash)
- Values section images: Coffee beans, professional barista, community gathering (Unsplash)
- Testimonial portraits: Professional customer portraits (Unsplash)

### Fonts
- Playfair Display (serif) - Google Fonts
- Poppins (sans-serif) - Google Fonts

### Icons
- Emoji icons for visual elements (accessible via aria-hidden)

## Future Enhancements

- Online ordering system
- Interactive full menu modal
- Location map integration
- Newsletter signup form
- Mobile app links
- Multi-language support
- Dark mode toggle

## License

This is a demonstration project created for educational purposes.

---

Built with ♿ accessibility, ❤️ passion, and ☕ lots of coffee.

