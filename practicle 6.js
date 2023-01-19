
class person{
    constructor(name,age)
    {
        this.name=name;
        this.age=age;
    }
    showDetails(){
        console.log(`name is ${this.name} and age is ${this.age}`);
    }
}
class Student extends person{
    constructor(name, age, id, semester){
        super(name,age);
        this.id=id;
        this.semester=semester;
    }
    
}
const studentList = [];

studentList.push(new Student("Nasir",18,"21IT146",4));
studentList.push(new Student("Anish",19,"21CE071",5));
studentList.push(new Student("Nishar",20,"21CE057",6));
studentList.push(new Student("Ikram",21,"21CS008",7));
studentList.push(new Student("DX",22,"21CE076",8));

const displayAt = document.getElementById("idshowData");
const ulele = document.createElement("u1");
for(obj of studentList){
    const lielement = document.createElement("li");
    lielement.textContent = `Name is ${obj.name} and id ${obj.id}`;
    ulele.appendChild(lielement);
}

displayAt.appendChild(ulele);
