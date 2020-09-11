const pizzas = [
  { diametr: 25, ingridients: [] },
  { diametr: 25, ingridients: [] },
  { diametr: 30, ingridients: [] },
  { diametr: 30, ingridients: [] },
  { diametr: 35, ingridients: [] },
  { diametr: 35, ingridients: [] },
];

const result = pizzas
  .map((pizza) => ({ ...pizza, ingredients: [...pizza.ingredients, 'mushrooms'] }))
  .filter((pizza) => pizza.radius > 30)
  .map((pizza) => ({ ...pizza, ingredients: [...pizza.ingredients, 'tomatos'] }));
