var initialState = [
    {
        id: 1,
        name: 'IPhone 8', 
        price: 799,
        status: true
    },
    {
        id: 2,
        name: 'IPhone 11',
        price: 999,
        status: true
    },
    {
        id: 3,
        name: 'IPhone XS',
        price: 999,
        status: false
    },
];

const products = (state = initialState, action) => {
  switch (action.type) {
    default:
      return [...state];
  }
}

export default products;