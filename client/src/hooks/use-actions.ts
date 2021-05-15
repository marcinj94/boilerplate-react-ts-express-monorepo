import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';
// import { updateCell } from '../state/action-creators';

export const useActions = () => {
  const dispatch = useDispatch();
  return useMemo(() => bindActionCreators(actionCreators, dispatch), [dispatch]);
};

// how to use in component
// const { updateCell } = useActions();
// updateCell('args');
