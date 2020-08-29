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
      ? "/static/images/logo-main-onLight.png"
      : "/static/images/logo-main-onDark.png";

  return (
    <S.BrandLogo {...props}>
      <img src={src} alt="Likha+ logo" />
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
