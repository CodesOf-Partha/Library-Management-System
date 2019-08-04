const express= require('express');
const app=express();
var bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors({
    origin:"http://localhost:4200"
}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
let items=[
    {
        "id": "3",
        "createdAt": "2019-07-03T18:34:22.611Z",
        "name": "Abagail Pacocha",
        "avatar": "http://lorempixel.com/640/480/transport",
        "authorName": "Toni Krajcik",
        "description": "If we parse the feed, we can get to the SQL monitor through the neural USB driver!"
    },
    {
        "id": "4",
        "createdAt": "2019-07-04T10:12:27.956Z",
        "name": "Roma Huel",
        "avatar": "http://lorempixel.com/640/480/transport",
        "authorName": "Andy Fadel",
        "description": "Try to generate the JSON firewall, maybe it will back up the digital program!"
    },
    {
        "id": "5",
        "createdAt": "2019-07-04T12:49:21.909Z",
        "name": "Juliana Cartwright MD",
        "avatar": "http://lorempixel.com/640/480/cats",
        "authorName": "Corbin Pfannerstill",
        "description": "Try to generate the SMTP feed, maybe it will bypass the 1080p application!"
    },
    {
        "id": "6",
        "createdAt": "2019-07-04T05:06:01.230Z",
        "name": "Lempi Barton",
        "avatar": "http://lorempixel.com/640/480/technics",
        "authorName": "Mrs. Baron Waters",
        "description": "If we transmit the array, we can get to the THX protocol through the open-source AGP array!"
    },
    {
        "id": "7",
        "createdAt": "2019-07-04T08:50:52.591Z",
        "name": "Linda Hane",
        "avatar": "http://lorempixel.com/640/480/abstract",
        "authorName": "Modesto Roberts",
        "description": "Try to generate the TCP pixel, maybe it will index the cross-platform port!"
    },
    {
        "id": "8",
        "createdAt": "2019-07-03T20:31:10.246Z",
        "name": "Keira Leuschke",
        "avatar": "http://lorempixel.com/640/480/food",
        "authorName": "Merle Barrows",
        "description": "The USB capacitor is down, generate the digital pixel so we can bypass the SDD pixel!"
    },
    {
        "id": "9",
        "createdAt": "2019-07-04T10:49:20.206Z",
        "name": "Avis Dicki MD",
        "avatar": "http://lorempixel.com/640/480/nature",
        "authorName": "Elvera Mante",
        "description": "Use the mobile PNG application, then you can quantify the digital bus!"
    },
    {
        "id": "10",
        "createdAt": "2019-07-04T09:35:10.823Z",
        "name": "Elyse Bashirian MD",
        "avatar": "http://lorempixel.com/640/480/cats",
        "authorName": "Lonzo Turcotte",
        "description": "Use the cross-platform THX microchip, then you can synthesize the neural application!"
    },
    {
        "id": "12",
        "createdAt": "2019-07-03T22:04:13.577Z",
        "name": "Georgiana Cartwright",
        "avatar": "http://lorempixel.com/640/480/business",
        "authorName": "Wilma Willms",
        "description": "We need to compress the solid state IB bandwidth!"
    }
];
app.get('/',function(req,res){
    res.json(items);
})
app.get('/books',function(req,res){
    res.json(items);
})
app.get('/books/:id',function(req,res){
    console.log(items[{"id":req.params.id}]);
    //res.json(res);
})
app.post('/books',function(req,res){
    console.log(req.body);
    res.send(req.body);
})

app.put('/books/:id',function(req,res){
    console.log(req.params.id);
    console.log(req.body);
    res.send("Edit Done");
})

app.delete('/books/:id',function(req,res){
    res.json({
        "message":"Deleted"
    })
})
app.listen(8000);