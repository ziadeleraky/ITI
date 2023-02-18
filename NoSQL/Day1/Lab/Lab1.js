use ITI
db.createCollection('students')

db.ITI.find()

db.ITI.insert({fname:"Ziad", lname: "Eleraky"})

db.ITI.insert({fname:"Ahmed", lname: "Eleraky"})

db.ITI.insert({fname:"Mohamed", lname: "Eleraky", age: 24})

db.ITI.insert([{fname:"Ahmed", lname:"Ahmed"}, {fname:"Mohamed", lname:"Mohamed"}])

db.ITI.remove({lname: "Ahmed"})

// -------------------
use ITI
db.createCollection('instructors');

db.instructors.insert([{fname:"Ahmed", lname: "Mohamed", address: "Cairo"}, 
{fname:"Ziad", lname: "Ahmed", address: "Zayed"}, 
{fname:"Mahmoud", lname: "Ahmed", address: "Alex"}, 
{fname:"Mahmoud", lname: "Ahmed", address: "Alex", age: 24},
{fname:"Ashraf", lname: "Mohamed", address: "Ismailia", age: 21}])

db.instructors.insert({fname:"Hassan", lname: "Mohamed", address: "mansoura", age: 25})

db.instructors.insert({fname:"Mohamed", lname: "Hassan", address: {city:"mansoura", street:3}, age: 25})

db.instructors.insert({fname:"Mohamed", lname: "Hassan", address: {city:"mansoura", street:3}, age: 21})


let instructorsArray=[{_id:6,firstName:"noha",lastName:"hesham",
                age:21,salary:3500,
                address:{city:"cairo",street:10,building:8},
                courses:["js","mvc","signalR","expressjs"]},
                
                {_id:7,firstName:"mona",lastName:"ahmed",
                age:21,salary:3600,
                address:{city:"cairo",street:20,building:8},
                courses:["es6","mvc","signalR","expressjs"]},
                
                {_id:8,firstName:"mazen",lastName:"mohammed",
                age:21,salary:7040,
                address:{city:"Ismailia",street:10,building:8},
                courses:["asp.net","mvc","EF"]},
                
                {_id:9,firstName:"ebtesam",lastName:"hesham",
                age:21,salary:7500,
                address:{city:"mansoura",street:14,building:3},
                courses:["js","html5","signalR","expressjs","bootstrap"]}
		];

db.instructors.insert(instructorsArray);

// 7- A
db.instructors.find();

// 7- B
db.instructors.find({},{firstName:1, lastName:1, address:1})

// 7- C
db.instructors.find({age: 21}, {firstName:1, address:{city:1}})

// 7- D
db.instructors.find({"address.city": "mansoura"}, {firstName:1, age:1})

// 7- E.1
db.instructors.find({firstName:"mona"},{lastName:"ahmed"},{firstName:
1,lastName:1})

// 7- E.2
db.instructors.find({courses:"mvc"},{firstName:1,courses:1})
