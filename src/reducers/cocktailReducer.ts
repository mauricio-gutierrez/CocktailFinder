import types from '../actions/types';
import {Cocktail} from '../helpers/cocktails';

export interface CocktailReducerState {
  cocktails: Array<Cocktail>;
  searching: boolean;
}

const INITIAL_STATE: CocktailReducerState = {
  cocktails: [],
  searching: false,
};

export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case types.GET_COCKTAILS: {
      return {
        ...state,
        cocktails: action.payload,
        searching: false,
      };
    }

    case types.SEARCHING_COCKTAILS: {
      return {...state, searching: true};
    }

    case types.CLEAN_COCKTAILS: {
      return {...state, cocktails: []};
    }

    default:
      return state;
  }
};
