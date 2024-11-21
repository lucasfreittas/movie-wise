import styled from "styled-components";

export const SliderOverlay = styled.div`
  display: flex;
  flex-direction: row-reverse;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6); 
  z-index: 1000;
  cursor: default;
`;

export const SlideBarContainer = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  padding: 2.4rem 4.8rem;
  width: 66rem;
  height: 100%;
  background-color: ${(props) => props.theme.colors.gray800};

  > svg:hover {
    cursor: pointer;
  };
`;

export const MovieWrapper = styled.div`
  width: 100%;
  margin: 1.6rem 0 4rem 0;
`;

export const CommentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1.6rem;
  overflow-y: scroll;

  .CommentTitle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.4rem;

      h3 {
          font-size: ${(props) => props.theme.fontSize.xs};
          font-weight: ${(props) => props.theme.fontWeight.regular};
          line-height: ${(props) => props.theme.lineHeight.large};
      };

      > button {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          background: none;
          color: ${(props) => props.theme.colors.purple100};
          font-size: ${(props) => props.theme.fontSize.xs};
          font-weight: ${(props) => props.theme.fontWeight.bold};
          line-height: ${(props) => props.theme.lineHeight.large};
        }
  }
  
  .CommentContainer {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    overflow-y: scroll;
  }
`;