// Final app.js with proper fixes for button and UI functionality

const BASE_URL = "https://v6.exchangerate-api.com/v6/3c2981f85fc899705ea2ee93/latest";
const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.getElementById("getRateBtn"); // Select button using its ID
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");
const swapBtn = document.querySelector(".swap-btn");
const loader = document.querySelector(".loader");

// Currency symbols map
const currencySymbols = {
  USD: "$", INR: "₹", EUR: "€", GBP: "£", JPY: "¥", AUD: "A$", CAD: "C$",
  // Add more symbols as needed
};

// Populate the dropdowns with currency codes
for (let select of dropdowns) {
  for (currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }

  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

// Fetch exchange rates and update the UI
const updateExchangeRate = async () => {
  console.log("Get Exchange Rate button clicked");
  try {
    const amountInput = document.querySelector(".amount input");
    let amount = amountInput.value || 1;

    if (amount <= 0) {
      msg.innerText = "Please enter a valid amount.";
      msg.style.visibility = "visible";
      return;
    }

    loader.style.display = "block";

    const baseCurrency = fromCurr.value;
    const targetCurrency = toCurr.value;
    const URL = `${BASE_URL}/${baseCurrency}`;

    console.log(`Fetching exchange rate from: ${URL}`);

    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();

    const rates = data.conversion_rates;
    const rate = rates[targetCurrency];
    const finalAmount = (amount * rate).toFixed(2);

    const fromSymbol = currencySymbols[fromCurr.value] || fromCurr.value;
    const toSymbol = currencySymbols[toCurr.value] || toCurr.value;

    msg.innerText = `${amount} ${fromSymbol} = ${finalAmount} ${toSymbol}`;
    msg.style.visibility = "visible";
  } catch (error) {
    console.error("Error fetching exchange rates:", error);
    msg.innerText = "Error fetching exchange rates. Please try again later.";
    msg.style.visibility = "visible";
  } finally {
    loader.style.display = "none";
  }
};

// Update flag based on the selected currency
const updateFlag = (element) => {
  const currCode = element.value;
  const countryCode = countryList[currCode];
  const newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  const img = element.parentElement.querySelector("img");
  img.src = newSrc;
  console.log(`Flag updated for currency: ${currCode}`);
};

// Swap currencies and update everything
swapBtn.addEventListener("click", () => {
  console.log("Swap button clicked");
  const temp = fromCurr.value;
  fromCurr.value = toCurr.value;
  toCurr.value = temp;

  // Update flags after swapping
  updateFlag(fromCurr);
  updateFlag(toCurr);

  // Update exchange rate
  updateExchangeRate();
});

// Ensure the Get Exchange Rate button works
btn.addEventListener("click", (evt) => {
  evt.preventDefault(); // Prevent page refresh
  console.log("Get Exchange Rate button triggered");
  updateExchangeRate();
});

// Update exchange rates on page load
window.addEventListener("load", () => {
  console.log("Page loaded, fetching initial exchange rate");
  updateExchangeRate();
});
