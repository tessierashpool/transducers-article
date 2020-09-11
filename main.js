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

const mushroomsTranceducer  =  getMushroomsReducer;
const sizeTranceducer  =  getSizeReducer;

const mushroomsReducer = mushroomsTranceducer(arrReducer);
const sizeReducer = sizeTranceducer(arrReducer);

const result = pizzas.reduce(mushroomsReducer, []).reduce(sizeReducer, []);

console.log(result);
