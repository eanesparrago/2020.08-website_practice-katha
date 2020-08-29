import styled from "styled-components";

import FilledButton from "components/FilledButton";

const CompanySection = (props) => {
  return (
    <S.CompanySection {...props}>
      <div className="CompanySection__content-block">
        <img
          className="CompanySection__logo"
          src="/static/images/katha_logo-on_dark.png"
          alt="Likha+ logo"
        />

        <p className="CompanySection__info-text">
         Company info here
        </p>

        <div className="CompanySection__button-group">
          <FilledButton
            variant="secondary"
            className="CompanySection__learnMore-button"
          >
            Learn more about us
          </FilledButton>

          <FilledButton className="CompanySection__joinUs-button">
            Join our team!
          </FilledButton>
        </div>
      </div>

      <div className="CompanySection__companyPhoto-block">
        <div className="CompanySection__companyPhoto-wrapper">
          <img
            className="CompanySection__companyPhoto-image"
            src="/static/images/company_building.jpg"
            alt="Likha+ office building"
          />
        </div>
      </div>
    </S.CompanySection>
  );
};

const S = {};

S.CompanySection = styled.div`
  background-color: ${(p) => p.theme.color.grey[2]};
  height: 100vh;
  display: flex;
  align-items: center;
  padding-left: ${(p) => p.theme.size[96]};
  padding-right: ${(p) => p.theme.size[96]};

  @media (max-width: ${(p) => p.theme.breakpoint.desktopM}) {
    flex-flow: column-reverse nowrap;
    height: unset;
    padding-top: ${(p) => p.theme.size.toRem(176)};
    padding-bottom: ${(p) => p.theme.size[64]};
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletLandscape}) {
    padding-left: ${(p) => p.theme.size[64]};
    padding-right: ${(p) => p.theme.size[64]};
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    padding-top: ${(p) => p.theme.size[96]};
    padding-left: ${(p) => p.theme.size[24]};
    padding-right: ${(p) => p.theme.size[24]};
  }

  .CompanySection__content-block {
    width: 62%;
    flex-shrink: 0;
    padding-right: ${(p) => p.theme.size[96]};

    @media (max-width: ${(p) => p.theme.breakpoint.desktopM}) {
      width: unset;
      padding-right: unset;
    }
  }

  .CompanySection__logo {
    width: ${(p) => p.theme.size.toRem(384)};
    margin-bottom: ${(p) => p.theme.size[64]};

    @media (max-width: ${(p) => p.theme.breakpoint.desktopL}) {
      width: ${(p) => p.theme.size.toRem(256)};
      margin-bottom: ${(p) => p.theme.size[48]};
    }
    @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
      width: ${(p) => p.theme.size.toRem(192)};
    }
  }

  .CompanySection__info-text {
    font-size: 2em;
    font-family: ${(p) => p.theme.font.serif};
    line-height: 180%;
    margin-bottom: ${(p) => p.theme.size[48]};

    @media (max-width: ${(p) => p.theme.breakpoint.desktopL}) {
      font-size: 1.5em;
      margin-bottom: ${(p) => p.theme.size[32]};
    }
    @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
      font-size: 1.1875em;
    }
  }

  .CompanySection__button-group {
    display: flex;

    @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
      flex-flow: column;
      align-items: flex-start;
    }
  }

  .CompanySection__learnMore-button {
    margin-right: ${(p) => p.theme.size[16]};

    @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
      margin-right: 0;
      margin-bottom: ${(p) => p.theme.size[12]};
    }
  }

  .CompanySection__joinUs-button {
  }

  .CompanySection__companyPhoto-block {
    width: 100%;

    @media (max-width: ${(p) => p.theme.breakpoint.desktopM}) {
      margin-bottom: ${(p) => p.theme.size[64]};
    }
  }

  .CompanySection__companyPhoto-wrapper {
    padding-top: 56.25%;
    width: 100%;
    position: relative;
    overflow: hidden;
  }

  .CompanySection__companyPhoto-image {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    object-fit: cover;
    width: 100%;
  }
`;

export default CompanySection;
