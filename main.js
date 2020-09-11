const pizzas = [
  { diametr: 25, ingredients: [] },
  { diametr: 25, ingredients: [] },
  { diametr: 30, ingredients: [] },
  { diametr: 30, ingredients: [] },
  { diametr: 35, ingredients: [] },
  { diametr: 35, ingredients: [] },
];

const result = pizzas
  .reduce((acc, curr) => {
    acc.push({ ...curr, ingredients: [...curr.ingredients, 'mushrooms'] });
    return acc;
  }, [])
  .reduce((acc, curr) => {
    if (curr.diametr >= 30) {
      acc.push(curr);
    }
    return acc;
  }, []);

console.log(result);
