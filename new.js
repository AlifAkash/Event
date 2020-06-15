class person{
    constructor(fristName,lastName,salary){
        this.fristName=fristName;
        this.lastName=lastName;
        this.salary=salary;
    }
}

const heroPerson=new person('Kuddus','Boyati', 25000);
console.log(heroPerson);
const friendlyPerson= new person('Alif', 'Ahmed', 32000);
console.log(friendlyPerson);