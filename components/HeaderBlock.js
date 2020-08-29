import { useState, useContext } from "react";
import styled, { css } from "styled-components";

import BrandLogo from "components/BrandLogo";
import MobileNav from "components/MobileNav";
import NormalTextButton from "components/NormalTextButton";

import { SectionContext } from "contexts/sectionContext";

/**
 * HeaderBlock
 */
const HeaderBlock = (props) => {
  const { isHeaderFixed = false } = props;
  const { state, dispatch } = useContext(SectionContext);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const openMobileNav = () => {
    setIsMobileNavOpen(true);
  };

  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
  };

  const onLinkClick = (section) => {
    dispatch({ type: "SECTION_CHANGE", payload: section });
  };

  return (
    <>
      <S.HeaderBlock as="header" isHeaderFixed={isHeaderFixed} {...props}>
        <div
          className="HeaderBlock__normal-block"
          aria-hidden={isHeaderFixed ? true : false}
        >
          <div>
            <a href="/#" onClick={() => onLinkClick("home")}>
              <BrandLogo className="HeaderBlock__BrandLogo"></BrandLogo>
            </a>
          </div>

          <nav>
            <ul className="HeaderBlock__nav-group">
              <li>
                <NormalTextButton as="a" href="#servicesSection">
                  Services
                </NormalTextButton>
              </li>

              <li>
                <NormalTextButton as="a" href="#worksSection">
                  Works
                </NormalTextButton>
              </li>

              <li>
                <NormalTextButton as="a" href="#companySection">
                  Company
                </NormalTextButton>
              </li>

              <li>
                <NormalTextButton as="a" href="#contactSection">
                  Contact Us
                </NormalTextButton>
              </li>
            </ul>

            <button
              onClick={openMobileNav}
              className="HeaderBlock__hamburger-button-mobile"
            >
              <img src="/static/svgs/hamburger_icon.svg" alt="Nav menu" />
            </button>
          </nav>
        </div>

        <div
          className="HeaderBlock__fixed"
          aria-hidden={isHeaderFixed ? false : true}
        >
          <a href="/#">
            <BrandLogo
              className="HeaderBlock__BrandLogo"
              variant="onLight"
            ></BrandLogo>
          </a>

          <nav className="HeaderBlock__nav-block">
            <ul className="HeaderBlock__nav-group">
              <li>
                <NormalTextButton
                  as="a"
                  variant="onLight"
                  href="#servicesSection"
                  isSelected={state.currentSection === "services"}
                >
                  Services
                </NormalTextButton>
              </li>

              <li>
                <NormalTextButton
                  as="a"
                  variant="onLight"
                  href="#worksSection"
                  isSelected={state.currentSection === "works"}
                >
                  Works
                </NormalTextButton>
              </li>

              <li>
                <NormalTextButton
                  as="a"
                  variant="onLight"
                  href="#companySection"
                  isSelected={state.currentSection === "company"}
                >
                  Company
                </NormalTextButton>
              </li>

              <li>
                <NormalTextButton
                  as="a"
                  variant="onLight"
                  href="#contactSection"
                  isSelected={state.currentSection === "contact"}
                >
                  Contact Us
                </NormalTextButton>
              </li>
            </ul>

            <button
              onClick={openMobileNav}
              className="HeaderBlock__hamburger-button-mobile"
            >
              <svg
                width="48"
                height="49"
                viewBox="0 0 48 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 15.6561V17.6561H36V15.6561H12ZM12 23.6561V25.6561H36V23.6561H12ZM12 31.6561V33.6561H36V31.6561H12Z" />
              </svg>
            </button>
          </nav>
        </div>

        {isMobileNavOpen === true && (
          <MobileNav
            handleCloseMobileNav={closeMobileNav}
            isHeaderFixed={isHeaderFixed}
          ></MobileNav>
        )}
      </S.HeaderBlock>
    </>
  );
};

const S = {};

