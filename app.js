class Knowledge {
    constructor(level='') {

    }
}
class Student extends Knowledge {
    constructor(name, level){
        super(level);

    }

}
class University extends Student {
    constructor(name) {
        super();

    }
    addStudent(name){

    }
}
class Internship extends University {
    constructor(name){
        super();

    }
    getStudent(){

    }
}

let university = new University("CH.U.I.");
university.addStudent(new Student("Andrew Kostenko", low_lvl_knowledge));
university.addStudent(new Student("Julia Veselkina", high_lvl_knowledge));
university.addStudent(new Student("Maria Perechrest", mid_lvl_knowledge));


let internship = new Internship("Interlink");
console.log("List of internship's students:");
console.log(internship.getStudent());

