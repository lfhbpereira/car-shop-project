export const motorcycleInput = {
  model: 'Honda Cb 600f Hornet',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};

export const motorcycleOutput = {
  id: '6413cefb88e2476dab1876c8',
  ...motorcycleInput,
};

export const motorcyclesOutput = [
  motorcycleOutput,
  {
    id: '6413b3095c78cfc1256e9847',
    model: 'Honda Cbr 1000rr',
    year: 2011,
    color: 'Orange',
    status: true,
    buyValue: 59.990,
    category: 'Street',
    engineCapacity: 1000,
  },
];
