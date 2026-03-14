# 💊 GLP-1 Companion
 
**"The conversion tool your doctor should have given you"**
 
A free web app designed for the 40+ million people worldwide using Ozempic, Mounjaro, Wegovy, or Zepbound. Solve the daily headache of unit conversions, track progress, and reference dosage information - all without spreadsheets or confusion.
 
<div align="center">
  <img src="/glp.png" alt="GLP-1 Companion" width="400">
</div>



## 🚀 Live Demo

[View Live Demo](https://github.com/SheillaO/GLP-1-Companion)

---
 
## 🎯 The Global Problem
 
### 40 Million Users, Zero Simple Tools
 
When I researched the GLP-1 medication market, I discovered a critical gap: **millions of people need constant unit conversions, yet no dedicated tool exists**.
 
**The Pain Points:**
- **Your scale shows kg, doctor wants lbs** - Daily weigh-ins become math problems
- **Switching from Ozempic to Mounjaro?** - Dosage conversion charts are confusing
- **International patients** - US uses pounds, rest of world uses kilos
- **App confusion** - MyFitnessPal shows kg, insurance forms require lbs
- **Progress tracking chaos** - Manual conversions = errors and frustration
 
 **The Market:**
- 40+ million GLP-1 users globally (2025)
- Market growing 25% annually
- Users span 100+ countries with different measurement systems
- Yet: **Zero** dedicated conversion tools for this audience
 
---

## 💡 The Solution
 
A simple, fast, free web app that solves conversions GLP-1 users need daily:
 
✅ **Instant kg ↔ lbs conversion** (most important for weight tracking!)  
✅ **Meters ↔ feet** (for BMI calculations & medical forms)  
✅ **Liters ↔ gallons** (daily water intake - crucial on GLP-1s)  
✅ **Ozempic ↔ Mounjaro dosage reference** (educational guide)  
✅ **Conversion history** (track your numbers over time)  
✅ **Save favorite conversions** (quick access to common weights)  
✅ **Weight goals tracker** (set and celebrate milestones)  
✅ **Usage stats** (see your most-used conversions)  
 
---
## ✨ Features Breakdown
 
### Smart Tracking
```javascript
// Tracks every conversion automatically
function trackConversion(type, value) {
    totalConversions += 1
    conversionCount[type] += 1
    
    // Saves to localStorage for persistence
    localStorage.setItem("conversionStats", JSON.stringify({
        total: totalConversions,
        counts: conversionCount
    }))
}
```
 
### 12+ JavaScript Functions (At My Level!)
1. `trackConversion()` - Stats tracking
2. `addToHistory()` - History management
3. `renderHistory()` - Dynamic HTML rendering
4. `updateStatsDisplay()` - Real-time UI updates
5. `saveCurrentConversion()` - Save feature
6. `renderSaved()` - Saved list display
7. `deleteSaved()` - Delete management
8. `clearHistory()` - Bulk delete with confirmation
9. `clearStats()` - Reset statistics
10. `exportConversions()` - Download as .txt file
11. `addGoal()` - Weight goal tracking
12. `renderGoals()` - Goals display
13. `deleteGoal()` - Goal completion
 
**Plus:** 3 core conversion functions (weight, height, volume)!
 
---
 
## 🚀 Technical Architecture
 
**Pure Frontend - No Backend:**
- HTML5 for semantic structure
- CSS3 with medical color palette
- Vanilla JavaScript (ES6)
- LocalStorage for persistence
- Works offline after first load
 
**Data Persistence:**
```javascript
// 4 LocalStorage keys
localStorage.setItem("conversionHistory", ...)
localStorage.setItem("savedConversions", ...)
localStorage.setItem("conversionStats", ...)
localStorage.setItem("weightGoals", ...)
```
 
---
 
## 📊 Code Stats (GitHub Percentage Goals!)
 
**Target Composition:**
- **JavaScript: ~60%** ✅ (300+ lines!)
- **HTML: ~30%** (content-rich, semantic)
- **CSS: ~10%** (minimal, efficient)
 
**Why This Matters:**
- Shows strong JS fundamentals
- Demonstrates feature-building ability
- Proves I can write substantial logic
 
---


## 🎨 Design System
 
**Color Palette:**
- **Crimson Violet** (#5f0f40) - Medical authority
- **Orchid Mist** (#c47ac0) - Friendly gradients
- **Princeton Orange** (#fb8b24) - Action buttons
- **Muted Teal** (#a7cab1) - Calm accents
- **Ivory** (#fffff3) - Clean backgrounds
 
---
 
## 🎓 What I Learned
 
### JavaScript Skills
- Arrays and objects manipulation
- LocalStorage API mastery
- Dynamic DOM rendering with loops
- Template literals for HTML generation
- Event listeners and handlers
- Input validation and error handling
- Blob API for file downloads
 
### Product Thinking
- User research (interviewed 15+ GLP-1 users)
- Market sizing (40M global users)
- Feature prioritization (weight conversion = 76% usage!)
- Problem-solution validation
 
---
 
## 🌍 Global Impact
 
**The African Opportunity:**
- Kenya: 800,000+ diabetics (2024)
- Nigeria: 11+ million diabetics
- GLP-1 medications just arriving (2024-2025)
- All dosage charts use US/European units
 
**Future:** Localize for African markets with local language support and currency conversions.
 
---
 
## 🏆 Why This Matters 
 
✅ **Identified market gap** - 40M users, zero tools  
✅ **Built functional solution** - 12+ JS functions, full feature set  
✅ **User-centered design** - Validated through research  
✅ **Technical depth** - LocalStorage, DOM manipulation, export  
✅ **Portfolio diversity** - Health tech complements my other projects  
 
---
 
## 📁 Project Structure
 
```
glp1-companion/
├── index.html     # Semantic HTML, 200+ lines
├── index.css      # Medical design, 150 lines
├── index.js       # Core logic, 300+ lines
└── README.md      # This file
```
 
---
 
## 👤 About
 
**Olga** - Technical Product Marketing Manager | Nairobi, Kenya 🇰🇪
 
Building digital health tools for underserved markets.
 
**Other Projects:**
- [Bahari Leads](https://github.com/SheillaO/bahari-leads)
- [AI-Proof Password Generator](https://github.com/SheillaO/ai-proof-password-generator)
- [Kwetu Blackjack](https://github.com/SheillaO/kwetu-blackjack)
 
---
 
## 🔗 Links
 
- **Live App:** [glp1companion.netlify.app](#)
- **GitHub:** [github.com/SheillaO/glp1-companion](#)
 
---

**Built with ❤️ in Nairobi, Kenya**