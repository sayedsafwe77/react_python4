// let employers = [
//   { id: 1, name: "yousef", salary: 4000 },
//   { id: 2, name: "ahmed", salary: 6000 },
//   { id: 3, name: "mohamed", salary: 5000 },
//   { id: 4, name: "amr", salary: 7000 },
//   { id: 5, name: "eslam", salary: 5500 },
// ];
// let total = employers.reduce((num1, num2) => {
//   if (num1 instanceof Object) {
//     return num1.salary + num2.salary;
//   } else {
//     return num1 + num2.salary;
//   }
// });
// console.log(total);
// let filtered_employers = employers.filter((employer) => employer.salary > 5000);
// employers = employers.map((employer) => {
//   return {
//     id: employer.id,
//     name: employer.name.toUpperCase(),
//   };
// });
// let names = ["mohamed", "ahmed"];
// function setNames(x) {
//   x[0] = 3;
// }
// setNames([...names]);
// console.log(names);
// let ob = {
//   id: 1,
//   name: "mohamed",
// };

// let { name } = ob;
// console.log(name);

// class Phone {
//   setColor(color) {
//     this.color = color;
//   }
// }

// // blueprint
// class Mobil extends Phone {
//   constructor(keybad, screen, mic) {
//     super();
//     this.keybad = keybad;
//     this.screen = screen;
//     this.mic = mic;
//   }
//   setScreen(screen) {
//     this.screen = screen;
//   }
// }
// let ob1 = new Mobil("s", "white", "samsung");
// console.log(ob1 instanceof Phone);
// let ob2 = new Mobil("a", "black", "samsung");
// ob1.setColor("blue");

// console.log(ob1.color);

// async sync
// fetch()
// let user = {
//   name: "sayedsafwet",
//   email: "sayed5@gmail.com",
//   password: "12345678",
// };
// api
// fetch("http://localhost:9000/user/register", {
//   method: "post",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(user),
// })
//   .then((res) => res.json())
//   .then((data) => console.log(data));

let ob1 = {
  firstname: "sayed",
  lastname: "azzam",
  fullname: function () {
    console.log(this);
  },
};

let ob2 = {
  firstname: "mohamed",
  lastname: "amr",
};

let fname = ob1.fullname.bind(ob2);
fname();
