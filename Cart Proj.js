const products = [
    {
        name: "Mango",
        group: "Fruit",
        price: 3.42,
        image: "img",
        popularity: 225
    },
     {
        name: "Apple",
        group: "Fruit",
        price: 2.89,
        image: "img",
        popularity: 122
    },
     {
        name: "Chicken",
        group: "Meat",
        price: 22.64,
        image: "img",
        popularity: 120
    },
     {
        name: "Turkey",
        group: "Meat",
        price: 72.53,
        image: "img",
        popularity: 334
    }, 
    {
        name: "Pineapple",
        group: "Fruit",
        price: 6.53,
        image: "img",
        popularity: 445
    },
 {
        name: "Toast",
        group: "Grain",
        price: 5.20,
        image: "img",
        popularity: 88
    },
 {
        name: "Bagel",
        group: "Grain",
        price: 8.07,
        image: "img",
        popularity: 60
    },
 {
        name: "Broccoli",
        group: "Vegetable",
        price: 3.50,
        image: "img",
        popularity: 80000
    },
 {
        name: "Carrot",
        group: "Vegetable",
        price: 2.29,
        image: "img",
        popularity: 333
    },
{
        name: "Pear",
        group: "Fruit",
        price: 4.85,
        image: "img",
        popularity: 598
    },
{
        name: "Tomato",
        group: "Fruit",
        price: 4.22,
        image: "img",
        popularity: 276
    },
{
        name: "Cucumber",
        group: "Fruit",
        price: 4.31,
        image: "img",
        popularity: 638
    },
{
        name: "Artichoke",
        group: "Vegetable",
        price: 4.23,
        image: "img",
        popularity: 799
    },
{
        name: "Brussel Sprouts",
        group: "Vegetable",
        price: 4.54,
        image: "img",
        popularity: 823
    },
{
        name: "Salmon",
        group: "Meat",
        price: 32.45,
        image: "img",
        popularity: 373
    },
{
        name: "Steak",
        group: "Meat",
        price: 22.19,
        image: "img",
        popularity: 195
    },
{
        name: "Prime Steak",
        group: "Meat",
        price: 94.82,
        image: "img",
        popularity: 1954
    },
    {
        name: "Canned Tuna",
        group: "Meat",
        price: 2.47,
        image: "img",
        popularity: 268
    },
{
        name: "Canned Crab",
        group: "Meat",
        price: 5.48,
        image: "img",
        popularity: 321
    },
    {
        name: "Seabass",
        group: "Meat",
        price: 36.27,
        image: "img",
        popularity: 782
    },



]

/**
 * Filter array items based on search criteria (query)
 */
function filterItems(arr, query) {
  return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
}

console.log(filterItems(fruits, "ap")); // ['apple', 'grapes']
console.log(filterItems(fruits, "an")); // ['banana', 'mango', 'orange']
