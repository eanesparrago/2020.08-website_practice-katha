import styled, { css } from "styled-components";

const FilledButton = (props) => {
  const { children } = props;

  return <S.FilledButton {...props}>{children}</S.FilledButton>;
};

const S = {};

S.FilledButton = styled.div`
  height: ${(p) => p.theme.size[64]};
  padding-left: ${(p) => p.theme.size[32]};
  padding-right: ${(p) => p.theme.size[32]};
  background-color: ${(p) => p.theme.color.primary.main};
  display: inline-flex;
  align-items: center;
  text-align: center;
  font-size: 1.1875em;
  font-weight: 700;
  transition-duration: 150ms;


  ${(p) =>
    p.variant === "secondary" &&
    css`
      background-color: ${(p) => p.theme.color.light};
      color: ${(p) => p.theme.color.primary.main};
    `}

  @media (max-width: ${(p) => p.theme.breakpoint.desktopL}) {
    height: ${(p) => p.theme.size[48]};
    font-size: 1em;
  }

  &:hover {
    filter: brightness(90%);
  }
`;

export default FilledButton;
