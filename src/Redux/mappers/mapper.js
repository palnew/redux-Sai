import {
  combineReducers //bindActionCreators
} from "redux";
import { reducer1, reducer2, reducer3 } from "../reducers/reducer";
import { connect } from "react-redux";
import Sai1 from "../../Sai";
import Sai2 from "../../Winnersearch";
import { greeterFunc, AsyncWinners } from "../actions/action";

export const state = combineReducers({
  info1: reducer1,
  info2: reducer2,
  info3: reducer3
});

function mapState2Props(state) {
  return {
    greeting: state.info1.blessing,
    blessing: state.info2
  };
}

function mapAction2Props(dispatch) {
  //return bindActionCreators({ greeter: greeterFunc }, dispatch);
  return {
    greeter: () => {
      dispatch(greeterFunc());
    }
  };
}

function mapState2Props1(state) {
  return {
    winners: state.info3.winners
  };
}

function mapAction2Props1(dispatch) {
  //return bindActionCreators({ greeter: greeterFunc }, dispatch);
  return {
    getWinners: pattern => {
      dispatch(AsyncWinners(pattern));
    }
  };
}

export const Sai = connect(
  mapState2Props,
  mapAction2Props
)(Sai1);

export const Sai3 = connect(
  mapState2Props1,
  mapAction2Props1
)(Sai2);
