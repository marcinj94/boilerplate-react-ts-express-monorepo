/* eslint-disable react/button-has-type */
/* eslint-disable react/react-in-jsx-scope */
import { useActions } from '../hooks/use-actions';

const StateTestUseActions = () => {
  const { insertCellAfter } = useActions();

  const handleAction = () => {
    insertCellAfter(null, 'code');
  };

  return <button onClick={handleAction}>Test redux - add something to data!</button>;
};

export default StateTestUseActions;
