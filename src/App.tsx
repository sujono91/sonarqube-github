import React, { FC, memo, useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { Container } from 'Styles';
import { useDispatch } from 'react-redux';
import { searchGithubRepositories } from 'Store/Actions/thunks';

const App: FC = () => {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState<string>();

  const submitForm = () => {
    if (keyword) {
      dispatch(searchGithubRepositories(keyword));
    }
  };

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>SonarQube Github Search Engine</h1>
      <Container>
        <TextField label="Repository Name" value={keyword} onChange={(event) => setKeyword(event.target.value)} />
        <Button variant="contained" color="primary" onClick={submitForm}>
          Search
        </Button>
      </Container>
    </>
  );
};

export default memo(App);
