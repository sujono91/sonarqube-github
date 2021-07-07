import { ActionType, getType } from 'typesafe-actions';
import * as actions from 'Store/Actions/actions';
import { RepositoryItem } from 'Models';

type Action = ActionType<typeof actions>;

interface State {
  items: RepositoryItem[];
  totalCount: number;
  error: string | null;
  isLoading: boolean;
}

export const defaultState: State = {
  items: [],
  totalCount: 0,
  error: null,
  isLoading: false
};

const reducer = (state = defaultState, action: Action): State => {
  switch (action.type) {
    case getType(actions.fetchRepositories.request): {
      return {
        ...state,
        isLoading: true
      };
    }

    case getType(actions.fetchRepositories.success): {
      const { items, totalCount } = action.payload;

      return {
        ...state,
        items,
        totalCount,
        isLoading: false
      };
    }

    case getType(actions.fetchRepositories.failure): {
      return {
        ...state,
        items: [],
        totalCount: 0,
        isLoading: false
      };
    }

    default:
      return state;
  }
};

export default reducer;
