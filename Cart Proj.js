const product = ["Apple", "Banana", "Mango", "Toast", "Fish", "Chicken", "Turkey", "Cake", "Chips", "Salt", "Pepper", "Watermelon", "Peach"]
product[6] = "Chicken"
product.forEach ((item, index) => {
  console.log(`${index}: ${item}`);
});