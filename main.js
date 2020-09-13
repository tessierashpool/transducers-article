// Helpers
const compose = (...funcs) => (arg) => funcs.reduceRight((acc, curr) => curr(acc), arg);

// Base Array
const pizzas = [
  { diametr: 25, ingredients: [] },
  { diametr: 25, ingredients: [] },
  { diametr: 30, ingredients: [] },
  { diametr: 30, ingredients: [] },
  { diametr: 35, ingredients: [] },
  { diametr: 35, ingredients: [] },
];

// Reducers
const arrReducer = (acc, curr) => {
  acc.push(curr);
  return acc;
};

// Transformers, Predicat
const addMushrooms = (pizza) => ({ ...pizza, ingredients: [...pizza.ingredients, 'mushrooms'] });
const filterSmallPizza = (pizza) => pizza.diametr >= 30;

// Transducers generators
const getTransducerMap = (transform) => (reducer) => (acc, curr) => {
  return reducer(acc, transform(curr));
};

const getTransducerFilter = (predicat) => (reducer) => (acc, curr) => {
  return predicat(curr) ? reducer(acc, curr) : acc;
};

// Transducers
const mushroomsTransducer = getTransducerMap(addMushrooms);
const sizeTransducer = getTransducerFilter(filterSmallPizza);

// Result
const composed = compose(sizeTransducer, mushroomsTransducer);
const composedReducer = composed(arrReducer);

const result = pizzas.reduce(composedReducer, []);

console.log(result);
