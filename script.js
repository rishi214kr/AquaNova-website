// Global variables
let currentLanguage = 'en';
let currentTheme = 'light';

// Translation data
const translations = {
  en: {
    // Navigation
    'brand': 'AquaNova',
    'nav-home': 'Home',
    'nav-chatbot': 'Chatbot',
    
    // Hero section
    'hero-title': 'A single, intelligent platform for oceanographic, fisheries, and eDNA data',
    'hero-subtitle': 'Streamline your marine research with automated data processing, validation, and visualization tools',
    'cta-primary': 'Start Exploring',
    'cta-secondary': 'Learn More',
    
    // Features
    'features-title': 'Platform Features',
    'feature1-title': 'Auto Data Import & Format Checker',
    'feature1-desc': 'Files are automatically converted to Darwin Core/OBIS standards with comprehensive validation and error detection.',
    'feature2-title': 'Visual Dashboard',
    'feature2-desc': 'Interactive heatmaps, time-series graphs, and geographic visualizations for comprehensive data analysis.',
    'feature3-title': 'Fish Identification',
    'feature3-desc': 'Advanced otolith recognition combined with eDNA analysis for accurate species identification.',
    'feature4-title': 'Multi-lingual Support',
    'feature4-desc': 'Complete UI and chatbot support in English and Hindi, with seamless language switching.',
    'feature5-title': 'Developer Tools & Modular Design',
    'feature5-desc': 'Built-in API documentation and modular components for easy integration and customization.',
    'feature6-title': 'Data Validation & Error Fixing',
    'feature6-desc': 'Built-in rules automatically detect and correct common errors while maintaining data integrity.',
    
    // Footer
    'footer-about': 'About AquaNova',
    'footer-desc': 'Empowering marine researchers with intelligent data management and analysis tools.',
    'footer-links': 'Quick Links',
    'footer-docs': 'Documentation',
    'footer-api': 'API Reference',
    'footer-support': 'Support',
    'footer-contact': 'Contact',
    'footer-community': 'Join our marine data community',
    'footer-rights': 'All rights reserved.',
    
    // Chatbot
    'chat-title': 'Marine Data Assistant',
    'chat-status': 'Online • Ready to help',
    'welcome-message': 'Hello! I\'m your AquaNova marine data assistant. I can help you with questions about oceanographic data, fisheries, eDNA analysis, Darwin Core standards, and all platform features. How can I assist you today?',
    'chat-placeholder': 'Ask about marine data, oceanography, fisheries...',
    'suggestion1': 'What is Darwin Core?',
    'suggestion2': 'How does eDNA analysis work?',
    'suggestion3': 'Tell me about OBIS',
    'suggestion4': 'Platform features',
    
    // Help panel
    'help-title': 'Quick Help',
    'help-topics': 'I can help with:',
    'help-topic1': 'Oceanographic data management',
    'help-topic2': 'Fisheries information',
    'help-topic3': 'eDNA techniques',
    'help-topic4': 'Darwin Core standards',
    'help-topic5': 'OBIS submission',
    'help-topic6': 'Platform features',
    'help-examples': 'Example questions:',
    'help-button': '?'
  },
  hi: {
    // Navigation
    'brand': 'AquaNova',
    'nav-home': 'होम',
    'nav-chatbot': 'चैटबॉट',
    
    // Hero section
    'hero-title': 'समुद्री विज्ञान, मत्स्य पालन, और eDNA डेटा के लिए एक एकीकृत, बुद्धिमान प्लेटफॉर्म',
    'hero-subtitle': 'स्वचालित डेटा प्रसंस्करण, सत्यापन, और विज़ुअलाइज़ेशन उपकरणों के साथ अपने समुद्री अनुसंधान को सुव्यवस्थित करें',
    'cta-primary': 'खोजना शुरू करें',
    'cta-secondary': 'और जानें',
    
    // Features
    'features-title': 'प्लेटफॉर्म सुविधाएं',
    'feature1-title': 'ऑटो डेटा इंपोर्ट और फॉर्मेट चेकर',
    'feature1-desc': 'फाइलें व्यापक सत्यापन और त्रुटि पहचान के साथ स्वचालित रूप से डार्विन कोर/OBIS मानकों में परिवर्तित होती हैं।',
    'feature2-title': 'विज़ुअल डैशबोर्ड',
    'feature2-desc': 'व्यापक डेटा विश्लेषण के लिए इंटरैक्टिव हीटमैप, समय-श्रृंखला ग्राफ, और भौगोलिक विज़ुअलाइज़ेशन।',
    'feature3-title': 'मछली पहचान',
    'feature3-desc': 'सटीक प्रजाति पहचान के लिए eDNA विश्लेषण के साथ संयुक्त उन्नत ओटोलिथ पहचान।',
    'feature4-title': 'बहुभाषी समर्थन',
    'feature4-desc': 'निर्बाध भाषा स्विचिंग के साथ अंग्रेजी और हिंदी में पूर्ण UI और चैटबॉट समर्थन।',
    'feature5-title': 'डेवलपर टूल्स और मॉड्यूलर डिज़ाइन',
    'feature5-desc': 'आसान एकीकरण और अनुकूलन के लिए अंतर्निहित API दस्तावेज़ीकरण और मॉड्यूलर घटक।',
    'feature6-title': 'डेटा सत्यापन और त्रुटि सुधार',
    'feature6-desc': 'अंतर्निहित नियम डेटा अखंडता बनाए रखते हुए सामान्य त्रुटियों को स्वचालित रूप से पहचानते और सुधारते हैं।',
    
    // Footer
    'footer-about': 'AquaNova के बारे में',
    'footer-desc': 'बुद्धिमान डेटा प्रबंधन और विश्लेषण उपकरणों के साथ समुद्री शोधकर्ताओं को सशक्त बनाना।',
    'footer-links': 'त्वरित लिंक',
    'footer-docs': 'दस्तावेज़ीकरण',
    'footer-api': 'API संदर्भ',
    'footer-support': 'सहायता',
    'footer-contact': 'संपर्क',
    'footer-community': 'हमारे समुद्री डेटा समुदाय में शामिल हों',
    'footer-rights': 'सभी अधिकार सुरक्षित।',
    
    // Chatbot
    'chat-title': 'समुद्री डेटा सहायक',
    'chat-status': 'ऑनलाइन • मदद के लिए तैयार',
    'welcome-message': 'नमस्ते! मैं आपका AquaNova समुद्री डेटा सहायक हूं। मैं समुद्री डेटा, मत्स्य पालन, eDNA विश्लेषण, डार्विन कोर मानकों, और सभी प्लेटफॉर्म सुविधाओं के बारे में प्रश्नों में आपकी मदद कर सकता हूं। आज मैं आपकी कैसे सहायता कर सकता हूं?',
    'chat-placeholder': 'समुद्री डेटा, समुद्री विज्ञान, मत्स्य पालन के बारे में पूछें...',
    'suggestion1': 'डार्विन कोर क्या है?',
    'suggestion2': 'eDNA विश्लेषण कैसे काम करता है?',
    'suggestion3': 'OBIS के बारे में बताएं',
    'suggestion4': 'प्लेटफॉर्म सुविधाएं',
    
    // Help panel
    'help-title': 'त्वरित सहायता',
    'help-topics': 'मैं इनमें मदद कर सकता हूं:',
    'help-topic1': 'समुद्री डेटा प्रबंधन',
    'help-topic2': 'मत्स्य पालन जानकारी',
    'help-topic3': 'eDNA तकनीकें',
    'help-topic4': 'डार्विन कोर मानक',
    'help-topic5': 'OBIS सबमिशन',
    'help-topic6': 'प्लेटफॉर्म सुविधाएं',
    'help-examples': 'उदाहरण प्रश्न:',
    'help-button': '?'
  }
};

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
  initializeTheme();
  initializeLanguage();
  initializeNavigation();
  initializeAnimations();
  
  // Initialize chatbot if on chatbot page
  if (document.body.classList.contains('chatbot-page')) {
    initializeChatbot();
  }
});

