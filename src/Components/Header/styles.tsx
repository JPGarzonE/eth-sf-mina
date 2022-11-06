import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: fixed;
  display: flex;
  padding-top: 24px;
  width: 100%;
  background-image: linear-gradient(
    180deg,
    hsl(197deg 48% 60%) 5%,
    hsl(200deg 36% 53%) 27%,
    hsl(203deg 30% 47%) 39%,
    hsl(206deg 28% 40%) 48%,
    hsl(210deg 26% 34%) 57%,
    hsl(215deg 24% 27%) 67%,
    hsl(220deg 22% 20%) 77%,
    hsl(227deg 21% 13%) 100%
  );
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 100;
  align-items: center;
  top: 0;
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  color: #fff;
  justify-content: space-between;
`;

export const HeaderLogoContainer = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  font-weight: 800;
  font-family: 'Montserrat';
  font-size: 30px;
  column-gap: 5px;
`;

export const HeaderLogo = styled.div`
  display: flex;
  justify-content: center;
  width: 400px;
  height: 120px;
  filter: invert(100%) sepia(0%) saturate(3207%) hue-rotate(0deg) brightness(95%) contrast(80%);
`;
