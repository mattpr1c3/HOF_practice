let nums = [1, 2, 3, 4, 5];
let arr1 = [20, 40, 60, 80, 3];

const pokemons = [
  {
    name: "Pikachu",
    type: "lightning",
    damage: 20,
  },
  {
    name: "Machamp",
    type: "fighting",
    damage: 60,
  },
  {
    name: "Mew",
    type: "psychic",
    damage: 30,
  },
  {
    name: "Charizard",
    type: "fire",
    damage: 100,
  },
];

pokemons.forEach((pokemon) => {
  console.log(pokemon.name, pokemon.damage);
});

let damageAsc = pokemons.sort((poke1, poke2) => {
    return poke1.damage - poke2.damage
});
console.log(damageAsc);

const onlyNameAndType = pokemons.map((pokemon) => {
  return { name: pokemon.name, type: pokemon.type };
});
console.log(onlyNameAndType);

nums.reduce((sum, num) => {
  return sum + num;
}, 0);

console.log(
  arr1.reduce((sum, num) => {
    if (num % 10 !== 0) {
      console.log(num);
    } else {
      console.log(num);
      sum += num;
    }
    return sum;
  }, 0)
);

let sum = 0;

arr1.forEach((num) => {
  if (num % 10 !== 0) {
    console.log("in the if" + num);
  } else {
    // console.log(num);
    sum += num;
  }
  console.log(sum);
  return sum;
});

// arr1.reduce(function (previousValue, currentValue, currentIndex, array) {
//   previousValue += currentValue;
// }, initialValue);

// arr1.reduce((total, currentValue, currentIndex, array) => {
//   total += currentValue;
// }, initialValue);
