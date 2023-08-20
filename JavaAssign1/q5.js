// You are building a shipping application. Write a program that takes the type of package ("standard",
// "express", or "overnight") and uses a switch statement to calculate and print the estimated delivery time based on the package type. For example, "standard" might take 3-5 days, "express" 1-2 days, and "overnight" would be delivered the next day.

let packageType = "overnight"; 

function calculateDeliveryTime(packageType) {
    let deliveryTime;
  
    switch (packageType) {
      case "standard":deliveryTime = "3-5 days";
        break;
      case "express":deliveryTime = "1-2 days";
        break;
      case "overnight":deliveryTime = "next day";
        break;
      default:console.log("Invalid package type.");
        return;
    }
  
    return deliveryTime;
  }
  
 let estimatedDeliveryTime = calculateDeliveryTime(packageType);
  
  if (estimatedDeliveryTime) {
    console.log(`Estimated delivery time for ${packageType} package: ${estimatedDeliveryTime}.`);
  }
  