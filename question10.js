// 10 (3p)
// Använd ES6 moduler. Du ska exportera klasserna Student och Course genom att skapa filerna Student.js och Course.js.
// Skapa en tredje fil, main.js, där du importerar klasserna och skapar två olika studenter och lägger till två olika kurser till studenterna.
// Skriv även ut studententens kurser (listCourses()) samt information om kurserna (getCourseInfo()).
// main.js ska vara kopplat till index.html och informationen om studenterna och kurserna ska loggas ut i consolen.

const student1 = new Student("Sandra");
const student2 = new Student("Torsten");
const student3 = new Student("Stina");
const course1 = new Course("HTML", 10);
const course2 = new Course("CSS", 50);
const course3 = new Course("Javascript", 2000);
student1.registerCourse(course1);
student1.registerCourse(course2);
student1.registerCourse(course3);
student2.registerCourse(course1);
student2.registerCourse(course2);
student3.registerCourse(course3);
student1.listCourses(); // Ska logga: [{ name: "HTML", yhp: 10 }, { name: "CSS", yhp: 50 }, { name: "Javascript", yhp: 2000 }]
student2.listCourses(); // Ska logga: [{ name: "HTML", yhp: 10 }, { name: "CSS", yhp: 50 }]
student3.listCourses(); // Ska logga: [{ name: "Javascript", yhp: 2000 }]
course1.getCourseInfo(); // Ska logga: HTML 10
course2.getCourseInfo(); // Ska logga: CSS 50
course3.getCourseInfo(); // Ska logga: Javascript 2000

