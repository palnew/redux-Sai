import axios from "axios";
export function greeterFunc() {
  let msg = ["Shirdi", "Sai", "Baba", "Deva"];
  let info = msg[Math.floor(Math.random() * 4)];
  return {
    type: "Number1",
    payload: info
  };
}

export let winnerAction = winners => {
  return {
    type: "Number3",
    payload: winners
  };
};

// export let AsyncWinnerCall = pattern => {
//   return async dispatch => {
//     try {
//       let response = await axios.get(
//         "http://localhost:9999/winners/all/" + pattern
//       );
//       dispatch(winnerAction(response.data));
//     } catch (e) {
//       dispatch(winnerAction([]));
//     }
//   };
// };

export let AsyncWinners = pattern => {
  return dispatch => {
    axios
      .get("http://localhost:5432/winners/all/" + pattern)
      .then(res => {
        const winners = res.data;
        dispatch(winnerAction(winners));
        console.log(
          "Sai,i'm inside this function" + res.data + "hullo" + pattern + "ji"
        );
      })
      .catch(e => {
        dispatch(winnerAction([]));
        console.log("Sai,i'm inside that function");
      });
  };
};
