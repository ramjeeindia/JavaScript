// 3. Build a feature for Store's Inventory.
// Suppose a store has a list of items and their prices in US Dollars stored as an object. Create a JavaScript program to convert the prices to Indian Rupees using an exchange rate of 1 USD to 80 INR. The program should use the map higher-order function to create a new object with the converted prices in Rupees.

// Object containing items with names, categories, and prices in USD


const itemsInUSD = {
    bat: 850,
    ball: 400,
    pads: 500,
    gloves: 480,
    helmet: 6000,
    shoes: 3000,
  };
  
  const convertUSDToINR = (obj, exchangeRate) => {
    const itemsinINR = {};
  
    Object.keys(obj).map((item) => {
      let priceInINR = itemsInUSD[item] * exchangeRate;
      itemsinINR[item] = priceInINR;
    });
  
    return itemsinINR;
  };
  
  // test-case
  console.log(convertUSDToINR(itemsInUSD, 84));