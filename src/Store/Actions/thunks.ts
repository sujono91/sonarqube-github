import { Dispatch } from 'redux';
import actions from 'Store/Actions';
import Axios from 'axios';
import { RepositorySearch } from 'Models';
import ENDPOINT from 'Constants/Endpoint';
import { toCamelCase } from 'Utils/CaseConvert';

export const searchGithubRepositories = (keyword: string, page: number) => async (
  dispatch: Dispatch
) => {
  dispatch(actions.fetchRepositories.request());

  try {
    const response = await Axios.get(`${ENDPOINT.GITHUB_SEARCH}?q=${keyword}&page=${page}`);

    dispatch(actions.fetchRepositories.success(toCamelCase(response.data) as RepositorySearch));

  } catch {
    dispatch(actions.fetchRepositories.failure('Failed to search for github repositories'));
  }
};
