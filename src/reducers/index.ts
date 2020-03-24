import {combineReducers} from 'redux';
import cocktailReducer, {CocktailReducerState} from './cocktailReducer';

interface State {
  cocktailReducer: CocktailReducerState;
}
const State = combineReducers({
  cocktailReducer,
});

export default State;
