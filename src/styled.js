import styled from 'styled-components/macro';

export const StyledContainer = styled.div`
  background-color: #4b969a;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledHeader = styled.header`
  font-size: calc(16px + 2vmin);
  color: #fff;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const StyledInput = styled.input`
  box-sizing: border-box;
  width: 280px;
  height: 60px;
  padding: 12px;
  margin: 10px;
  border: none;
  font-weight: lighter;
  font-size: calc(10px + 1vmin);
  text-align: center;
  color: #234b4c;
  outline: none;

  :focus {
    background-color: #fff;
  }
`;

export const StyledButton = styled.button`
  margin: 0;
  padding: 10px;
  height: 60px;
  width: 130px;
  color: #fff;
  font-size: calc(10px + 1vmin);
  background-color: #6cc3c7;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const StyledList = styled.div`
  min-width: 300px;
  max-width: 90vh;
  display: flex;
  flex-direction: column;
  align-contet: center;
  box-sizing: border-box;
  margin: 0;
  padding: 10px;
`;

export const StyledItem = styled.div`
  box-sizing: border-box;
  font-size: calc(10px + 1vmin);
  color: #fff;
  text-transform: capitalize;
  text-align: center;
  padding: 6px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
`;

export const StyledText = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-center;
  align-items: center;
  width: 100%;
  ${({ isPurchased }) => isPurchased
    && `color: red;
  text-decoration: line-through;
  `};
`;

// color: ${({ isPurchased }) => isPurchased && 'red'};

export const StyledIcon = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  border: 2px solid #fff;
  font-size: 18px;
  height: 30px;
  width: 30px;
  min-width: 30px;
  margin-left: 20px;
  cursor: pointer;
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
`;
