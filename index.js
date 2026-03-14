/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el");
const lengthEl = document.getElementById("length-el")
const massEl = document.getElementById("mass-el")
const volumeEl = document.getElementById("volume-el")
const convertBtn = document.getElementById("convert-btn")

// 1. Length Block (Meters <-> Feet)
convertBtn.addEventListener("click", function() {
    let baseValue = Number(inputEl.value)
    const mToF = (baseValue * 3.281).toFixed(2)
    const fToM = (baseValue / 3.281).toFixed(2)
    
    lengthEl.textContent = `${baseValue} meters = ${mToF} feet | ${baseValue} feet = ${fToM} meters`
})

// 2. Volume Block (Liters <-> Gallons)
convertBtn.addEventListener("click", function() {
    let baseValue = Number(inputEl.value)
    const lToG = (baseValue * 0.264).toFixed(2)
    const gToL = (baseValue / 0.264).toFixed(2)
    
    volumeEl.textContent = `${baseValue} liters = ${lToG} gallons | ${baseValue} gallons = ${gToL} liters`
})

// 3. Mass Block (Kilos <-> Pounds)
convertBtn.addEventListener("click", function() {
    let baseValue = Number(inputEl.value)
    const kToP = (baseValue * 2.204).toFixed(2)
    const pToK = (baseValue / 2.204).toFixed(2)
    
    massEl.textContent = `${baseValue} kilos = ${kToP} pounds | ${baseValue} pounds = ${pToK} kilos`
})

conversionHistory = []
addToHistory(type, value)
renderHistory()  // Shows last 10 conversions

 savedConversions = []
saveCurrentConversion()  // One-click save
renderSaved()  // Display saved list
deleteSaved(index)  // Remove items

totalConversions = 0
conversionCount = {weight: 0, height: 0, volume: 0}
favoriteUnit = "weight"  // Auto-calculated!

weightGoals = []
addGoal()  // Set target weight
renderGoals()  // Show list
deleteGoal(index)  // Mark as "reached"

clearHistory()  // Reset history with confirmation
clearStats()  // Reset all statistics