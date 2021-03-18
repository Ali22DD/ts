class Person {
    constructor (fName: string, lName: string, age: number, jobTitle: string){
        this.fName = fName;
        this.lName = lName;
        this.age = age;
        this.jobTitle = jobTitle;
    }
    showMsg(){
        return  "Hello there, My name is ${fName} ${lName} and I am ${age} years old and I am a ${jobTitle}";
    }
}
var Person1 = new Person ("Max", "Mustermann", "35", "Frontend Developer");
var Person2 = new Person ("Sebastian", "Vettel", "35", "Formula1 Driver");
var Person3 = new Person ("Gianluigi", "Buffon", "43", "Goalkeeper");

class test extends Person [
    salary: number;
    jobLocation: string;
    msg: string;
]
    constructor (fName, lName, age, jobTitle, salary, jobLocation){
        super(fName, lName, age, jobTitle);
        this.salary;
        this.jobLocation;
        this.msg;
    }
    return "and I get super.${salary} every month and I work in super.${jobLocation}";
}