import reducer, { defaultState } from '../repository.reducer';
import actions from '../../Actions';
import { MockRepositorySearch } from 'MockData';

describe('Employee Reducer Spec', () => {
  it('should return default state', () => {
    expect(reducer(undefined, { type: '' } as any)).toEqual(defaultState);
  });

  it('should handle fetch request', () => {
    const state = { ...defaultState };

    expect(reducer(state, actions.fetchRepositories.request())).toEqual({
      ...state,
      isLoading: true,
    });
  });

  it('should handle fail request', () => {
    const state = { ...defaultState };

    expect(reducer(state, actions.fetchRepositories.failure('Error'))).toEqual({
      ...state,
      isLoading: false,
      error: 'Error'
    });
  });

  it('should fetch repositories successfully', () => {
    const state = { ...defaultState };

    expect(reducer(state, actions.fetchRepositories.success(MockRepositorySearch))).toEqual({
      ...state,
      error: null,
      isLoading: false,
      items: MockRepositorySearch.items,
      totalCount: 3
    });
  });
});
