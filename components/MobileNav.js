import { useContext } from "react";
import styled, { css } from "styled-components";

import NormalTextButton from "components/NormalTextButton";

import { SectionContext } from "contexts/sectionContext";

const MobileNav = (props) => {
  const { handleCloseMobileNav } = props;
  const { state } = useContext(SectionContext);

  return (
    <S.MobileNav as="div" {...props}>
      <button
        className="MobileNav__close-button"
        onClick={handleCloseMobileNav}
      >
        <img src="/static/svgs/close_icon.svg" alt="Close" />
      </button>

      <nav className="MobileNav__nav-group">
        <NormalTextButton
          as="a"
          href="#servicesSection"
          onClick={handleCloseMobileNav}
          isSelected={state.currentSection === "services"}
        >
          Services
        </NormalTextButton>

        <NormalTextButton
          as="a"
          href="#worksSection"
          onClick={handleCloseMobileNav}
          isSelected={state.currentSection === "works"}
        >
          Works
        </NormalTextButton>

        <NormalTextButton
          as="a"
          href="#companySection"
          onClick={handleCloseMobileNav}
          isSelected={state.currentSection === "company"}
        >
          Company
        </NormalTextButton>

        <NormalTextButton
          as="a"
          href="#contactSection"
          onClick={handleCloseMobileNav}
          isSelected={state.currentSection === "contact"}
        >
          Contact Us
        </NormalTextButton>
      </nav>
    </S.MobileNav>
  );
};

const S = {};

S.MobileNav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(p) => p.theme.color.grey[2]};
  z-index: 1000;

  .MobileNav__close-button {
    position: absolute;
    top: ${(p) => p.theme.size[48]};
    right: ${(p) => p.theme.size[96]};

    ${(p) =>
      p.isHeaderFixed &&
      css`
        top: ${(p) => p.theme.size[24]};
      `}

    @media (max-width: ${(p) => p.theme.breakpoint.tabletLandscape}) {
      right: ${(p) => p.theme.size[64]};
    }
    @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
      right: ${(p) => p.theme.size[24]};
    }
  }

  .MobileNav__nav-group {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-flow: column;

    > *:not(:last-child) {
      margin-bottom: ${(p) => p.theme.size[16]};
    }
  }
`;

export default MobileNav;
