import styled from 'styled-components';

export const DivAction = styled.div`
  display: ${(props) => (props.isShow ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
  background-color: #c0c0c0;
  color: #fff;
  cursor: pointer;
  border-radius: 50%;
`;
