// CLASSES

class Person {
    constructor(data) {
        this.name = data.name;
        this.age = data.age;
        this.location = data.location;
        this.gender = data.gender;
    };
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    };
};

class Instructor extends Person {
    constructor(data) {
        super(data);
        this.specialty = data.specialty;
        this.favLanguage = data.favLanguage;
        this.catchPhrase = data.catchPhrase;
    };
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    };
    gradeStudent(student, subject) {
        let gradeChange = Math.floor(Math.random() * 20 - 10);
        student.grade += gradeChange;
        let testGrade = ((gradeChange + 10) * 2.5 + 50);
        console.log(`${student.name} receives a ${testGrade}% on ${subject}. Their new grade is ${student.grade}`);
    };
};

class Student extends Person {
    constructor(data) {
        super(data);
        this.previousBackground = data.previousBackground;
        this.className = data.className;
        this.favSubjects = data.favSubjects;
        this.grade = data.grade;
        this.status = data.status;
    };
    listsSubjects() {
        this.favSubjects.forEach(element => {
            console.log(element);
        });
    };
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    };
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    };
    graduate() {
        if (this.grade > 70) {
            this.status = "graduated";
            console.log(`${this.name} has graduated. Congratulations, ${this.name}!`);
        } else {
            console.log(`${this.name} isn't ready to graduate yet. Keep trying, ${this.name}!`);
        }
    }
};

class ProjectManager extends Instructor {
    constructor(data) {
        super(data);
        this.gradClassName = data.gradClassName;
        this.favInstructor = data.favInstructor;
    };
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    };
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    };
};


// OBJECTS

const instructorHank = new Instructor({
    "name": "Hank",
    "age": "32",
    "location": "Miami",
    "gender": "M",
    "favLanguage": "JavaScript",
    "specialty": "redux",
    "catchPhrase": "Stop that"
});
const instructorBill = new Instructor({
    "name": "Bill",
    "age": "41",
    "location": "Brooklyn",
    "gender": "M",
    "favLanguage": "Java",
    "specialty": "front end",
    "catchPhrase": "That's the way the cookie crumbles"
});
const instructorJennifer = new Instructor({
    "name": "Jennifer",
    "age": "35",
    "location": "Minneapolis",
    "gender": "F",
    "favLanguage": "C++",
    "specialty": "back end",
    "catchPhrase": "If I had a dollar"
});
const studentAnnie = new Student({
    "name": "Annie",
    "age": "21",
    "location": "Tuscon",
    "gender": "n/a",
    "previousBackground": "Custodian",
    "className": "web19",
    "favSubjects": "CSS",
    "grade": 89,
    "status": "current"
});
const studentHilda = new Student({
    "name": "Hilda",
    "age": "32",
    "location": "Rosewood",
    "gender": "F",
    "previousBackground": "Lab tech",
    "className": "web19",
    "favSubjects": "JavaScript",
    "grade": 39,
    "status": "current"
});
const studentJeff = new Student({
    "name": "Jeff",
    "age": "47",
    "location": "Los Angeles",
    "gender": "M",
    "previousBackground": "Sales rep",
    "className": "ios5",
    "favSubjects": "JavaScript",
    "grade": 99,
    "status": "current"
});
const pmAsh = new ProjectManager({
    "name": "Ash",
    "age": "27",
    "location": "New York City",
    "gender": "F",
    "favLanguage": "Ruby",
    "specialty": "app development",
    "catchPhrase": "Oops",
    "gradClassName": "ios2",
    "favInstructor": "Jennifer"
});
const pmLaurie = new ProjectManager({
    "name": "Laurie",
    "age": "37",
    "location": "Washington D.C.",
    "gender": "M",
    "favLanguage": "JavaScript",
    "specialty": "back end",
    "catchPhrase": "Watch the hands",
    "gradClassName": "web17",
    "favInstructor": "Jennifer"
});
const pmLincoln = new ProjectManager({
    "name": "Lincoln",
    "age": "28",
    "location": "Boise",
    "gender": "M",
    "favLanguage": "Java",
    "specialty": "Java",
    "catchPhrase": "Let's do that again",
    "gradClassName": "web17",
    "favInstructor": "Bill"
});


// STRETCH

console.log('starting grade:' + studentAnnie.grade);
instructorBill.gradeStudent(studentAnnie, "Math");
instructorBill.gradeStudent(studentAnnie, "Science");
instructorBill.gradeStudent(studentAnnie, "Code Stuff");
instructorBill.gradeStudent(studentAnnie, "Something Else");
studentAnnie.graduate();
studentJeff.graduate();
studentHilda.graduate();