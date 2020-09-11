const compose = (...funcs) => (arg) => funcs.reduceRight((acc, curr) => curr(acc), arg);

const pizzas = [
  { diametr: 25, ingredients: [] },
  { diametr: 25, ingredients: [] },
  { diametr: 30, ingredients: [] },
  { diametr: 30, ingredients: [] },
  { diametr: 35, ingredients: [] },
  { diametr: 35, ingredients: [] },
];

const arrReducer = (acc, curr) => {
  acc.push(curr);
  return acc;
};

const getMushroomsReducer = (reducer) => (acc, curr) => {
  return reducer(acc, { ...curr, ingredients: [...curr.ingredients, 'mushrooms'] });
};
const getSizeReducer = (reducer) => (acc, curr) => {
  return curr.diametr >= 30 ? reducer(acc, curr) : acc;
};

const mushroomsTranceducer = getMushroomsReducer;
const sizeTranceducer = getSizeReducer;

const composed = compose(sizeTranceducer, mushroomsTranceducer);
const composedReducer = composed(arrReducer);

const result = pizzas.reduce(composedReducer, []);

console.log(result);
