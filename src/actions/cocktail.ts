import types from './types';

export const search = (search: string) => async (dispatch: Function) => {
  dispatch({
    type: types.SEARCHING_COCKTAILS,
  });

  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`,
  );
  const responseJson = await response.json();

  dispatch({
    type: types.GET_COCKTAILS,
    payload: responseJson.drinks,
  });
};

export const clean = () => async (dispatch: Function) => {
  dispatch({
    type: types.CLEAN_COCKTAILS,
  });
};
