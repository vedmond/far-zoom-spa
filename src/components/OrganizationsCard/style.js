import styled from 'styled-components';

export const CardContainer = styled.div`
  margin: 20px;
  width: 260px;
  text-align: left;
  position: relative;
`;
export const CursorEvent = styled.div`
  z-index: ${(props) => (props.$hover ? '1000' : '0')};
  height: ${(props) => (props.$hover ? 'auto' : '200px')};
  position: ${(props) => (props.$hover ? 'absolute' : 'relative')};
  width: 260px;
  background: #f9f9f9;
  cursor: pointer;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  top: 0;
  left: 0;
  transition: all 0.3s ease;
  &:hover {
    box-shadow: 0 9px 12px rgba(0, 0, 0, 0.4);
  }
`;
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.div`
  font-size: 1em;
  font-weight: 700;
  margin: 0 0 8px 0;
  color: #1d1d1f;
`;

export const Amount = styled.div`
  ont-size: 0.9em;
  font-weight: 600;
  margin: 0 0 16px 0;
  color: #2e2e2e;
`;

export const Company = styled.div`
  font-size: 0.9em;
  font-weight: 600;
  color: #4a4a4a;
`;
export const User = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 6px;
  margin: 15px 0;
  font-size: 1em;
  font-weight: 700;
  color: #4a4a4a;
  background: #e0e0e0;
`;

export const INN = styled.div`
  font-size: 0.9em;
  color: #7a7a7a;
`;
export const RegNumber = styled.div`
  font-size: 0.9em;
  color: #7a7a7a;
  margin-top: 11px;
`;

export const HiddenContent = styled.div`
  opacity: ${(props) => (props.$hover ? '1' : '0')};
  height: ${(props) => (props.$hover ? 'auto' : '0')};
  overflow: hidden;
  transition: all 0.3s ease;
`;

export const Tag = styled.div`
  display: inline-block;
  background: #e0e0e0;
  color: #4a4a4a;
  border-radius: 12px;
  padding: 4px 12px;
  margin: 5px 20px 0 0;
  font-size: 0.5em;
`;
