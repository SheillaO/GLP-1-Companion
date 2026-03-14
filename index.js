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
let savedConversions = [];
const savedFromStorage = JSON.parse(localStorage.getItem("savedConversions"));

if (savedFromStorage) {
  savedConversions = savedFromStorage;
  renderSaved();
}

// 1. Length Block (Meters <-> Feet)
convertBtn.addEventListener("click", function () {
  let baseValue = Number(inputEl.value);

  if (baseValue <= 0 || isNaN(baseValue)) {
    alert("Please enter a valid number!");
    return;
  }

  const mToF = (baseValue * 3.281).toFixed(2);
  const fToM = (baseValue / 3.281).toFixed(2);

  lengthEl.textContent = `${baseValue} meters = ${mToF} feet | ${baseValue} feet = ${fToM} meters`;

  trackConversion("height", baseValue);
});

// 2. Volume Block (Liters <-> Gallons)
convertBtn.addEventListener("click", function () {
  let baseValue = Number(inputEl.value);

  if (baseValue <= 0 || isNaN(baseValue)) {
    return;
  }

  const lToG = (baseValue * 0.264).toFixed(2);
  const gToL = (baseValue / 0.264).toFixed(2);

  volumeEl.textContent = `${baseValue} liters = ${lToG} gallons | ${baseValue} gallons = ${gToL} liters`;
});

// 3. Mass Block (Kilos <-> Pounds)
convertBtn.addEventListener("click", function () {
  let baseValue = Number(inputEl.value);

  if (baseValue <= 0 || isNaN(baseValue)) {
    return;
  }

  const kToP = (baseValue * 2.204).toFixed(2);
  const pToK = (baseValue / 2.204).toFixed(2);

  massEl.textContent = `${baseValue} kilos = ${kToP} pounds | ${baseValue} pounds = ${pToK} kilos`;

  trackConversion("weight", baseValue);
});

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
  let timestamp = new Date().toLocaleString();
  let historyItem = {
    type: type,
    value: value,
    time: timestamp,
  };

  conversionHistory.push(historyItem);

  if (conversionHistory.length > 10) {
    conversionHistory.shift();
  }

  localStorage.setItem("conversionHistory", JSON.stringify(conversionHistory));
  renderHistory();
}

// Render history
function renderHistory() {
  let historyEl = document.getElementById("history-list");
  if (!historyEl) return;

  let historyHTML = "";

  for (let i = conversionHistory.length - 1; i >= 0; i--) {
    let item = conversionHistory[i];
    let icon =
      item.type === "weight" ? "💉" : item.type === "height" ? "📏" : "💧";

    historyHTML += `
            <div class="history-item">
                <span>${icon} ${item.value} (${item.type})</span>
                <span class="time">${item.time}</span>
            </div>
        `;
  }

  historyEl.innerHTML = historyHTML || "<p>No conversions yet</p>";
}

// Update stats display
function updateStatsDisplay() {
  let statsEl = document.getElementById("stats-display");
  if (!statsEl) return;

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
    `;
}

// Save current conversion
function saveCurrentConversion() {
  let baseValue = Number(inputEl.value);

  if (baseValue <= 0 || isNaN(baseValue)) {
    alert("Enter a number to save!");
    return;
  }

  let kToP = (baseValue * 2.204).toFixed(2);
  let pToK = (baseValue / 2.204).toFixed(2);

  let savedItem = {
    original: baseValue,
    kgToPounds: kToP,
    poundsToKg: pToK,
    timestamp: new Date().toLocaleString(),
  };

  savedConversions.push(savedItem);
  localStorage.setItem("savedConversions", JSON.stringify(savedConversions));

  renderSaved();
  alert("✅ Conversion saved!");
}

// Render saved conversions
function renderSaved() {
  let savedEl = document.getElementById("saved-list");
  if (!savedEl) return;

  let savedHTML = "";

  for (let i = 0; i < savedConversions.length; i++) {
    let item = savedConversions[i];
    savedHTML += `
            <div class="saved-item">
                <strong>${item.original} kg = ${item.kgToPounds} lbs</strong>
                <button onclick="deleteSaved(${i})" class="delete-btn">Delete</button>
            </div>
        `;
  }

  savedEl.innerHTML = savedHTML || "<p>No saved conversions</p>";
}

// Delete saved conversion
function deleteSaved(index) {
  savedConversions.splice(index, 1);
  localStorage.setItem("savedConversions", JSON.stringify(savedConversions));
  renderSaved();
}

// Clear all history
function clearHistory() {
  if (confirm("Clear all conversion history?")) {
    conversionHistory = [];
    localStorage.removeItem("conversionHistory");
    renderHistory();
    alert("✅ History cleared!");
  }
}

// Clear all stats
function clearStats() {
  if (confirm("Reset all statistics?")) {
    totalConversions = 0;
    conversionCount = {
      weight: 0,
      height: 0,
      volume: 0,
    };
    favoriteUnit = "weight";
    localStorage.removeItem("conversionStats");
    updateStatsDisplay();
    alert("✅ Stats reset!");
  }
}

// Export conversions
function exportConversions() {
  if (savedConversions.length === 0) {
    alert("No conversions to export!");
    return;
  }

  let exportText = "GLP-1 Companion - Saved Conversions\n\n";

  for (let i = 0; i < savedConversions.length; i++) {
    let item = savedConversions[i];
    exportText += `${item.timestamp}\n`;
    exportText += `${item.original} kg = ${item.kgToPounds} lbs\n`;
    exportText += `${item.original} lbs = ${item.poundsToKg} kg\n\n`;
  }

  let blob = new Blob([exportText], { type: "text/plain" });
  let url = URL.createObjectURL(blob);
  let link = document.createElement("a");
  link.href = url;
  link.download = "glp1-conversions.txt";
  link.click();

  alert("✅ Conversions exported!");
}

// Weight goals tracker
let weightGoals = [];
const goalsFromStorage = JSON.parse(localStorage.getItem("weightGoals"));

if (goalsFromStorage) {
  weightGoals = goalsFromStorage;
  renderGoals();
}

// Add weight goal
function addGoal() {
  let goalInput = document.getElementById("goal-input");
  if (!goalInput) return;

  let goalValue = Number(goalInput.value);

  if (goalValue <= 0 || isNaN(goalValue)) {
    alert("Enter a valid goal weight!");
    return;
  }

  weightGoals.push({
    weight: goalValue,
    date: new Date().toLocaleDateString(),
  });

  localStorage.setItem("weightGoals", JSON.stringify(weightGoals));
  goalInput.value = "";
  renderGoals();
}

// Render goals
function renderGoals() {
  let goalsEl = document.getElementById("goals-list");
  if (!goalsEl) return;

  let goalsHTML = "";

  for (let i = 0; i < weightGoals.length; i++) {
    let goal = weightGoals[i];
    goalsHTML += `
            <div class="goal-item">
                <span>🎯 Goal: ${goal.weight} kg (Set: ${goal.date})</span>
                <button onclick="deleteGoal(${i})">✓ Reached</button>
            </div>
        `;
  }

  goalsEl.innerHTML = goalsHTML || "<p>No goals set</p>";
}

// Delete goal
function deleteGoal(index) {
  if (confirm("Mark this goal as reached?")) {
    weightGoals.splice(index, 1);
    localStorage.setItem("weightGoals", JSON.stringify(weightGoals));
    renderGoals();
    alert("🎉 Congratulations on reaching your goal!");
  }
}

// Initialize on load
document.addEventListener("DOMContentLoaded", function () {
  renderHistory();
  renderSaved();
  updateStatsDisplay();
  renderGoals();
});
