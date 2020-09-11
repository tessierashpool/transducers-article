const pizzas = [
  { diametr: 25, ingridients: [] },
  { diametr: 25, ingridients: [] },
  { diametr: 30, ingridients: [] },
  { diametr: 30, ingridients: [] },
  { diametr: 35, ingridients: [] },
  { diametr: 35, ingridients: [] },
];

const arrReducer = (acc, curr) => {
  return acc.push(curr);
};

const getMushroomsReducer = (reducer) => (acc, curr) => {
  return reducer(acc, { ...curr, ingredients: [...curr.ingredients, 'mushrooms'] });
};
const getSizeReducer = (reducer) => (acc, curr) => {
  return curr.radius > 30 ? reducer(acc, curr) : acc;
};

const mushroomsReducer = getMushroomsReducer(arrReducer);
const sizeReducer = getSizeReducer(arrReducer);

const result = pizzas.reduce(mushroomsReducer, []).reduce(sizeReducer, []);

console.log(result);
