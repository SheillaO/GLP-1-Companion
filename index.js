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
 