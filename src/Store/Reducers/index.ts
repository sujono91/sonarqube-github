import { combineReducers } from 'redux';
import { ActionType } from 'typesafe-actions';
import * as actions from 'Store/Actions/actions';
import repositoryReducer from './repository.reducer';

type Action = ActionType<typeof actions>;

const mainReducer = combineReducers({
  repository: repositoryReducer
});

const rootReducer = (state: ReturnType<typeof mainReducer> | undefined, action: Action) => {
  return mainReducer(state, action);
};

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
