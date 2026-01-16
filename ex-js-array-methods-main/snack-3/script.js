const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1

const numeriIncrementati = numbers.map(numero => numero + 1);
console.log(numeriIncrementati);
// Risultato: [3, 9, 5, 8, 3, 88]


const names = ['Luca', 'Marta', 'Giovanni', 'Elena'];
const namesMaiusc = names.map (name => name.toUpperCase());
console.log(namesMaiusc);


const students = [
  { name: 'Luca', grade: 6 },
  { name: 'Marta', grade: 8 },
  { name: 'Giovanni', grade: 5 },
  { name: 'Elena', grade: 9 }
];

const studentUpdate = students.map(student => ({
    name: student.name.toUpperCase(),
    grade: student.grade + 1 
}));
console.log(studentUpdate);


const products = [
  { name: 'Laptop', price: 1200 },
  { name: 'Mouse', price: 25 },
  { name: 'Keyboard', price: 75 },
  { name: 'Monitor', price: 300 }
];

const productsUdate = products.map (product => ({
    name: product.name.toUpperCase(),
    price: product.price * 1.10.toFixed()
}));

console.log(productsUdate);


const people = [
  { name: 'Alice', age: 23 },
  { name: 'Bob', age: 17 },
  { name: 'Charlie', age: 30 },
  { name: 'Diana', age: 15 }
];

const peopleUpdate = people.map(person => ({
    name: person.name.toUpperCase(),
    age: person.age + 1,

}))

