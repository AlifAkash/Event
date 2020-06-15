const normalPerson={
    firstName: "Rahim",
    lastName: "karim",
    salary: 15000,
    getFullName: function(){
        console.log(this.firstName,this.lastName);
    },
    chargeBill: function(amount,tips,tax){
        //console.log(this);
        this.salary=this.salary-amount-tips-tax;
        return this.salary;
    }
    
}

// normalPerson.chargeBill(1500);
// console.log(normalPerson.salary);


const heroPerson={
    firstName:"Hero",
    lastName: "Balam",
    salary:25000
}

const friendlyPerson={
    firstName:"Friend",
    lastName: "Golam",
    salary:20000
}

// const heroChargeBill= normalPerson.chargeBill.bind(heroPerson);
// heroChargeBill(2000);
// heroChargeBill(3000);
// console.log(heroPerson.salary);

// const friendChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
// friendChargeBill(2500);
// console.log(friendlyPerson.salary);

// normalPerson.chargeBill.call(heroPerson,2500,100,10);
// console.log(heroPerson.salary);

// normalPerson.chargeBill.call(friendlyPerson,2000,80,10);
// console.log(friendlyPerson.salary);

normalPerson.chargeBill.apply(heroPerson,[2500,100,10]);  // In apply arguments should be passed as an array
console.log(heroPerson.salary);