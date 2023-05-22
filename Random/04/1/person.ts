class Person {
  name: string;
  age: number;
  gender: string;

  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender
  }

  getGoal() {
    console.log('My goal is: Live for the moment!');
  }

  introduce() {
    console.log(`Hello, my name is ${this.name} a ${this.age} years old ${this.gender}.`)
  }
}

let personOne = new Person('Jane Doe', 30, 'female');

personOne.introduce()
personOne.getGoal()

console.log('---------------------------------------------------');

class Student extends Person {
  previousOrganization: string;
  skippedDays: number = 0;

  constructor(name: string, age: number, gender: string, previousOrganization: string) {
    super(name, age, gender)
    this.previousOrganization = previousOrganization;
  }

  getGoal() {
    console.log('My goal is: Be a junior software developer.');
  }

  introduce() {
    console.log(`Hello, my name is ${this.name} a ${this.age} years old ${this.gender} from ${this.previousOrganization}`
      + ` who skipped ${this.skippedDays} days from the course already.`)
  }

  skipDays(numberOfDays: number) {
    this.skippedDays += numberOfDays;
  }
}

let studentOne = new Student('Andrew Jason', 22, 'male', 'school');

let studentTwo = new Student('Trevis', 18, 'male', 'work')

studentOne.skipDays(3);
studentOne.introduce()
studentOne.getGoal()

console.log('---------------------------------------------------');

class Mentor extends Person {
  level: string;

  constructor(name: string, age: number, gender: string, level: string) {
    super(name, age, gender)
    this.level = level;
  }

  getGoal() {
    console.log('My goal is: Educate brilliant junior software developers.');
  }

  introduce() {
    console.log(`Hello, my name is ${this.name} a ${this.age} years old ${this.gender} ${this.level} mentor.`)
  }
}

let mentorOne = new Mentor('Peter Peterson', 36, 'male', 'senior');

mentorOne.introduce();
mentorOne.getGoal();

console.log('---------------------------------------------------');

class Sponsor extends Person {
  company: string;
  hiredStudents: number = 0;


  constructor(name: string, age: number, gender: string, company: string, hiredStudents: number) {
    super(name, age, gender)
    this.company = company;
    this.hiredStudents = hiredStudents;
  }

  getGoal() {
    console.log('My goal is: Hire brilliant junior software developers.');
  }

  introduce() {
    console.log(`Hello, my name is ${this.name} a ${this.age} years old ${this.gender} who represents ${this.company} company and`
      + ` hired ${this.hiredStudents} students so far.'`)
  }

}

let sponsorOne = new Sponsor('Baby Boss', 5, 'male', 'Dream work', 5);

sponsorOne.introduce();
sponsorOne.getGoal();

console.log('---------------------------------------------------');

class Cohort {
  name: string;
  students: Student[];
  mentors: Mentor[];

  constructor(name: string) {
    this.name = name;
    this.students = [];
    this.mentors = [];
  }

  addStudent(student: Student) {
    this.students.push(student);
  }

  addMentor(mentor: Mentor) {
    this.mentors.push(mentor);
  }

  info() {
    console.log(`The ${this.name} cohort has ${this.students.length}  students and ${this.mentors.length} mentors.`)

  }

}

let cohortOne = new Cohort('ABC')


cohortOne.addStudent(studentOne)
cohortOne.addMentor(mentorOne)
cohortOne.addStudent(studentTwo);
cohortOne.info();