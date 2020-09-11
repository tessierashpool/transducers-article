const pizzas = [
  { diametr: 25, ingridients: [] },
  { diametr: 25, ingridients: [] },
  { diametr: 30, ingridients: [] },
  { diametr: 30, ingridients: [] },
  { diametr: 35, ingridients: [] },
  { diametr: 35, ingridients: [] },
];

const result = pizza
  .reduce((acc, curr) => {
    return acc.push({ ...curr, ingredients: [...curr.ingredients, 'mushrooms'] });
  }, [])
  .reduce((acc, curr) => {
    return curr.radius > 30 ? acc.push(curr) : acc;
  }, []);

console.log(result);
