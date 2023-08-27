// 1.Create an object representing a car with properties like "make," "model," and "year" Write ; function to display all the properties of the car.

const car = {
  make: 'TATA',
  model: 'Safari',
  year: 2023,
};

// function to display properties
const displayProps = (car) => {
  console.log(`Properties of your car =>`);
  for (let props in car) {
    console.log(`${props} : ${car[props]}`);
  }
};

// result
displayProps(car);