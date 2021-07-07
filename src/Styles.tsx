import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 25%;
  margin: auto;
  justify-content: space-between;
  align-items: flex-end;
  padding: 50px 0;

  .MuiInputBase-input {
    width: 325px;
  }
`;

export const Content = styled.div<{
  isLoading: boolean;
}>`
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: ${(props) => props.isLoading ? 'center' : 'space-between'};
  align-items: center;
  flex-wrap: wrap;
`;

export const CardContainer = styled.div`
  width: 30%;
  max-height: 218px;
  margin-bottom: 100px;
`;
