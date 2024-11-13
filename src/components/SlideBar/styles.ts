import styled from "styled-components";

export const SliderOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4); 
  z-index: 1000;
`;

export const SlideBarContainer = styled.div`
    width: 66rem;
    height: 100%;
    background-color: ${(props) => props.theme.colors.gray800};
`;
