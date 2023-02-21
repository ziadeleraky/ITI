use FacultySystemV2;

// 1
db.createCollection("Student", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            properties: {
                firstName: {
                    bsonType: "string"
                },
                lastName: {
                    bsonType: "string"
                },
                isFired: {
                    bsonType: "bool"
                },
                facultyId: {
                    bsonType: "number"
                },
                courses: {
                    bsonType: "array",
                    additionalProperties: false,
                    items: {
                        bsonType: "object",
                        additionalProperties: false,
                        properties: {
                            courseId: {
                                bsonType: "number"
                            },
                            grade: {
                                bsonType: "number"
                            }
                        }
                    }
                }
            }
        }
    }
})

db.createCollection("Faculty", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            properties: {
                facultyName: {
                    bsonType: "string"
                },
                address: {
                    bsonType: "string"
                }
            }
        }
    }
})

db.createCollection("Course", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            properties: {
                courseName: {
                    bsonType: "string"
                },
                finalMark: {
                    bsonType: "number"
                }
            }
        }
    }
})

db.Course.find({})
db.Course.insertMany([{ _id: 1, courseName: "JS", finalMark: 80 }, { _id: 2, courseName: "C#", finalMark: 50 }, { _id: 3, courseName: "EF", finalMark: 30 }
    , { _id: 4, courseName: "UML", finalMark: 60 }]);

db.Faculty.find({})
db.Faculty.insertMany([{ _id: 1, facultyName: "Portsaid", address: "address1" }, { _id: 2, facultyName: "Ain Shams", address: "address2" },
{ _id: 3, facultyName: "Cairo", address: "address3" }, { _id: 4, facultyName: "Helwan", address: "address4" }])

db.Student.find({});
db.Student.insertMany([{ firstName: "Ziad", lastName: "Eleraky", isFired: false, facultyId: 1, courses: [{ courseId: 1, grade: 100 }, { courseId: 3, grade: 50 }] },
{ firstName: "John", lastName: "Joe", isFired: false, facultyId: 2, courses: [{ courseId: 2, grade: 80 }, { courseId: 3, grade: 50 }] }]);


// 2
db.Student.aggregate([
    {
        $match: {
            $and: [{ firstName: { $exists: true } }, { lastName: { $exists: true } }]
        }
    }
    ,
    {
        $project: {
            fullName: { $concat: ["$firstName", " ", "$lastName"] },
            grade: "$courses.grade"
        }
    },
    {
        $unwind: {
            path: "$grade"
        }
    }
    ,
    {
        $group: {
            _id: "$fullName",
            averageGrades: {
                $avg: "$grade"
            }
        }
    }
]
)


// 3
db.Course.aggregate([{
    $group: {
        _id: "null",
        sumFinal: {
            $sum: "$finalMark"
        }
    }
}])

// 4.1
db.Student.find({})
db.Student.aggregate([{
    $match: {
        firstName: "Ziad"
    }
}, {
    $lookup: {
        from: "Course",
        localField: "courses.courseId",
        foreignField: "_id",
        as: "Courses"
    }
}])

// 4.2
db.Student.find()
db.Student.aggregate([{
    $match: {
        firstName: "John"
    }
}, {
    $lookup: {
        from: "Faculty",
        localField: "facultyId",
        foreignField: "_id",
        as: "Faculty"
    }
}])