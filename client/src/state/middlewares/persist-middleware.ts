/* eslint-disable no-unused-vars */
// nazwa zamiast save cells !
import { Dispatch } from 'redux';
import { Action } from '../actions';
import { ActionType } from '../action-types';
// import { saveCells } from '../action-creators';
import { RootState } from '../reducers';

// export const persistMiddleware = (store) => {
//     return (next) => {
//         return (action) => {

//         }
//     }
// }

export const persistMiddleware = ({
  dispatch,
  getState,
}: {
  dispatch: Dispatch<Action>;
  getState: () => RootState;
}) => {
  let timer: any;
  return (next: (action: Action) => void) => (action: Action) => {
    next(action); // no matter what put next action!

    // do something specific...
    // https://www.nafrontendzie.pl/co-to-jest-redux-middleware

    // if (
    //   [
    //     ActionType.MOVE_CELL,
    //     ActionType.UPDATE_CELL,
    //     ActionType.INSERT_CELL_AFTER,
    //     ActionType.DELETE_CELL,
    //   ].includes(action.type)
    // ) {
    //   if (timer) {
    //     clearTimeout(timer);
    //   }
    //   timer = setTimeout(() => {
    //     saveCells()(dispatch, getState);
    //   }, 250);
    // }
  };
};