// Theme Management
function initializeTheme() {
  const savedTheme = localStorage.getItem('aquanova-theme') || 'light';
  currentTheme = savedTheme;
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon();
  
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }
}

function toggleTheme() {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);
  localStorage.setItem('aquanova-theme', currentTheme);
  updateThemeIcon();
}

function updateThemeIcon() {
  const themeIcon = document.querySelector('.theme-icon');
  if (themeIcon) {
    themeIcon.textContent = currentTheme === 'light' ? '🌙' : '☀️';
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const ctxHeatmap = document.getElementById("heatmapChart");
  const ctxTime = document.getElementById("timeSeriesChart");

  // Placeholder data – replace fetchData() with real backend API
  const fetchData = async (filters) => {
    const res = await fetch("http://127.0.0.1:5000/dashboard-data");
    return res.json();
  };

  let heatmapChart, timeSeriesChart;

  const renderCharts = (data) => {
    // Destroy old charts if exist
    heatmapChart?.destroy();
    timeSeriesChart?.destroy();

    // Heatmap simulated using bubble chart
    heatmapChart = new Chart(ctxHeatmap, {
      type: "bubble",
      data: {
        datasets: data.heatmap.map((d) => ({
          label: d.species,
          data: [{ x: d.lon, y: d.lat, r: d.density }],
          backgroundColor: "rgba(0, 150, 255, 0.5)"
        }))
      },
      options: {
        plugins: { title: { display: true, text: "Species Distribution Heatmap" } },
        scales: { x: { title: { display: true, text: "Longitude" } },
                  y: { title: { display: true, text: "Latitude" } } }
      }
    });

    // Time series chart
    timeSeriesChart = new Chart(ctxTime, {
      type: "line",
      data: {
        labels: data.timeseries.map((d) => d.date),
        datasets: [{
          label: "Population Index",
          data: data.timeseries.map((d) => d.value),
          borderColor: "#0077b6",
          fill: false
        }]
      },
      options: {
        plugins: { title: { display: true, text: "Population Over Time" } },
        responsive: true
      }
    });
  };

  const updateDashboard = async () => {
    const filters = {
      region: document.getElementById("regionFilter").value,
      season: document.getElementById("seasonFilter").value,
      species: document.getElementById("speciesFilter").value
    };
    const data = await fetchData(filters);
    renderCharts(data);
  };

  // Filter listeners
  ["regionFilter", "seasonFilter", "speciesFilter"].forEach((id) =>
    document.getElementById(id).addEventListener("change", updateDashboard)
  );

  // Report Generator
  document.getElementById("downloadReport").addEventListener("click", () => {
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF();

    pdf.text("AquaNova Visual Dashboard Report", 10, 10);
    pdf.text("Filters: " + 
      ["regionFilter", "seasonFilter", "speciesFilter"]
        .map(id => `${id.replace('Filter','')}: ${document.getElementById(id).value}`).join(", "),
      10, 20
    );

    pdf.addPage();
    pdf.text("Charts can be embedded or attached separately.", 10, 10);
    pdf.save("AquaNova_Report.pdf");
  });

  updateDashboard();
});

