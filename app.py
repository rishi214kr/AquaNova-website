from flask import Flask, request, jsonify
from flask_cors import CORS
import re
import random

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Chatbot responses database
chatbot_responses = {
    'en': {
        'greeting': [
            "Hello! I'm AquaNova's marine data assistant. How can I help you today?",
            "Welcome to AquaNova! I'm here to help with your marine data questions.",
            "Hi there! Ready to dive into marine data management?"
        ],
        'oceanographic': [
            "Oceanographic data in AquaNova includes temperature, salinity, pH, dissolved oxygen, and current measurements. Our platform automatically validates and formats this data according to international standards.",
            "We support various oceanographic data formats including CTD profiles, ARGO float data, and satellite observations. All data is converted to Darwin Core standards for interoperability.",
            "AquaNova's oceanographic module provides real-time data visualization, trend analysis, and automated quality control for marine environmental data."
        ],
        'fisheries': [
            "Our fisheries module tracks catch data, species abundance, fishing effort, and stock assessments. Data is automatically validated against FishBase and other authoritative sources.",
            "AquaNova supports fisheries data from commercial catches, research surveys, and citizen science projects. We provide tools for stock assessment and sustainable fishing analysis.",
            "The platform includes fish identification tools using otolith analysis and morphometric measurements, integrated with global fisheries databases."
        ],
        'edna': [
            "Environmental DNA (eDNA) analysis in AquaNova processes metabarcoding data to identify marine species from water samples. We support standard primers and reference databases.",
            "Our eDNA pipeline includes quality filtering, taxonomic assignment, and biodiversity analysis. Results are automatically formatted for OBIS submission.",
            "AquaNova's eDNA tools help detect rare species, monitor biodiversity, and track invasive species using cutting-edge molecular techniques."
        ],
        'darwin_core': [
            "Darwin Core is the standard for biodiversity data sharing. AquaNova automatically maps your data to Darwin Core terms for seamless integration with global databases.",
            "We support all major Darwin Core classes including Occurrence, Event, and Taxon. Our validation engine ensures data quality and completeness.",
            "The platform provides Darwin Core Archive (DwC-A) export functionality for direct submission to GBIF and OBIS."
        ],
        'obis': [
            "OBIS (Ocean Biodiversity Information System) is the global database for marine biodiversity data. AquaNova formats your data for direct OBIS submission.",
            "Our OBIS integration includes automated data validation, geographic coordinate checking, and taxonomic verification against WoRMS.",
            "AquaNova ensures your marine biodiversity data meets OBIS quality standards and contributes to global ocean science."
        ],
        'features': [
            "AquaNova offers six core features: Auto Data Import & Format Checker, Visual Dashboard, Fish Identification, Multi-lingual Support, Developer Tools, and Data Validation & Error Fixing.",
            "Our platform combines data management, visualization, and analysis tools in one integrated environment for marine researchers and data managers.",
            "Key features include automated data processing, interactive visualizations, AI-powered species identification, and comprehensive API documentation."
        ],
        'data_import': [
            "Our Auto Data Import system accepts CSV, Excel, NetCDF, and other common formats. Files are automatically converted to Darwin Core standards with comprehensive validation.",
            "The Format Checker identifies data issues, suggests corrections, and ensures compliance with international marine data standards.",
            "Batch processing capabilities allow you to import large datasets efficiently with automated quality control and error reporting."
        ],
        'dashboard': [
            "The Visual Dashboard provides interactive heatmaps, time series plots, and geographic visualizations of your marine data.",
            "Create custom charts, export high-quality figures, and share interactive visualizations with colleagues and stakeholders.",
            "Real-time data monitoring capabilities keep you updated on the latest observations and trends in your datasets."
        ],
        'api': [
            "AquaNova provides comprehensive REST APIs for data access, submission, and analysis. Full documentation is available in the developer section.",
            "Our modular design allows easy integration with existing workflows and third-party applications.",
            "API endpoints support authentication, rate limiting, and various data formats for maximum flexibility."
        ],
        'multilingual': [
            "AquaNova supports multiple languages including English and Hindi, with plans for additional languages based on user needs.",
            "The entire interface, including this chatbot, adapts to your language preference for a seamless user experience.",
            "Scientific terms and taxonomic names maintain international standards while interface elements are fully localized."
        ],
        'validation': [
            "Our Data Validation system uses built-in rules to automatically detect and correct common errors in marine datasets.",
            "Validation includes geographic coordinate checking, date format standardization, taxonomic verification, and unit conversion.",
            "The Error Fixing module provides suggestions and automated corrections while maintaining data integrity and traceability."
        ],
        'help': [
            "I can help you with questions about oceanographic data, fisheries, eDNA analysis, Darwin Core standards, OBIS submission, and all AquaNova features.",
            "Try asking about specific topics like 'How does eDNA analysis work?' or 'What is Darwin Core?' for detailed information.",
            "For technical support, you can also ask about data import, API usage, or platform features."
        ],
        'default': [
            "I'm not sure about that specific topic, but I can help you with marine data management, oceanographic analysis, fisheries data, eDNA techniques, and AquaNova platform features.",
            "Could you rephrase your question? I specialize in marine data topics including oceanography, fisheries, eDNA, Darwin Core, and OBIS standards.",
            "I'm here to help with AquaNova-related questions. Try asking about our features, data management capabilities, or marine science topics."
        ]
    },
    'hi': {
        'greeting': [
            "नमस्ते! मैं AquaNova का समुद्री डेटा सहायक हूं। आज मैं आपकी कैसे मदद कर सकता हूं?",
            "AquaNova में आपका स्वागत है! मैं आपके समुद्री डेटा प्रश्नों में मदद के लिए यहां हूं।",
            "नमस्कार! समुद्री डेटा प्रबंधन में गोता लगाने के लिए तैयार हैं?"
        ],
        'oceanographic': [
            "AquaNova में समुद्री डेटा में तापमान, लवणता, pH, घुलित ऑक्सीजन, और धारा माप शामिल हैं। हमारा प्लेटफॉर्म अंतर्राष्ट्रीय मानकों के अनुसार इस डेटा को स्वचालित रूप से मान्य और प्रारूपित करता है।",
            "हम CTD प्रोफाइल, ARGO फ्लोट डेटा, और उपग्रह अवलोकन सहित विभिन्न समुद्री डेटा प्रारूपों का समर्थन करते हैं। सभी डेटा को अंतरसंचालनीयता के लिए डार्विन कोर मानकों में परिवर्तित किया जाता है।",
            "AquaNova का समुद्री मॉड्यूल समुद्री पर्यावरणीय डेटा के लिए रीयल-टाइम डेटा विज़ुअलाइज़ेशन, ट्रेंड विश्लेषण, और स्वचालित गुणवत्ता नियंत्रण प्रदान करता है।"
        ],
        'fisheries': [
            "हमारा मत्स्य मॉड्यूल पकड़ डेटा, प्रजाति प्रचुरता, मछली पकड़ने के प्रयास, और स्टॉक आकलन को ट्रैक करता है। डेटा को FishBase और अन्य आधिकारिक स्रोतों के विरुद्ध स्वचालित रूप से मान्य किया जाता है।",
            "AquaNova वाणिज्यिक पकड़, अनुसंधान सर्वेक्षण, और नागरिक विज्ञान परियोजनाओं से मत्स्य डेटा का समर्थन करता है। हम स्टॉक आकलन और टिकाऊ मछली पकड़ने के विश्लेषण के लिए उपकरण प्रदान करते हैं।",
            "प्लेटफॉर्म में ओटोलिथ विश्लेषण और मॉर्फोमेट्रिक माप का उपयोग करके मछली पहचान उपकरण शामिल हैं, जो वैश्विक मत्स्य डेटाबेस के साथ एकीकृत हैं।"
        ],
        'edna': [
            "AquaNova में पर्यावरणीय DNA (eDNA) विश्लेषण पानी के नमूनों से समुद्री प्रजातियों की पहचान के लिए मेटाबारकोडिंग डेटा को प्रोसेस करता है। हम मानक प्राइमर और संदर्भ डेटाबेस का समर्थन करते हैं।",
            "हमारी eDNA पाइपलाइन में गुणवत्ता फ़िल्टरिंग, वर्गीकरण असाइनमेंट, और जैव विविधता विश्लेषण शामिल है। परिणाम OBIS सबमिशन के लिए स्वचालित रूप से प्रारूपित होते हैं।",
            "AquaNova के eDNA उपकरण दुर्लभ प्रजातियों का पता लगाने, जैव विविधता की निगरानी, और अत्याधुनिक आणविक तकनीकों का उपयोग करके आक्रामक प्रजातियों को ट्रैक करने में मदद करते हैं।"
        ],
        'darwin_core': [
            "डार्विन कोर जैव विविधता डेटा साझाकरण का मानक है। AquaNova वैश्विक डेटाबेस के साथ निर्बाध एकीकरण के लिए आपके डेटा को डार्विन कोर शर्तों में स्वचालित रूप से मैप करता है।",
            "हम Occurrence, Event, और Taxon सहित सभी प्रमुख डार्विन कोर वर्गों का समर्थन करते हैं। हमारा सत्यापन इंजन डेटा गुणवत्ता और पूर्णता सुनिश्चित करता है।",
            "प्लेटफॉर्म GBIF और OBIS में प्रत्यक्ष सबमिशन के लिए डार्विन कोर आर्काइव (DwC-A) निर्यात कार्यक्षमता प्रदान करता है।"
        ],
        'obis': [
            "OBIS (Ocean Biodiversity Information System) समुद्री जैव विविधता डेटा के लिए वैश्विक डेटाबेस है। AquaNova प्रत्यक्ष OBIS सबमिशन के लिए आपके डेटा को प्रारूपित करता है।",
            "हमारे OBIS एकीकरण में स्वचालित डेटा सत्यापन, भौगोलिक निर्देशांक जांच, और WoRMS के विरुद्ध वर्गीकरण सत्यापन शामिल है।",
            "AquaNova सुनिश्चित करता है कि आपका समुद्री जैव विविधता डेटा OBIS गुणवत्ता मानकों को पूरा करता है और वैश्विक समुद्री विज्ञान में योगदान देता है।"
        ],
        'features': [
            "AquaNova छह मुख्य सुविधाएं प्रदान करता है: ऑटो डेटा इंपोर्ट और फॉर्मेट चेकर, विज़ुअल डैशबोर्ड, मछली पहचान, बहुभाषी समर्थन, डेवलपर टूल्स, और डेटा सत्यापन और त्रुटि सुधार।",
            "हमारा प्लेटफॉर्म समुद्री शोधकर्ताओं और डेटा प्रबंधकों के लिए एक एकीकृत वातावरण में डेटा प्रबंधन, विज़ुअलाइज़ेशन, और विश्लेषण उपकरणों को जोड़ता है।",
            "मुख्य सुविधाओं में स्वचालित डेटा प्रसंस्करण, इंटरैक्टिव विज़ुअलाइज़ेशन, AI-संचालित प्रजाति पहचान, और व्यापक API दस्तावेज़ीकरण शामिल हैं।"
        ],
        'data_import': [
            "हमारा ऑटो डेटा इंपोर्ट सिस्टम CSV, Excel, NetCDF, और अन्य सामान्य प्रारूपों को स्वीकार करता है। फाइलें व्यापक सत्यापन के साथ स्वचालित रूप से डार्विन कोर मानकों में परिवर्तित होती हैं।",
            "फॉर्मेट चेकर डेटा समस्याओं की पहचान करता है, सुधार सुझाता है, और अंतर्राष्ट्रीय समुद्री डेटा मानकों के अनुपालन को सुनिश्चित करता है।",
            "बैच प्रसंस्करण क्षमताएं आपको स्वचालित गुणवत्ता नियंत्रण और त्रुटि रिपोर्टिंग के साथ बड़े डेटासेट को कुशलता से आयात करने की अनुमति देती हैं।"
        ],
        'dashboard': [
            "विज़ुअल डैशबोर्ड आपके समुद्री डेटा के इंटरैक्टिव हीटमैप, समय श्रृंखला प्लॉट, और भौगोलिक विज़ुअलाइज़ेशन प्रदान करता है।",
            "कस्टम चार्ट बनाएं, उच्च गुणवत्ता वाले आंकड़े निर्यात करें, और सहयोगियों और हितधारकों के साथ इंटरैक्टिव विज़ुअलाइज़ेशन साझा करें।",
            "रीयल-टाइम डेटा निगरानी क्षमताएं आपको अपने डेटासेट में नवीनतम अवलोकन और रुझानों पर अपडेट रखती हैं।"
        ],
        'api': [
            "AquaNova डेटा एक्सेस, सबमिशन, और विश्लेषण के लिए व्यापक REST API प्रदान करता है। डेवलपर सेक्शन में पूर्ण दस्तावेज़ीकरण उपलब्ध है।",
            "हमारा मॉड्यूलर डिज़ाइन मौजूदा वर्कफ़्लो और तृतीय-पक्ष एप्लिकेशन के साथ आसान एकीकरण की अनुमति देता है।",
            "API एंडपॉइंट अधिकतम लचीलेपन के लिए प्रमाणीकरण, दर सीमा, और विभिन्न डेटा प्रारूपों का समर्थन करते हैं।"
        ],
        'multilingual': [
            "AquaNova अंग्रेजी और हिंदी सहित कई भाषाओं का समर्थन करता है, उपयोगकर्ता की जरूरतों के आधार पर अतिरिक्त भाषाओं की योजना के साथ।",
            "इस चैटबॉट सहित पूरा इंटरफेस, निर्बाध उपयोगकर्ता अनुभव के लिए आपकी भाषा प्राथमिकता के अनुकूल होता है।",
            "वैज्ञानिक शब्द और वर्गीकरण नाम अंतर्राष्ट्रीय मानकों को बनाए रखते हैं जबकि इंटरफेस तत्व पूरी तरह से स्थानीयकृत होते हैं।"
        ],
        'validation': [
            "हमारा डेटा सत्यापन सिस्टम समुद्री डेटासेट में सामान्य त्रुटियों को स्वचालित रूप से पहचानने और सुधारने के लिए अंतर्निहित नियमों का उपयोग करता है।",
            "सत्यापन में भौगोलिक निर्देशांक जांच, दिनांक प्रारूप मानकीकरण, वर्गीकरण सत्यापन, और इकाई रूपांतरण शामिल है।",
            "त्रुटि सुधार मॉड्यूल डेटा अखंडता और ट्रेसेबिलिटी बनाए रखते हुए सुझाव और स्वचालित सुधार प्रदान करता है।"
        ],
        'help': [
            "मैं समुद्री डेटा, मत्स्य, eDNA विश्लेषण, डार्विन कोर मानकों, OBIS सबमिशन, और सभी AquaNova सुविधाओं के बारे में प्रश्नों में आपकी मदद कर सकता हूं।",
            "विस्तृत जानकारी के लिए 'eDNA विश्लेषण कैसे काम करता है?' या 'डार्विन कोर क्या है?' जैसे विशिष्ट विषयों के बारे में पूछने का प्रयास करें।",
            "तकनीकी सहायता के लिए, आप डेटा आयात, API उपयोग, या प्लेटफॉर्म सुविधाओं के बारे में भी पूछ सकते हैं।"
        ],
        'default': [
            "मुझे उस विशिष्ट विषय के बारे में यकीन नहीं है, लेकिन मैं समुद्री डेटा प्रबंधन, समुद्री विश्लेषण, मत्स्य डेटा, eDNA तकनीकों, और AquaNova प्लेटफॉर्म सुविधाओं में आपकी मदद कर सकता हूं।",
            "क्या आप अपना प्रश्न दोबारा पूछ सकते हैं? मैं समुद्री विज्ञान, मत्स्य, eDNA, डार्विन कोर, और OBIS मानकों सहित समुद्री डेटा विषयों में विशेषज्ञ हूं।",
            "मैं AquaNova-संबंधित प्रश्नों में मदद के लिए यहां हूं। हमारी सुविधाओं, डेटा प्रबंधन क्षमताओं, या समुद्री विज्ञान विषयों के बारे में पूछने का प्रयास करें।"
        ]
    }
}

