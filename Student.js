// 9 (4p)
// Du ska skapa två klasser med ES6 syntax, Student och Course.

// Klassen Student ska ha följande egenskaper:
// fullname, courses (en array med kurser som är tom från början)
// och metoden
// registerCourse() som lägger till en kurs till studentens lista
// listCourses() som visar en lista på studentens kurser

export class Student {
    constructor(fullname) {
        this.fullname = fullname;
        this.courses = [];
    }

    registerCourse(course) {
        this.courses.push(course);
    }

    listCourses() {
        console.log(this.courses);
    }
}

