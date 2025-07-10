const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

new_heros = marvel_heros.concat(dc_heros)
// console.log(marvel_heros);
// console.log(new_heros);


// console.log(marvel_heros+dc_heros);

// console.log([...marvel_heros , ...dc_heros])

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// console.log(another_array.flat(Infinity))

// console.log(Array.isArray("ASH"));
// console.log(Array.from("ASH"));


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));