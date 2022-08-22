

// console.log("Hello World");

// const obj = {
//     name: "John",
//   nameFunction() {
//     console.log(this.name);
// // let that = this;
// //
// //     function insideName(){
// //         console.log(this);
// //     }
// //     insideName();
//       const insideName = () => {
//         console.log(this);
//     }
//      insideName();
//
// }
//
// }
// obj.nameFunction();
// obj.nameFunction.call({name: "Pete"});

//
// const anotherObj = {
//     name: "DaBaptiste",
// }
// anotherObj.nameFunction = obj.nameFunction;
// anotherObj.nameFunction()

const person = {
    firstName: "Paulino",
    lastName: "Da Silva",
    gender: "female",
    age: 27,

    fullName() {
        let self = this;
         function getTitle () {
           return self.gender === 'female' ? 'Mrs. ' : 'Mr.';
        }
        return `${getTitle()} ${this.firstName}  ${this.lastName} is ${this.age}`
            ;
    },
    isMinor() {
        return this.age < 18;
    },
};

console.log(person.fullName());