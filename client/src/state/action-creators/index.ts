/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable object-curly-newline */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { Dispatch } from 'redux';
import axios from 'axios';
import { ActionType } from '../action-types';
import {
  // UpdateCellAction,
  // DeleteCellAction,
  // MoveCellAction,
  InsertCellAfterAction,
  Direction,
  Action,
} from '../actions';
import { Cell, CellTypes } from '../cell';
import { RootState } from '../reducers';

// export const updateCell = (id: string, content: string): UpdateCellAction => ({
//   type: ActionType.UPDATE_CELL,
//   payload: {
//     id,
//     content,
//   },
// });

// export const deleteCell = (id: string): DeleteCellAction => ({
//   type: ActionType.DELETE_CELL,
//   payload: id,
// });

// export const moveCell = (id: string, direction: Direction): MoveCellAction => ({
//   type: ActionType.MOVE_CELL,
//   payload: {
//     id,
//     direction,
//   },
// });

export const insertCellAfter = (id: string | null, cellType: CellTypes): InsertCellAfterAction => ({
  type: ActionType.INSERT_CELL_AFTER,
  payload: {
    id,
    type: cellType,
  },
});

// // return async ponieważ korzystamy z funkcji dispatch() w celu wywolania odpowiednich metod
// export const fetchCells = () => async (dispatch: Dispatch<Action>) => {
//   dispatch({
//     type: ActionType.FETCH_CELLS,
//   });

//   try {
//     const { data }: { data: Cell[] } = await axios.get('/cells');
//     dispatch({
//       type: ActionType.FETCH_CELLS_COMPLETE,
//       payload: data,
//     });
//   } catch (err) {
//     dispatch({
//       type: ActionType.FETCH_CELLS_ERROR,
//       payload: err.message,
//     });
//   }
// };

// // getState return current state from redux func()
// export const saveCells = () => async (dispatch: Dispatch<Action>, getState: () => RootState) => {
//   const {
//     cells: { data, order },
//   } = getState();

//   const cells = order.map((id) => data[id]);

//   try {
//     await axios.post('/cells', {
//       cells,
//     });
//   } catch (err) {
//     dispatch({
//       type: ActionType.SAVE_CELLS_ERROR,
//       payload: err.message,
//     });
//   }
// };
