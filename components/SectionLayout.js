import styled from "styled-components";

const SectionLayout = (props) => {
  const { headingText, children } = props;

  return (
    <S.SectionLayout {...props}>
      <h2 className="SectionLayout__heading-text">{headingText}</h2>

      {children}
    </S.SectionLayout>
  );
};

const S = {};

S.SectionLayout = styled.div`
  padding-top: ${(p) => p.theme.size.toRem(176)};

  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    padding-top: ${(p) => p.theme.size[96]};
  }

  .SectionLayout__heading-text {
    font-size: 3em;
    font-weight: 700;
    margin-left: ${(p) => p.theme.size[96]};
    padding-bottom: ${(p) => p.theme.size[64]};

    @media (max-width: ${(p) => p.theme.breakpoint.tabletLandscape}) {
      margin-left: ${(p) => p.theme.size[64]};
    }
    @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
      font-size: 2em;
      padding-bottom: ${(p) => p.theme.size[32]};
      margin-left: ${(p) => p.theme.size[24]};
    }
  }
`;

export default SectionLayout;
