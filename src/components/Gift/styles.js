import styled from 'styled-components';

export const GiftWrapper = styled.div`
    width: 200px;
    margin: 10px;
    box-shadow: 0 1px 1px rgba(0,0,0,.4);
    border-radius: 3px;
    padding: 5px;
    background: ${props => props.background ? props.background : ''};
    
    span {
      color: ${props => props.background ? '#fff' : ''};
    }
    
    img {
      width: 100%;
    }
`;
