// import redux
const redux = require("redux");
const createStore = redux.createStore;

// Single Reducer
// Where Cakes and Icecreams are kept in one place and One shopkeeper has to sell both products

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

// Action - selling cake
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "FIrst Redux Action",
  };
}
function buyIceCream() {
  return {
    type: BUY_ICECREAM,
  };
}

// initial state - No of cakes and icecreams in the store
// Cakes and Ice-Creams are kept in one place
const initialState = {
  noOfCakes: 10,
  noOfIceCreams: 20,
};

// Reducer - Shopkeeper
// One shopkeeper maintaining both products
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        noOfCakes: state.noOfCakes - 1,
      };

    case BUY_ICECREAM:
      return {
        ...state,
        noOfIceCreams: state.noOfIceCreams - 1,
      };

    default:
      return state;
  }
};

// creating store - Cake and Ice-Cream Store
const store = createStore(reducer);
console.log("Initial State: ", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("Updaed state: ", store.getState())
);
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();
