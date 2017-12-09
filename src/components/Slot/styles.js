import styled from 'styled-components';
import roulette from './img/roulette.png';
import rollBg from './img/roll__bg.png';
import rollDots from './img/roulette__lights-ring.png'
import light from './img/roulette__light.png';
import spinner from './img/roulette__spinner.png';
import label from './img/roulette__spin-label.png';

export const SlotWrapper = styled.div`
    height: 300px;
    width: 300px;
    position: relative;
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SlotBackgrounds = styled.div`
    background-size: cover;
    background-position: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

const numbersOffset = '35px';
export const SlotNumbers = SlotBackgrounds.extend`
    background-image: url(${roulette});
    top: ${numbersOffset};
    left: ${numbersOffset};
    right: ${numbersOffset};
    bottom: ${numbersOffset};

    ${props => props.spin ? 'animation-name: numbersRound;' : ''}
    animation-duration: 4s;
    transform: rotate(12deg);

    @keyframes numbersRound {
      0% {
        transform: rotate(12deg);
      }
      100% {
        transform: rotate(1452deg);
      }
    }
`;

export const SlotRound = SlotBackgrounds.extend`
    background-image: url(${rollBg});
`;

const dotsOffset = '12px';
export const SlotDotsRound = SlotBackgrounds.extend`
    background-image: url(${rollDots});
    top: ${dotsOffset};
    left: ${dotsOffset};
    right: ${dotsOffset};
    bottom: ${dotsOffset};
`;

const lightOffset = '12px';
export const SlotLight = SlotBackgrounds.extend`
    background-image: url(${light});
    top: ${lightOffset};
    left: ${lightOffset};
    right: ${lightOffset};
    bottom: ${lightOffset};
    animation-name: lightRound;
    animation-duration: .8s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    
    @keyframes lightRound {
      from {
        transform: rotate(0);
      }
      to {
        transform: rotate(360deg);
      }
    }
`;

export const SlotSpinner = styled.div`
    background-image: url(${spinner});
    width: 65px;
    height: 65px;
    position: relative;
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SpinnerLabel = styled.div`
    background-image: url(${label});
    width: 40px;
    height: 15px;
    background-size: cover;
    ${props => props.spin ? '' : 'animation-name: spinResizing;'}
    animation-duration: .8s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    
    @keyframes spinResizing {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.4);
      }
      100% {
        transform: scale(1);
      }
    }
`;

export const PopupWrapper = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    align-items: center;
    display: flex;
    justify-content: center;
    background: rgba(0,0,0,.4);
`;

export const Popup = styled.div`
    width: 300px;
    height: 400px;
    background: #fff;
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    border-radius: 4px;
    
    a {
      text-decoration: none;
    }
`;

export const PopupButton = styled.button`
    border: 0;
    background: #2e8bc4;
    color: #fff;
    display: block;
    font-size: 18px;
    padding: 5px 15px;
`;
