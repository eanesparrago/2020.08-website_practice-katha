import styled from "styled-components";

/**
 * BrandLogo
 * 
 * @prop {string} variant default, "onDark"
 */
const BrandLogo = (props) => {
  const { variant } = props;

  const src =
    variant === "onLight"
      ? "/static/images/katha_logo-on_light.png"
      : "/static/images/katha_logo-on_dark.png";

  return (
    <S.BrandLogo {...props}>
      <img src={src} alt="Katha logo" />
    </S.BrandLogo>
  );
};

const S = {};

S.BrandLogo = styled.div`
  img {
    width: 100%;
  }
`;

export default BrandLogo;
