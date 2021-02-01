class Student {
    constructor(sId, sName) {
        this.id = sId;
        this.name = sName;
        this.school = 'kolimunnesa school'
    }
}
const student1 = new Student(12, 'jahanara');
const student2 = new Student(16, 'rahima');
console.log(student1.name, student2.name);