// import redux
const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

// Action - Buying cake and Ice-Cream
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
// Cakes and Ice-Creams are kept in two different places
const initialCakeState = {
  noOfCakes: 10,
};
const initialIceCreamState = {
  noOfIceCreams: 20,
};

// Reducer - Shopkeeper
// Cake reducer - The shopkeeper who sells only cake
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        noOfCakes: state.noOfCakes - 1,
      };

    default:
      return state;
  }
};

// Ice-Cream reducer - The shopkeeper who sells only Ice-Cream
const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        noOfIceCreams: state.noOfIceCreams - 1,
      };

    default:
      return state;
  }
};

// Root Reducer - The store owner who combined both shopkeepers to make the store
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});
const store = createStore(rootReducer);
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

// to access cake: state.cake.noOfCake
// to access iceCream: state.cake.noOfIceCream