document.addEventListener("DOMContentLoaded", function () {
  const commonOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  // --- Bar Chart ---
  const barCtx = document.getElementById('speciesBarChart').getContext('2d');
  new Chart(barCtx, {
    type: 'bar',
    data: {
      labels: ['Tuna', 'Salmon', 'Cod', 'Sardine', 'Mackerel'],
      datasets: [{
        label: 'Observed Count',
        data: [120, 90, 60, 30, 45],
        backgroundColor: 'rgba(30,144,255,0.7)',
        borderColor: 'rgba(30,144,255,1)',
        borderWidth: 1
      }]
    },
    options: {
      ...commonOptions,
      plugins: {
        title: { display: true, text: 'Species Observation Counts' },
        legend: { display: false }
      },
      scales: {
        y: { beginAtZero: true, ticks: { color: '#fff' }, grid: { color: 'rgba(255,255,255,0.2)' } },
        x: { ticks: { color: '#fff' }, grid: { color: 'rgba(255,255,255,0.2)' } }
      }
    }
  });

  // --- Pie Chart with all major oceans ---
  const pieCtx = document.getElementById('regionPieChart').getContext('2d');
  new Chart(pieCtx, {
    type: 'pie',
    data: {
      labels: [
        'Pacific Ocean',
        'Atlantic Ocean',
        'Indian Ocean',
        'Southern Ocean',
        'Arctic Ocean'
      ],
      datasets: [{
        data: [35, 25, 20, 12, 8], // example percentages
        backgroundColor: [
          'rgba(0, 191, 255, 0.7)',   // Pacific
          'rgba(255, 99, 132, 0.7)',  // Atlantic
          'rgba(255, 206, 86, 0.7)',  // Indian
          'rgba(75, 192, 192, 0.7)',  // Southern
          'rgba(153, 102, 255, 0.7)'  // Arctic
        ],
        borderColor: '#fff',
        borderWidth: 1
      }]
    },
    options: {
      ...commonOptions,
      plugins: {
        title: { display: true, text: 'Species Distribution by Major Oceans' },
        legend: { labels: { color: '#fff' } }
      }
    }
  });
});


