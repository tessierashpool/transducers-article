const pizzas = [
  { diametr: 25, ingridients: [] },
  { diametr: 25, ingridients: [] },
  { diametr: 30, ingridients: [] },
  { diametr: 30, ingridients: [] },
  { diametr: 35, ingridients: [] },
  { diametr: 35, ingridients: [] },
];

const mushroomsReducer = (acc, curr) => {
  return acc.push({ ...curr, ingredients: [...curr.ingredients, 'mushrooms'] });
};
const sizeReducer = (acc, curr) => {
  return curr.radius > 30 ? acc.push(curr) : acc;
};

const result = pizza.reduce(mushroomsReducer, []).reduce(sizeReducer, []);

console.log(result);
