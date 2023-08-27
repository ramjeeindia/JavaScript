// 6. You are workin. for an e-commerce company, and you are .iven an object containin. product-related
// information. Your task is to print the product-related information details as shown in the ima.e below.

const productDetails = {
    name: 'Apple 2020 MacBook Air Laptop',
    price: 82000,
    color: 'Grey',
    hardDisk: '256 GB',
  };
  
  // function
  const printDetails = (product) => {
    console.log(`Below are the product details.`);
    for (let detail in product) {
      console.log(`${detail} : ${product[detail]}`);
    }
  };
  
  // test-case
  printDetails(productDetails);