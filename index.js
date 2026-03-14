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

 



