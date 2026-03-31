// const userData= ['Deblina', '2500', 'Kolkata'];
// const[uname, salary]= userData;

// console.log(`User Name: ${uname}`);
// console.log(`Salary: ${salary}`);

//Merfing Multiple Arrays
// const arr1=[1,2,3];
// const arr2=[4,5,6];

// const combinedArray=[...arr1, ...arr2,7,8,9,10];
// console.log(` Combined Array is ${combinedArray}`);

//Sentiment Analysis
const tweets=[
    "Tweet 1", "Tweet #2", "Tweet #3", "Tweet 4"
];

//remove unwanted elements like #tags
//tokenize the tweets
//Split the words, make all of them lower case and combine them as strings
// function cleantweet(){
//     const words= tweets.split(/\s+/);

//     let lowerCasedWords=words.foreach(word=>words.toLowerCase())
//     return lowerCasedWords.join(' ');
// }
// tweets.forEach(element => cleantweet(element));

// const cleanTweets=tweets.map(tweet=>{
//     const words= tweet.trim().split(/\s+/);
//     const lowerCasedWords= words.map(word=> );
// })

//Case Insensitive Searching
// const products = [
//     { name: "T-Shirt", category: "Clothing" },
//     { name: "Laptop", category: "electronics" },
//     { name: "CoFFee Mug", category: "Kitchen" },
//     { name: "Headphones", category: "electronics" }
// ];

// function searchProducts(searchTerm) {
//     return products.filter(product =>
//         product.name.toLowerCase()===searchTerm.toLowerCase()
//     );
// }

//console.log(searchProducts("LAPTOP"));


// var n=Math.random()*100;
// console.log(Math.floor(n )+1+"%");

//Lab: Promise based programming, handling a promise
// const products = [
//     {id: 1, name: "T-Shirt", category:"Clothing"},
//     {id: 2, name: "Laptop", category:"electronics"},
//     {id: 3, name: "CoFFee Mug", category:"Kitchen"},
//     {id: 4, name: "Headphones", category:"electronics"}
// ];
 
// function printProductDetails(product){
//     console.log("Product Details: ", product);
// }
 
 
// function fetchProduct(productId){
//     return new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             const product = products.find(p => p.id === productId);
//             resolve(product);
//         }, 4000)
//     })
// }
 
// // calling part
// fetchProduct(2)
//    .then((product)=> printProductDetails(product))

var i=99;
while(i>=0){
    console.log(`${i} bottles of beer on the wall, ${i} bottles of beer.
Take one down and pass it around, ${i-1} bottles of beer on the wall.`);
    i--;
}