S.HeaderBlock = styled.div`
  .HeaderBlock__normal-block {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding-top: ${(p) => p.theme.size[48]};
    padding-left: ${(p) => p.theme.size[96]};
    padding-right: ${(p) => p.theme.size[96]};
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    transition: transform 300ms;
    transform: translateY(0);
 
    ${(p) =>
      p.isHeaderFixed &&
      css`
        transform: translateY(-100%);
      `}
 
    @media (max-width: ${(p) => p.theme.breakpoint.desktopM}) {
      align-items: flex-start;
    }
    @media (max-width: ${(p) => p.theme.breakpoint.tabletLandscape}) {
      padding-left: ${(p) => p.theme.size[64]};
      padding-right: ${(p) => p.theme.size[64]};
    }
    @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
      padding-left: ${(p) => p.theme.size[24]};
      padding-right: ${(p) => p.theme.size[24]};
    }
  }

  .HeaderBlock__fixed {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    background-color: ${(p) => p.theme.color.light};
    padding-top: ${(p) => p.theme.size[32]};
    padding-bottom: ${(p) => p.theme.size[24]};
    color: ${(p) => p.theme.color.dark};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding-left: ${(p) => p.theme.size[96]};
    padding-right: ${(p) => p.theme.size[96]};
    z-index: 100;
    transition: transform 300ms;
    transform: translateY(-100%);

    ${(p) =>
      p.isHeaderFixed &&
      css`
        transform: translateY(0%);
      `}
 
    @media (max-width: ${(p) => p.theme.breakpoint.desktopM}) {
      align-items: flex-start;
    }
    @media (max-width: ${(p) => p.theme.breakpoint.tabletLandscape}) {
      padding-top: ${(p) => p.theme.size[24]};
      padding-left: ${(p) => p.theme.size[64]};
      padding-right: ${(p) => p.theme.size[64]};
      padding-bottom: ${(p) => p.theme.size[16]};
    }
    @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
      padding-top: ${(p) => p.theme.size[16]};
      padding-left: ${(p) => p.theme.size[24]};
      padding-right: ${(p) => p.theme.size[24]};
      padding-bottom: ${(p) => p.theme.size[8]};
      align-items: center;
    }

    .HeaderBlock__hamburger-button-mobile {
      svg {
        fill: ${(p) => p.theme.color.primary.main};
      }
    }

    .HeaderBlock__BrandLogo {
      width: ${(p) => p.theme.size.toRem(128)};

      @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
        width: ${(p) => p.theme.size.toRem(96)};
      }
    }
  }

 
  @media (max-width: ${(p) => p.theme.breakpoint.desktopM}) {
    align-items: flex-start;
  }

  .HeaderBlock__BrandLogo {
    width: ${(p) => p.theme.size.toRem(256)};

    @media (max-width: ${(p) => p.theme.breakpoint.tabletLandscape}) {
      width: ${(p) => p.theme.size.toRem(128)};
    }
  }

  .HeaderBlock__nav-block {
    display: flex;
    align-items: flex-end;
  }

  .HeaderBlock__nav-group {
    display: flex;

    > *:not(:last-child) {

      margin-right: ${(p) => p.theme.size[64]};

      @media (max-width: ${(p) => p.theme.breakpoint.desktopL}) {
        margin-right: ${(p) => p.theme.size[48]};
      }
    }

    @media (max-width: ${(p) => p.theme.breakpoint.desktopM}) {
      display: none;
    }
  }

  .HeaderBlock__headline-block {
    position: absolute;
    top: 50%;
    left: ${(p) => p.theme.size[96]};
    transform: translateY(-50%);
  }

  .HeaderBlock__headline-text {
    font-size: 5em;
    font-weight: 700;
    color: ${(p) => p.theme.color.primary.light};
    margin-bottom: ${(p) => p.theme.size[32]};
    text-shadow: ${(p) => p.theme.shadow.small};
  }

  .HeaderBlock__subheadline-text {
    font-family: ${(p) => p.theme.font.serif};
    line-height: 150%;
    font-size: 1.75em;
    color: ${(p) => p.theme.color.light};
    width: 62%;
  }

  .HeaderBlock__hamburger-button-mobile {
    display: none;

    @media (max-width: ${(p) => p.theme.breakpoint.desktopM}) {
      display: flex;
      align-items: center;
      justify-content: center;

    }
  }
`;

export default HeaderBlock;
