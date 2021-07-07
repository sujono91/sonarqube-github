
import { RootState } from 'Store/Reducers';

export const isLoading = (state: RootState) => state.repository.isLoading;

export const repositories = (state: RootState) => state.repository.items;

export const error = (state: RootState) => state.repository.error;
