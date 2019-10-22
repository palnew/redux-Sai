const blessing = { blessing: "God Bless you" };

export function reducer1(state = blessing, action) {
  switch (action.type) {
    case "Number1":
      return { blessing: action.payload };
    default:
      return state;
  }
}

export function reducer2() {
  return "Om Sai Ram";
}

export function reducer3(state = { winners: [] }, action) {
  console.log("I'm" + action.payload);
  switch (action.type) {
    case "Number3":
      return { winners: action.payload };
    //console.log("I'm inside number3");
    default:
      return state;
  }
}
