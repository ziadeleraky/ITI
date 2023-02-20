// A
db.instructors.find({})

// B
db.instructors.find({salary:{$gt:4000}}, {firstName:1,salary:1})

// C
db.instructors.find({age:{$lte:25}})

// D
db.instructors.find({$and: [{"address.city":"mansoura"}, {"address.street":{$in:[10,14]}}]}, {firstName:1, address:1, salary:1})

// E
//db.instructors.find({courses: {$in: ['js', 'jquery']}})
db.instructors.find({ $and: [{ courses: "js" }, { courses: "jquery" }]})

// F
db.instructors.find({ courses: { $exists: true } }).forEach((ele) => {
    print(`${ele.firstName} ${ele.courses.length}`)
})

// H
db.instructors.find({$or: [{firstName: "mohammed"}, {lastName: "mohammed"}]})

// I
db.instructors.deleteOne({$and: [{firstName: "ebtesam"}, {courses: {$size: 5}}]})

// J
db.instructors.updateMany({}, { $set: {active: true}})

// K
db.instructors.updateOne({firstName: "mazen", lastName: "mohammed", courses: "EF"}, {$set: {"courses.$":""}})

// I
db.instructors.updateOne({firstName: "noha", lastName:"hesham"}, {$addToSet: {courses:"jquery"}})

// M
db.Instructors.updateOne({firstName:"ahmed", lastName:"mohammed"}, { $unset: { "courses": 20 } })

// N
db.instructors.updateOne({courses: {$size:3}},{$inc: {salary: -500}})

// O
db.instructors.updateMany({}, {$rename: {address: "Full Address"}})

// P
db.instructors.updateOne({$and: [{firstName:"noha"}, {lastName:"hesham"}]}, {$set:{"Full Address.street": 20}})

// G
let instructorsData = [];
db.instructors.find({firstName: {$exists: true}, lastName: {$exists: true}}, {firstName:1, lastName:1, age:1}).sort({firstName:1, lastName:-1}).forEach((ele) => {
    instructorsData.push({ele.firstName, ele.lastName, ele.age})
    print(`Full Name : ${ele.firstName} ${ele.lastName}, Age:${ele.age}`)
})
//Bonus
db.createCollection("instructorsData");
db.instructorsData.insert(instructorsData);
