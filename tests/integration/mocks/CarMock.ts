export const carInput = {
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

export const carOutput = {
  id: '64138a0ae4bb63b7dadbbfa2',
  ...carInput,
};

export const carsOutput = [
  carOutput,
  {
    id: '6413887383c81be1106865be',
    model: 'Marea',
    year: 2005,
    color: 'Red',
    status: true,
    buyValue: 19.990,
    doorsQty: 4,
    seatsQty: 5,
  },
];
