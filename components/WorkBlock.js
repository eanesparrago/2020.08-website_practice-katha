import { useState } from "react";
import styled, { css } from "styled-components";

const WorkBlock = (props) => {
  const [isHovered, setIsHovered] = useState(true);

  return (
    <S.WorkBlock isHovered={isHovered} {...props}>
      <img
        className="WorkBlock__image"
        src="/static/images/works_01.jpg"
        alt=""
      />

      <div className="WorkBlock__detail-block">
        <div className="WorkBlock__detailText-block">
          <h1 className="WorkBlock__heading-text">FliqCliq</h1>
          <div className="WorkBlock__subheading-text">Streaming App</div>
        </div>

        <div className="WorkBlock__detailImage-wrapper">
          <img
            className="WorkBlock__detailImage"
            src="/static/images/service_software_graphic.png"
            alt=""
          />
        </div>
      </div>

      <div className="WorksSection__overlay-graphic"></div>
    </S.WorkBlock>
  );
};

const S = {};

S.WorkBlock = styled.div`
  position: relative;
  overflow: hidden;

  .WorkBlock__image {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }

  .WorkBlock__detail-block {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    opacity: 0;
    transition-duration: 300ms;
    transition-delay: 100ms;
    transform: translateY(100%);
    display: flex;
    align-items: center;

    @media (max-width: ${(p) => p.theme.breakpoint.desktopM}) {
      opacity: 1;
      transform: translateY(0%);
    }
    @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
      flex-flow: column;
      padding-top: ${(p) => p.theme.size[32]};
      padding-bottom: ${(p) => p.theme.size[48]};
      position: relative;
    }
  }
  &:hover .WorkBlock__detail-block {
    opacity: 1;
    transform: translateY(0%);
  }

  .WorkBlock__detailText-block {
    width: 38%;
    text-align: right;
    padding-left: ${(p) => p.theme.size[32]};

    @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
      text-align: center;
      padding-left: 0;
      width: 100%;
      margin-bottom: ${(p) => p.theme.size[24]};
    }
  }

  .WorkBlock__heading-text {
    font-size: 5em;
    color: ${(p) => p.theme.color.light};
    line-height: 100%;
    margin-bottom: ${(p) => p.theme.size[16]};
    font-weight: 300;
    letter-spacing: -0.02em;

    @media (max-width: ${(p) => p.theme.breakpoint.desktopXL}) {
      font-size: 3.875em;
    }
    @media (max-width: ${(p) => p.theme.breakpoint.desktopM}) {
      font-size: 5em;
    }
    @media (max-width: ${(p) => p.theme.breakpoint.tabletLandscape}) {
      font-size: 3.875em;
    }
    @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
      font-size: 2em;
      margin-bottom: ${(p) => p.theme.size[8]};
    }
  }

  .WorkBlock__subheading-text {
    font-size: 1.75em;
    font-weight: 700;
    line-height: 100%;

    @media (max-width: ${(p) => p.theme.breakpoint.desktopXL}) {
      font-size: 1.5em;
    }
    @media (max-width: ${(p) => p.theme.breakpoint.desktopXL}) {
      font-size: 1.75em;
    }
    @media (max-width: ${(p) => p.theme.breakpoint.tabletLandscape}) {
      font-size: 1.5em;
    }
    @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
      font-size: 1.1875em;
    }
  }

  .WorkBlock__detailImage-wrapper {
    width: 62%;
    text-align: left;
    padding-right: ${(p) => p.theme.size[32]};

    @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
      width: 100%;
      text-align: center;
      padding-right: ${p => p.theme.size[24]};
      padding-left: ${p => p.theme.size[24]};
    }
  }

  .WorkBlock__detailImage {
    width: 100%;
  }

  .WorksSection__overlay-graphic {
    background-color: ${(p) => p.theme.color.black}D9;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    opacity: 0;
    transition-duration: 300ms;

    @media (max-width: ${(p) => p.theme.breakpoint.desktopM}) {
      opacity: 1;
    }
  }
  &:hover .WorksSection__overlay-graphic {
    opacity: 1;
  }
`;

export default WorkBlock;
