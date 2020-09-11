const pizzas = [
  { diametr: 25, ingredients: [] },
  { diametr: 25, ingredients: [] },
  { diametr: 30, ingredients: [] },
  { diametr: 30, ingredients: [] },
  { diametr: 35, ingredients: [] },
  { diametr: 35, ingredients: [] },
];

const mushroomsReducer = (acc, curr) => {
  acc.push({ ...curr, ingredients: [...curr.ingredients, 'mushrooms'] });
  return acc;
};

const sizeReducer = (acc, curr) => {
  if (curr.diametr >= 30) {
    acc.push(curr);
  }
  return acc;
};

const result = pizzas.reduce(mushroomsReducer, []).reduce(sizeReducer, []);

console.log(result);
