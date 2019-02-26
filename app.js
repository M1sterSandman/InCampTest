class Knowledge {
    constructor(level='') {
        this.level=level;
    }
}
class Student extends Knowledge {
    constructor(name, level){
        super(level);
        this.name=name;
    }

}
class University extends Student {
    constructor(name) {
        super();
        this.name=name;
        this.studentsList=[];
    }
    addStudent(name){
        this.studentsList.push(name);
        console.log(this.studentsList);
    }
}
class Internship extends University {
    constructor(name){
        super();
        this.name=name;
        this.suitableStudents=[];
    }

    getStudent(){
        return this.suitableStudents;
    }
    checkStudent(university){
        university.studentsList.forEach((university)=>{
            if(university.level.level!==null && university.level.level>=4) {
                this.suitableStudents.push(university.name);
            }

        });
    }
}


let high_lvl_knowledge = new Knowledge("5");
let mid_lvl_knowledge = new Knowledge("4");
let low_lvl_knowledge = new Knowledge("3");

let some_student = new Student("Sasha Onoshko", high_lvl_knowledge);

let university = new University("CH.U.I.");
university.addStudent(new Student("Andrew Kostenko", low_lvl_knowledge));
university.addStudent(new Student("Julia Veselkina", high_lvl_knowledge));
university.addStudent(new Student("Maria Perechrest", mid_lvl_knowledge));

university.addStudent(some_student);
console.log(university.studentsList);

let internship = new Internship("Interlink");

internship.checkStudent(university);

console.log("List of internship's students:");
console.log(internship.getStudent());