def detect_language(text):
    """Simple language detection based on character patterns"""
    hindi_chars = re.findall(r'[\u0900-\u097F]', text)
    if len(hindi_chars) > len(text) * 0.3:  # If more than 30% Hindi characters
        return 'hi'
    return 'en'

def get_response(message, lang='en'):
    """Generate chatbot response based on message content and language"""
    message_lower = message.lower()
    
    # Greeting patterns
    greeting_patterns = ['hello', 'hi', 'hey', 'namaste', 'नमस्ते', 'हैलो']
    if any(pattern in message_lower for pattern in greeting_patterns):
        return random.choice(chatbot_responses[lang]['greeting'])
    
    # Topic-based responses
    if any(word in message_lower for word in ['ocean', 'oceanographic', 'temperature', 'salinity', 'समुद्री', 'तापमान']):
        return random.choice(chatbot_responses[lang]['oceanographic'])
    
    if any(word in message_lower for word in ['fish', 'fisheries', 'catch', 'stock', 'मछली', 'मत्स्य']):
        return random.choice(chatbot_responses[lang]['fisheries'])
    
    if any(word in message_lower for word in ['edna', 'environmental dna', 'metabarcoding', 'eDNA']):
        return random.choice(chatbot_responses[lang]['edna'])
    
    if any(word in message_lower for word in ['darwin core', 'dwc', 'डार्विन कोर']):
        return random.choice(chatbot_responses[lang]['darwin_core'])
    
    if any(word in message_lower for word in ['obis', 'ocean biodiversity']):
        return random.choice(chatbot_responses[lang]['obis'])
    
    if any(word in message_lower for word in ['feature', 'capability', 'tool', 'सुविधा']):
        return random.choice(chatbot_responses[lang]['features'])
    
    if any(word in message_lower for word in ['import', 'upload', 'format', 'आयात']):
        return random.choice(chatbot_responses[lang]['data_import'])
    
    if any(word in message_lower for word in ['dashboard', 'visualization', 'chart', 'डैशबोर्ड']):
        return random.choice(chatbot_responses[lang]['dashboard'])
    
    if any(word in message_lower for word in ['api', 'developer', 'integration']):
        return random.choice(chatbot_responses[lang]['api'])
    
    if any(word in message_lower for word in ['language', 'multilingual', 'hindi', 'english', 'भाषा']):
        return random.choice(chatbot_responses[lang]['multilingual'])
    
    if any(word in message_lower for word in ['validation', 'error', 'fix', 'सत्यापन']):
        return random.choice(chatbot_responses[lang]['validation'])
    
    if any(word in message_lower for word in ['help', 'support', 'how', 'what', 'मदद', 'कैसे']):
        return random.choice(chatbot_responses[lang]['help'])
    
    # Default response
    return random.choice(chatbot_responses[lang]['default'])

@app.route('/chat', methods=['POST'])
def chat():
    try:
        data = request.get_json()
        message = data.get('message', '')
        lang = data.get('lang', 'en')
        
        # Auto-detect language if not specified or if detection is needed
        if not lang or lang not in ['en', 'hi']:
            lang = detect_language(message)
        
        response = get_response(message, lang)
        
        return jsonify({
            'reply': response,
            'lang': lang
        })
    
    except Exception as e:
        return jsonify({
            'reply': 'Sorry, I encountered an error. Please try again.',
            'lang': 'en',
            'error': str(e)
        }), 500

@app.route('/')
def home():
    return "AquaNova Backend is running! 🌊"

if __name__ == '__main__':
    print("🌊 Starting AquaNova Backend Server...")
    print("📡 Server will be available at: http://localhost:5000")
    print("🤖 Chat endpoint: POST /chat")
    print("✨ Ready to serve marine data requests!")
    app.run(debug=True, host='0.0.0.0', port=5000)