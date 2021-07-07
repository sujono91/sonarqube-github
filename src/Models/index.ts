export interface RepositoryItem {
  id: number;
  name: string;
  description: string;
  cloneUrl: string;
  stargazersCount: number;
}

export interface RepositorySearch {
  totalCount: number;
  items: RepositoryItem[];
}