// === Upload & Convert to Darwin Core/OBIS ===
document.addEventListener("DOMContentLoaded", () => {
  const uploadForm = document.getElementById("uploadForm");
  const dataFile = document.getElementById("dataFile");
  const resultBox = document.getElementById("result");

  uploadForm?.addEventListener("submit", async (e) => {
    e.preventDefault();
    resultBox.textContent = "Uploading and converting...";

    const file = dataFile.files[0];
    if (!file) {
      resultBox.textContent = "Please select a CSV or Excel file.";
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      // Adjust the URL to match your Flask endpoint
      const response = await fetch("http://127.0.0.1:5000/convert", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Server error");

      const data = await response.json();
      if (data.success) {
        resultBox.innerHTML = `
          ✅ Conversion complete! 
          <a href="${data.download_url}" target="_blank">Download Darwin Core/OBIS File</a>
        `;
      } else {
        resultBox.textContent = `❌ ${data.error || "Conversion failed."}`;
      }
    } catch (err) {
      console.error(err);
      resultBox.textContent = "❌ Failed to upload or convert the file.";
    }
  });
});


// Language Management
function initializeLanguage() {
  const savedLanguage = localStorage.getItem('aquanova-language') || 'en';
  currentLanguage = savedLanguage;
  
  const languageSelector = document.getElementById('languageSelector');
  if (languageSelector) {
    languageSelector.value = currentLanguage;
    languageSelector.addEventListener('change', changeLanguage);
  }
  
  updateLanguage();
}

function changeLanguage(event) {
  currentLanguage = event.target.value;
  localStorage.setItem('aquanova-language', currentLanguage);
  updateLanguage();
}

function updateLanguage() {
  const elements = document.querySelectorAll('[data-translate]');
  elements.forEach(element => {
    const key = element.getAttribute('data-translate');
    if (translations[currentLanguage] && translations[currentLanguage][key]) {
      element.textContent = translations[currentLanguage][key];
    }
  });
  
  // Update placeholders
  const placeholderElements = document.querySelectorAll('[data-translate-placeholder]');
  placeholderElements.forEach(element => {
    const key = element.getAttribute('data-translate-placeholder');
    if (translations[currentLanguage] && translations[currentLanguage][key]) {
      element.placeholder = translations[currentLanguage][key];
    }
  });
  
  // Update document language
  document.documentElement.lang = currentLanguage;
}

// Navigation
function initializeNavigation() {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Navbar background on scroll
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.style.background = currentTheme === 'light' 
          ? 'rgba(255, 255, 255, 0.98)' 
          : 'rgba(15, 23, 42, 0.98)';
      } else {
        navbar.style.background = currentTheme === 'light' 
          ? 'rgba(255, 255, 255, 0.95)' 
          : 'rgba(15, 23, 42, 0.95)';
      }
    }
  });
}

// Animations
function initializeAnimations() {
  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // Observe feature cards
  document.querySelectorAll('.feature-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });
}

// Chatbot Functionality
function initializeChatbot() {
  const chatInput = document.getElementById('chatInput');
  const sendButton = document.getElementById('sendButton');
  const chatMessages = document.getElementById('chatMessages');
  const helpToggle = document.getElementById('helpToggle');
  const helpPanel = document.getElementById('helpPanel');
  const helpClose = document.getElementById('helpClose');
  
  // Event listeners
  if (sendButton) {
    sendButton.addEventListener('click', sendMessage);
  }
  
  if (chatInput) {
    chatInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    });
    
    // Auto-resize input
    chatInput.addEventListener('input', function() {
      this.style.height = 'auto';
      this.style.height = Math.min(this.scrollHeight, 120) + 'px';
    });
  }
  
  // Suggestion chips
  document.querySelectorAll('.suggestion-chip').forEach(chip => {
    chip.addEventListener('click', function() {
      const message = this.textContent;
      if (chatInput) {
        chatInput.value = message;
        sendMessage();
      }
    });
  });
  
  // Help panel
  if (helpToggle) {
    helpToggle.addEventListener('click', function() {
      if (helpPanel) {
        helpPanel.classList.toggle('open');
      }
    });
  }
  
  if (helpClose) {
    helpClose.addEventListener('click', function() {
      if (helpPanel) {
        helpPanel.classList.remove('open');
      }
    });
  }
  
  // Close help panel when clicking outside
  document.addEventListener('click', function(e) {
    if (helpPanel && !helpPanel.contains(e.target) && !helpToggle.contains(e.target)) {
      helpPanel.classList.remove('open');
    }
  });
}

