console.log(`Задание 1`);
function createGreetingFunction(name) {
    return function() {
      console.log("Привет, " + name);
    };
  }
  
const greetJohn = createGreetingFunction("Лев");
greetJohn(); 


console.log(` `);
console.log(`Задание 2`);
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  Person.prototype.greet = function() {
    console.log("Привет, я " + this.name + " мне " + this.age + " лет.");
  };
  
const jane = new Person("Лев", 18);
jane.greet(); 

console.log(` `);
console.log(`Задание 3`);
function sumOfNumbers(n) {
    if (n === 1) {
      return 1;
    }
    return n + sumOfNumbers(n - 1);
  }
  

console.log(sumOfNumbers(5)); 

 console.log(` `);
 console.log(`Задание 4`);
function fetchJson(url, callback) {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("HTTP error: " + response.status);
        }
        return response.json();
      })
      .then((data) => {
        callback(data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }
  
fetchJson("https://jsonplaceholder.typicode.com/posts/1", (data) => {
    console.log(data);
});

console.log(` `);
console.log(`Задание 5`);
function greetPerson({ firstName, lastName, age }) {
    console.log(`Привет, ${firstName} ${lastName} тебе ${age} лет`);
  }
  
  const person = {
    firstName: "Лев",
    lastName: "Грошев",
    age: 18,
};
  
greetPerson(person);


console.log(` `);
console.log(`Задание 6`);
function mergeAndRemoveDuplicates(arr1, arr2) {
    const mergedArray = [...arr1, ...arr2];
    const uniqueArray = [...new Set(mergedArray)];
    return uniqueArray;
  }
  
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
  
console.log(mergeAndRemoveDuplicates(arr1, arr2));

console.log(` `);
console.log(`Задание 7`);
const addNumberIfNotExists = (arr, n) => arr.includes(n) ? null : arr.push(n);

let arr = [1, 2, 3];
const n = 4;

addNumberIfNotExists(arr, n);
console.log(arr); 

console.log(` `);
console.log(`Задание 8`);
const getYoungUsersAsString = (users) => {
    return users
      .filter((user) => user.age < 30) 
      .map((user) => user.name) 
      .reduce((acc, name, index, arr) => {
        if (index === arr.length - 1) {
          return acc + name;
        }
        return acc + name + ', ';
      }, ''); 
  };
  
const users = [
{ name: 'Женя', age: 61, email: 'jenya@gmail.com' },
{ name: 'Герман', age: 10, email: 'jane@gmail.com' },
{ name: 'Абрам', age: 22, email: 'Abram@gmail.com' },
{ name: 'Боб', age: 28, email: 'bob@gmail.com' },
];
  
console.log(getYoungUsersAsString(users));

console.log(` `);
console.log(`Задание 9`);
const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  
const url = 'https://jsonplaceholder.typicode.com/posts';
fetchData(url);
  

console.log(` `);
console.log(`Задание 10`);
function* randomInt(start, end) {
    while (true) {
      yield Math.floor(Math.random() * (end - start + 1)) + start;
    }
  }
  
const randomNumbers = randomInt(1, 10);
for (let i = 0; i < 10; i++) {
    console.log(randomNumbers.next().value);
}