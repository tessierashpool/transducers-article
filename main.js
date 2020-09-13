const { Benchmark } = require('benchmark');

// Helpers
const compose = (...funcs) => (arg) => funcs.reduceRight((acc, curr) => curr(acc), arg);
const generateRandomNumberBetween = (min, max) => {
  return Math.floor(Math.random() * max) + min;
};
const pizzaBaseGenerator = (count) => {
  const pizzas = [];
  for (let i = 0; i < count; i++) {
    pizzas.push({
      diametr: 20 + 5 * generateRandomNumberBetween(1, 3),
      ingredients: [],
    });
  }

  return pizzas;
};

// Reducers
const arrReducer = (acc, curr) => {
  acc.push(curr);
  return acc;
};

// Transformers, Predicat
const addMushrooms = (pizza) => ({ ...pizza, ingredients: [...pizza.ingredients, 'mushrooms'] });
const addTomatoes = (pizza) => ({ ...pizza, ingredients: [...pizza.ingredients, 'tomatoes'] });
const addOlives = (pizza) => ({ ...pizza, ingredients: [...pizza.ingredients, 'olives'] });
const addCheese = (pizza) => ({ ...pizza, ingredients: [...pizza.ingredients, 'cheese'] });

const filterSmallPizza = (pizza) => pizza.diametr >= 30;
const filterMiddlePizza = (pizza) => pizza.diametr >= 35;

// Transducers generators
const getTransducerMap = (transform) => (reducer) => (acc, curr) => {
  return reducer(acc, transform(curr));
};

const getTransducerFilter = (predicat) => (reducer) => (acc, curr) => {
  return predicat(curr) ? reducer(acc, curr) : acc;
};

// Transducers
const transduserMushrooms = getTransducerMap(addMushrooms);
const transduserTomatoes = getTransducerMap(addTomatoes);
const transduserOlives = getTransducerMap(addOlives);
const transduserCheese = getTransducerMap(addCheese);

const transduserSmallPizza = getTransducerFilter(filterSmallPizza);
const transduserMiddlePizza = getTransducerFilter(filterMiddlePizza);

// Benchmark init
const pizzas = pizzaBaseGenerator(100000);
const composedTransducer = compose(
  transduserMushrooms,
  transduserTomatoes,
  transduserOlives,
  transduserCheese,
  transduserSmallPizza,
  transduserMiddlePizza,
);

const composedReducer = composedTransducer(arrReducer);

// Benchmark
const suite = new Benchmark.Suite();
let pizzaArrayCommon;
let pizzaArrayTransducers;

suite.add('Common', function () {
  pizzaArrayCommon = pizzas
    .map(addMushrooms)
    .map(addTomatoes)
    .map(addOlives)
    .map(addCheese)
    .filter(filterSmallPizza)
    .filter(filterMiddlePizza)
   
});

suite.add('Transducers', function () {
  pizzaArrayTransducers = pizzas.reduce(composedReducer, []);
});

suite.on('cycle', function (event) {
  console.log(String(event.target));
});

suite.on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
  console.log('pizzaArrayCommon length:', pizzaArrayCommon.length);
  console.log('pizzaArrayTransducers length:', pizzaArrayTransducers.length);
});
suite.run();
