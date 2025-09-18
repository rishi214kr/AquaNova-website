# AquaNova 🌊
*An integrated marine-data platform for oceanographic, fisheries, and eDNA data*

## Overview
AquaNova is a full-stack web application that provides a single, intelligent platform for managing marine data with multi-language support and an AI-powered chatbot.

## Features
- 🌊 Beautiful marine-themed responsive design
- 🤖 Intelligent multilingual chatbot (English/Hindi)
- 🎨 Light/Dark theme toggle with persistence
- 📱 Mobile-responsive design
- 🔄 Real-time chat interface
- 🐟 Marine data management tools

## Quick Start

### Prerequisites
- Python 3.7+
- Modern web browser

### Installation & Setup

1. **Install Python dependencies:**
```bash
pip install -r requirements.txt
```

2. **Start the backend server:**
```bash
python app.py
```
The Flask server will start on `http://localhost:5000`

3. **Open the frontend:**
Open `index.html` in your web browser or use a local server:
```bash
# Option 1: Direct file access
open index.html

# Option 2: Using Python's built-in server (recommended)
python -m http.server 8000
# Then visit http://localhost:8000
```

## Usage

### Main Features
1. **Home Page**: Overview of AquaNova's capabilities
2. **Chatbot**: Interactive AI assistant for marine data queries
3. **Theme Toggle**: Switch between light and dark modes
4. **Language Support**: Full English/Hindi interface

### Chatbot Capabilities
The chatbot can help with:
- Oceanographic data management
- Fisheries information
- eDNA techniques
- Darwin Core/OBIS standards
- Platform features and usage

### API Endpoints
- `POST /chat`: Send messages to the chatbot
  ```json
  {
    "message": "your question",
    "lang": "en" // or "hi"
  }
  ```

## Customization

### Adding New Languages
1. Update `translations` object in `script.js`
2. Add language option to the selector in HTML
3. Update backend `chatbot_responses` in `app.py`

### Adding New Chatbot Intents
1. Edit `chatbot_responses` dictionary in `app.py`
2. Add new keywords and responses for both languages
3. Test with various phrasings

### Modifying Themes
1. Update CSS custom properties in `styles.css`
2. Modify `toggleTheme()` function in `script.js`

## Project Structure
```
aquanova/
├── index.html          # Main landing page
├── chatbot.html        # Chatbot interface
├── styles.css          # All styling and themes
├── script.js           # Frontend JavaScript
├── app.py              # Flask backend
├── requirements.txt    # Python dependencies
└── README.md          # This file
```

## Technical Details
- **Frontend**: Vanilla HTML5, CSS3, JavaScript ES6+
- **Backend**: Python Flask with CORS support
- **Styling**: CSS Grid, Flexbox, Custom Properties
- **Responsive**: Mobile-first design approach
- **Accessibility**: ARIA labels, semantic HTML

## Browser Support
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Contributing
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License
MIT License - feel free to use and modify as needed.

---
*Built with 💙 for marine data enthusiasts*