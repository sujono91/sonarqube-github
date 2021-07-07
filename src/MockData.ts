import { RepositorySearch } from "Models";

export const MockRepositorySearch: RepositorySearch = {
  totalCount: 3,
  items: [{
    id: 1,
    name: 'test',
    description: 'test',
    cloneUrl: 'testurl',
    stargazersCount: 3
  }, {
    id: 2,
    name: 'test 2',
    description: 'test',
    cloneUrl: 'testurl',
    stargazersCount: 3
  }, {
    id: 3,
    name: 'test 3',
    description: 'test',
    cloneUrl: 'testurl',
    stargazersCount: 3
  }]
};
