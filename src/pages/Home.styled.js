import styled from 'styled-components';

export const HomeContainer = styled.div`
  margin: 0 auto;
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: center;
  .formbox {
    display: flex;
    gap: 20px;
    .searchbox {
      width: 400px;
      padding: 5px 0 5px 15px;
      border-radius: 15px;
    }
    .enterbtn {
      border: solid 1px;
      border-radius: 5px;
      background-color: white;
      cursor: pointer;
    }
  }
  .content {
    width: 700px;
    display: flex;
    justify-content: flex-start;
    gap: 15px;
    img {
      width: 200px;
    }
  }
`;
