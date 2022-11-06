import styled, { keyframes } from 'styled-components';

export type validOptions = 1 | 2 | 3 | 4;
interface CircleImageProps {
  image: validOptions;
  direction: validOptions;
  position: validOptions;
  size: number;
  opacity?: number
}

const img1 =
  'https://images.unsplash.com/photo-1530508777238-14544088c3ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80';
const img2 =
  'https://images.unsplash.com/photo-1621508727844-09cc245de555?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80';
const img3 =
  'https://images.unsplash.com/photo-1628155524928-35c02b8ac4d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80';
const img4 =
  'https://images.unsplash.com/photo-1534421043066-736a9d9add7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80';

const position1 = "top: -10%;right: 0vw;" // top-right
const position2 = "top: 100%;right: -15vw;" //bottom-right
const position3 = "top: 80%;right: 40vw;" //bottom-left
const position4 = "top: 5%;right: 48vw;" // top-left

const backgroundMoveDirection1 = keyframes`
    0% {
        background-position: 0% 50%;
    }
    100% {
        background-position: 80% 10%;
    }
`;

const backgroundMoveDirection2 = keyframes`
    0% {
        background-position: 0% 0%;
    }
    100% {
        background-position: 80% 40%;
    }
`;

const backgroundMoveDirection3 = keyframes`
    0% {
        background-position: 30% 0%;
    }
    100% {
        background-position: 30% 80%;
    }
`;

const backgroundMoveDirection4 = keyframes`
    0% {
        background-position: 10% 0%;
    }
    100% {
        background-position: 80% 0%;
    }
`;

const imgOptions = { '1': img1, '2': img2, '3': img3, '4': img4 };
const animationOptions = {
  '1': backgroundMoveDirection1,
  '2': backgroundMoveDirection2,
  '3': backgroundMoveDirection3,
  '4': backgroundMoveDirection4,
};
const positionOptions = { '1': position1, '2': position2, '3': position3, '4': position4 }

export const CicleImageWrapper = styled.div<CircleImageProps>`
    position: absolute;
    ${({position}) => positionOptions[position] }
    background-image: url(${({ image }) => imgOptions[image]});
    width: ${({size}) => size}px;
    height: ${({size}) => size}px;
    border-radius: 50%;
    background-size: 200% 200%;
    animation: ${({ direction }) => animationOptions[direction]} 4s ease infinite alternate} ;
    border: 1px #fff solid;
    opacity: ${({opacity}) => opacity ? opacity : "0.8"};
    box-shadow: 0px 0px 150px 5px rgba(153,51,176, 1);
    z-index: 0;
`;
