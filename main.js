const pizzas = [
  { diametr: 25, ingredients: [] },
  { diametr: 25, ingredients: [] },
  { diametr: 30, ingredients: [] },
  { diametr: 30, ingredients: [] },
  { diametr: 35, ingredients: [] },
  { diametr: 35, ingredients: [] },
];

const result = pizzas
  .map((pizza) => ({ ...pizza, ingredients: [...pizza.ingredients, 'mushrooms'] }))
  .filter((pizza) => pizza.diametr >= 30)
  .map((pizza) => ({ ...pizza, ingredients: [...pizza.ingredients, 'tomatos'] }));

console.log(result);
