# Portfolio Website Changelog

## Session: January 14, 2026

### 1. Added Options Pricing Model Project
- Added new project entry for Cox-Ross-Rubenstein options pricing model
- Combined two images (`download.png` and `download (1).png`) into single `images/options_pricing.png`
- GitHub repo: https://github.com/Ilube-C/Cox-Ross-Rubenstein-options-pricing-model

### 2. Added Custom View
- Created new "Custom" dropdown option in view selector
- Custom view displays projects in specific priority order:
  1. Options Pricing Model
  2. Can SAEs Disentangle Superposed Features
  3. Pride and Prejudice NLP Analysis
  4. ESGD
  5. Student Grades Data Project
  6. Chess Variant AI
  7. (remaining projects in default order)
- Set Custom view as the default view on page load

### 3. Added Chat Sidebar with Gemini API Integration
- **Features:**
  - Floating chat button (bottom-right corner)
  - Slide-in sidebar (380px wide, full-width on mobile)
  - Pre-suggested clickable questions about projects
  - Typing indicator during API calls
  - Chat history within session
  - Auto-scrolling messages
  - Mobile responsive design

- **Suggested Questions:**
  - "What projects use Machine Learning?"
  - "Tell me about the SAE interpretability project"
  - "What consulting work have you done?"
  - "What's the options pricing model about?"

- **Technical Implementation:**
  - Uses Google Gemini 2.0 Flash API
  - System prompt includes all project data for context
  - Conversation history maintained for multi-turn chat

### 4. Security: API Key Management
- Removed hardcoded API key from repository
- Created GitHub Actions workflow (`.github/workflows/deploy.yml`) to inject API key at build time
- API key stored as GitHub repository secret (`GEMINI_API_KEY`)
- Added `.gitignore` to prevent accidental commits of sensitive files

### 5. GitHub Pages Configuration
- Changed GitHub Pages source from "Deploy from branch" to "GitHub Actions"
- Custom workflow handles:
  - Checkout code
  - Inject API key into script.js (replaces `__GEMINI_API_KEY__` placeholder)
  - Deploy to GitHub Pages

---

## Files Modified
- `index.html` - Added chat widget HTML, updated script version
- `styles.css` - Added chat sidebar styles (~260 lines)
- `script.js` - Added chat functionality, custom view logic, API integration
- `.github/workflows/deploy.yml` - New custom deployment workflow
- `.gitignore` - New file to exclude sensitive configs
- `images/options_pricing.png` - New combined image

## Repository Secrets Required
- `GEMINI_API_KEY` - Google Gemini API key (get from https://aistudio.google.com/apikey)
