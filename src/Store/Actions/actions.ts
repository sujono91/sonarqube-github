import { createAsyncAction as asyncAction } from 'typesafe-actions';
import { RepositorySearch } from 'Models';

export const fetchRepositories = asyncAction(
  'repository/FETCH',
  'repository/FETCH_SUCCESS',
  'repository/FETCH_FAILED',
)<void, RepositorySearch, string>();

const actions = { fetchRepositories };

export default actions;
