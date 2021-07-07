import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { getType } from 'typesafe-actions';
import actions from '../actions';
import { searchGithubRepositories } from '../thunks';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Thunk Spec', () => {
  let store: any;

  beforeEach(() => {
    store = mockStore({});
  });

  it('should handle fetch repositories', async () => {
      const expectedActions = [
        {
          type: getType(actions.fetchRepositories.request)
        },
        {
          type: getType(actions.fetchRepositories.success)
        }
      ];

      await store.dispatch(searchGithubRepositories('test', 1));

      expect(store.getActions().map(({ type }: any) => ({ type }))).toEqual(expectedActions);
    });
});
