// 7.1 (2p) Skapa ett nytt objekt state2
// Det nya objektet ska updatera value till 20 
// Använd spread operatorn ...

const state = {
  list: [1, 2, 3],
  value: 10,
};

// Din kod här: 
const state2 = { ...state };
state2.value = 20;


// 7.2 (2p) Skriv klart funktionen updateState
// som ska uppdatera list med newList på objektet state.
// Använd spread operatorn ...

function updateState(state, newList) {
  //Din kod här:
  const newState = state;
  newState.list = [...newList];
  return newState;

}


// Test
console.log(state2); // Ska logga: { list:[1,2,3], value: 20 }
console.log(updateState(state2, [4, 5, 6])); // Ska logga: { list:[4,5,6], value: 20 }

