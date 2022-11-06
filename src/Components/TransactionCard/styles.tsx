import styled from 'styled-components';

export const CardContainer = styled.div`
  max-width: 80%;
  padding: 18px 0px 24px;
  width: 380px;
  background-image: linear-gradient(215.2deg, #3a3a42 -4.49%, #2a2b31 107.38%);
  border-radius: 10px;
`;

export const CardButtonsContainer = styled.div`
  display: flex;
  padding: 0px 20px;
  width: 100%;
`;

export const CardButton = styled.div`
  padding: 10px 0px;
  display: flex;
  width: 50%;
  justify-content: center;
  cursor: pointer;
  font-weight: 700;

  &:hover {
    color: #67aeca;
  }

  &.active {
    border-bottom: 3px solid #67aeca;
    color: #67aeca;
  }
`;

export const CardFieldsContainer = styled.div`
  padding: 20px;
`;

// transaction card button
export const OptionButton = styled.button`
  padding: 7px 10px;
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  background: #46474e;
  border-radius: 4px;
  color: #b2b2b2;

  &.active {
    color: #67aeca;
    border: 1px solid #67aeca;
  }
`;

export const OptionButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  justify-content: center;
  width: 100%;
  column-gap: 12px;
`;

export const StyleInput = styled.input`
  padding: 10px 11px;
  border-radius: 3px;
  background-color: #46474e;
  border: 0.1rem solid hsla(0, 0%, 100%, 0.2);
  widht: 100%;
`;
