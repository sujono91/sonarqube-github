import React, { FC, memo, useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { CardContainer, Container, Content } from 'Styles';
import { useDispatch, useSelector } from 'react-redux';
import { searchGithubRepositories } from 'Store/Actions/thunks';
import * as selectors from 'Store/Selectors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons/faSpinner';
import Card from 'Components/Card';

const App: FC = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState<number>(1);
  const [keyword, setKeyword] = useState<string>();
  const isLoading = useSelector(selectors.isLoading);
  const items = useSelector(selectors.repositories);

  const submitForm = (pageNumber: number) => {
    if (keyword) {
      dispatch(searchGithubRepositories(keyword, pageNumber));
    }
  };

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>SonarQube Github Search Engine</h1>
      <Container>
        <TextField label="Repository Name" value={keyword} onChange={(event) => setKeyword(event.target.value)} />
        <Button variant="contained" color="primary" onClick={() => submitForm(page)}>
          Search
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            setPage(page + 1);
            submitForm(page + 1);
          }}>
          Next
          </Button>
      </Container>
      <h3>Page: {page}</h3>
      <Content isLoading={isLoading}>
        {isLoading && <FontAwesomeIcon icon={faSpinner} spin size="10x"/>}
        {!isLoading && items.map((item) => (
          <CardContainer key={item.id}>
            <Card onClick={() => window.open(item.cloneUrl, '_blank')}>
              <h1>{item.name}</h1>
              <h3>{item.description}</h3>
              <code>Stars: ${item.stargazersCount}</code>
            </Card>
          </CardContainer>
        ))}
      </Content>
    </>
  );
};

export default memo(App);
