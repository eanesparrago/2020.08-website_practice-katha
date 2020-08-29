import styled, { css } from "styled-components";

const NormalTextButton = (props) => {
  const { children } = props;

  return <S.NormalTextButton {...props}>{children}</S.NormalTextButton>;
};

const S = {};

S.NormalTextButton = styled.div`
  font-size: 1.1875em;
  color: ${(p) => p.theme.color.white};
  font-weight: 700;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${(p) => p.theme.size[48]};
  transition-duration: 150ms;

  &:hover {
    filter: brightness(80%);
  }

  ${(p) =>
    p.variant === "onLight" &&
    css`
      color: ${(p) => p.theme.color.dark};

      &:hover {
        filter: brightness(160%);
      }
    `}

  ${(p) =>
    p.isSelected === true &&
    css`
      color: ${(p) => p.theme.color.primary.main};

      &:hover {
        filter: none;
      }
    `}
`;

export default NormalTextButton;
