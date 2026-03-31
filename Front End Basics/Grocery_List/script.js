//creating a list of items
let shoppingCart =['Milk', 'Bread', 'Eggs'];
console.log(shoppingCart);

//add and remove items
shoppingCart.push('Cheese', 'Apples');
console.log(shoppingCart);

const removedItem= shoppingCart.pop();
console.log(`Removed Item: ${removedItem}`);
console.log(`Updated Shopping Cart: ${shoppingCart}`)

const firstItem= shoppingCart.shift();
console.log(`Removed Item: ${firstItem}`);
console.log(`Updated Shopping Cart: ${shoppingCart}`);

//Prioritize the items by moving to the top of list
shoppingCart.unshift('Butter', 'Juice');
console.log(`Updated Shopping Cart: ${shoppingCart}`);