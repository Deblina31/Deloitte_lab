const express=require('express');
const router= express.Router();

//In memory database

let listings=[
    {id:1, name:"Ravi", location:"Kolkata"},
    {id:2, name:"Rahul", location:"Goa"},
    {id:3, name:"Seema", location:"Kochi"},
    {id:4, name:"Priya", location:"Kerela"}
];
 
router.get('/', (req, res)=>{
    res.send(listings)
})

router.get('/search', (req,res)=>{
    const { location } = req.query;
    console.log('Location in Request: ', location);
   
    let listing = listings.find(l => l.location.toLowerCase() == location.toLowerCase());
    res.send(listing);
})

router.get('/:listingId', (req,res)=>{
    const {listingId} = req.params;
    let listing = listings.find(l => l.id === parseInt(listingId));
    res.send(listing);
})



// app.post('/api/v1/listings', (req, res)=>{
//     res.send('Hello World Express!')
// })

// app.get('/', (req, res)=>{
//     res.send('Hello World Express!')
// })

// app.post('/', (req, res)=>{
//     res.send('Hello World Express!')
// })

module.exports=router;