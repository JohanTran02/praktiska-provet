// Klassen Course ska ha följande egenskaper:
// name, yhp (poäng på YH)
// och metoderna
// getCourseInfo() som visar information om kursen

export class Course {
    constructor(name, yhp) {
        this.name = name;
        this.yhp = yhp;
    }

    getCourseInfo() {
        console.log(`${this.name} ${this.yhp}`);
    }
}