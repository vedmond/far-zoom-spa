import styled from 'styled-components';

export const InputWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const StyledInput = styled.input`
  height: 40px;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  padding-left: 30px;
  &::placeholder {
    padding-left: 30px;
    font-size: 14px;
    color: gray;
  }
  &:focus {
    outline: none;
    border-color: #7a7a7a;
  }
  width: ${(props) => props.width || '200px'};
`;
export const ErrorMessage = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 4px;
  position: absolute;
  bottom: -20px;
  left: 0;
`;