async function sendMessage() {
  const chatInput = document.getElementById('chatInput');
  const chatMessages = document.getElementById('chatMessages');
  const sendButton = document.getElementById('sendButton');
  
  if (!chatInput || !chatMessages || !sendButton) return;
  
  const message = chatInput.value.trim();
  if (!message) return;
  
  // Disable input and button
  chatInput.disabled = true;
  sendButton.disabled = true;
  
  // Add user message
  addMessage(message, 'user');
  
  // Clear input
  chatInput.value = '';
  chatInput.style.height = 'auto';
  
  // Show typing indicator
  showTypingIndicator();
  
  try {
    // Send message to backend
    const response = await fetch('http://localhost:5000/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: message,
        lang: currentLanguage
      })
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Hide typing indicator
    hideTypingIndicator();
    
    // Add bot response
    addMessage(data.reply, 'bot');
    
  } catch (error) {
    console.error('Error sending message:', error);
    
    // Hide typing indicator
    hideTypingIndicator();
    
    // Add error message
    const errorMessage = currentLanguage === 'hi' 
      ? 'क्षमा करें, मुझे सर्वर से जुड़ने में समस्या हो रही है। कृपया बाद में पुनः प्रयास करें।'
      : 'Sorry, I\'m having trouble connecting to the server. Please try again later.';
    
    addMessage(errorMessage, 'bot');
  } finally {
    // Re-enable input and button
    chatInput.disabled = false;
    sendButton.disabled = false;
    chatInput.focus();
  }
}

function addMessage(content, sender) {
  const chatMessages = document.getElementById('chatMessages');
  if (!chatMessages) return;
  
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${sender}-message`;
  
  const avatar = document.createElement('div');
  avatar.className = 'message-avatar';
  avatar.textContent = sender === 'bot' ? '🤖' : '👤';
  
  const messageContent = document.createElement('div');
  messageContent.className = 'message-content';
  
  const messageParagraph = document.createElement('p');
  messageParagraph.textContent = content;
  
  messageContent.appendChild(messageParagraph);
  messageDiv.appendChild(avatar);
  messageDiv.appendChild(messageContent);
  
  chatMessages.appendChild(messageDiv);
  
  // Scroll to bottom
  chatMessages.scrollTop = chatMessages.scrollHeight;
  
  // Add animation
  messageDiv.style.opacity = '0';
  messageDiv.style.transform = 'translateY(20px)';
  
  requestAnimationFrame(() => {
    messageDiv.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    messageDiv.style.opacity = '1';
    messageDiv.style.transform = 'translateY(0)';
  });
}

function showTypingIndicator() {
  const typingIndicator = document.getElementById('typingIndicator');
  if (typingIndicator) {
    typingIndicator.style.display = 'block';
    
    // Scroll to bottom
    const chatMessages = document.getElementById('chatMessages');
    if (chatMessages) {
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
  }
}

function hideTypingIndicator() {
  const typingIndicator = document.getElementById('typingIndicator');
  if (typingIndicator) {
    typingIndicator.style.display = 'none';
  }
}

// Utility Functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Performance optimization
const debouncedScroll = debounce(function() {
  // Handle scroll events here if needed
}, 100);

window.addEventListener('scroll', debouncedScroll);

// Error handling
window.addEventListener('error', function(e) {
  console.error('JavaScript error:', e.error);
});

// Service worker registration (for future PWA features)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    // Service worker registration can be added here in the future
  });
}

// Export functions for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    toggleTheme,
    changeLanguage,
    updateLanguage,
    sendMessage,
    addMessage
  };
}