/*
GLP-1 Companion - Conversion Tool for Ozempic/Mounjaro Users
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputEl = document.getElementById("input-el");
const lengthEl = document.getElementById("length-el");
const massEl = document.getElementById("mass-el");
const volumeEl = document.getElementById("volume-el");
const convertBtn = document.getElementById("convert-btn");

// NEW: History tracking (like your Bahari Leads!)
let conversionHistory = [];
const historyFromStorage = JSON.parse(
  localStorage.getItem("conversionHistory"),
);

if (historyFromStorage) {
  conversionHistory = historyFromStorage;
  renderHistory();
}

// NEW: Stats tracking (like your blackjack!)
let totalConversions = 0;
let favoriteUnit = "weight";
let conversionCount = {
  weight: 0,
  height: 0,
  volume: 0,
};

const statsFromStorage = JSON.parse(localStorage.getItem("conversionStats"));
if (statsFromStorage) {
  totalConversions = statsFromStorage.total;
  conversionCount = statsFromStorage.counts;
  favoriteUnit = statsFromStorage.favorite;
  updateStatsDisplay();
}

// NEW: Saved conversions (like your password history!)
let savedConversions = []
const savedFromStorage = JSON.parse(localStorage.getItem("savedConversions"))
 
if (savedFromStorage) {
    savedConversions = savedFromStorage
    renderSaved()
}

// 1. Length Block (Meters <-> Feet)
convertBtn.addEventListener("click", function() {
    let baseValue = Number(inputEl.value)
    
    if (baseValue <= 0 || isNaN(baseValue)) {
        alert("Please enter a valid number!")
        return
    }
    
    const mToF = (baseValue * 3.281).toFixed(2)
    const fToM = (baseValue / 3.281).toFixed(2)
    
    lengthEl.textContent = `${baseValue} meters = ${mToF} feet | ${baseValue} feet = ${fToM} meters`
    
    trackConversion("height", baseValue)
})
 
// 2. Volume Block (Liters <-> Gallons)
convertBtn.addEventListener("click", function() {
    let baseValue = Number(inputEl.value)
    
    if (baseValue <= 0 || isNaN(baseValue)) {
        return
    }
    
    const lToG = (baseValue * 0.264).toFixed(2)
    const gToL = (baseValue / 0.264).toFixed(2)
    
    volumeEl.textContent = `${baseValue} liters = ${lToG} gallons | ${baseValue} gallons = ${gToL} liters`
})

// 3. Mass Block (Kilos <-> Pounds)
convertBtn.addEventListener("click", function() {
    let baseValue = Number(inputEl.value)
    
    if (baseValue <= 0 || isNaN(baseValue)) {
        return
    }
    
    const kToP = (baseValue * 2.204).toFixed(2)
    const pToK = (baseValue / 2.204).toFixed(2)
    
    massEl.textContent = `${baseValue} kilos = ${kToP} pounds | ${baseValue} pounds = ${pToK} kilos`
    
    trackConversion("weight", baseValue)
})

// Track conversions
function trackConversion(type, value) {
  totalConversions += 1;
  conversionCount[type] += 1;

  if (
    conversionCount.weight > conversionCount.height &&
    conversionCount.weight > conversionCount.volume
  ) {
    favoriteUnit = "weight";
  } else if (conversionCount.height > conversionCount.volume) {
    favoriteUnit = "height";
  } else {
    favoriteUnit = "volume";
  }
  localStorage.setItem(
    "conversionStats",
    JSON.stringify({
      total: totalConversions,
      counts: conversionCount,
      favorite: favoriteUnit,
    }),
  );

  addToHistory(type, value);
  updateStatsDisplay();
}
 // Add to history
function addToHistory(type, value) {
    let timestamp = new Date().toLocaleString()
    let historyItem = {
        type: type,
        value: value,
        time: timestamp
    }
    
    conversionHistory.push(historyItem)
    
    if (conversionHistory.length > 10) {
        conversionHistory.shift()
    }
    
    localStorage.setItem("conversionHistory", JSON.stringify(conversionHistory))
    renderHistory()
}

// Render history
function renderHistory() {
    let historyEl = document.getElementById("history-list")
    if (!historyEl) return
    
    let historyHTML = ""
    
    for (let i = conversionHistory.length - 1; i >= 0; i--) {
        let item = conversionHistory[i]
        let icon = item.type === "weight" ? "💉" : item.type === "height" ? "📏" : "💧"

          historyHTML += `
            <div class="history-item">
                <span>${icon} ${item.value} (${item.type})</span>
                <span class="time">${item.time}</span>
            </div>
        `
    }
    historyEl.innerHTML = historyHTML || "<p>No conversions yet</p>"
}
 
// Update stats display
function updateStatsDisplay() {
    let statsEl = document.getElementById("stats-display")
    if (!statsEl) return
    
    statsEl.innerHTML = `
        <div class="stat-item">
            <strong>${totalConversions}</strong>
            <span>Total Conversions</span>
        </div>
        <div class="stat-item">
            <strong>${conversionCount.weight}</strong>
            <span>Weight Conversions</span>
        </div>
        <div class="stat-item">
            <strong>${favoriteUnit}</strong>
            <span>Most Used</span>
        </div>
    `