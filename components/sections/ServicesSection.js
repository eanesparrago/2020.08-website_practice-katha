import { useState } from "react";
import styled, { css } from "styled-components";

import ServiceBlock from "components/ServiceBlock";

import servicesSectionData from "data/servicesSection";

const ServicesSection = (props) => {
  const [hoveredBlock, setHoveredBlock] = useState("software");

  return (
    <S.ServicesSection as="section" hoveredBlock={hoveredBlock} {...props}>
      <h2 className="ServicesSection__heading-text">
        {servicesSectionData.title}
      </h2>

      <div className="ServicesSection__services-area">
        <ServiceBlock
          className="ServiceSection__software-ServiceBlock"
          headingText={servicesSectionData.software.title}
          bodyText={servicesSectionData.software.serviceList}
          bgPhotoUrl="/static/images/service_software_bg.jpg"
          photoUrl="/static/images/service_software_graphic.png"
          isHovered={hoveredBlock === "software"}
          onMouseEnter={() => setHoveredBlock("software")}
        ></ServiceBlock>

        <ServiceBlock
          className="ServiceSection__vfx-ServiceBlock"
          variant="alignedRight"
          headingText={servicesSectionData.vfx.title}
          bodyText={servicesSectionData.vfx.serviceList}
          bgPhotoUrl="/static/images/vfx_background.jpg"
          photoUrl="/static/images/vfx_foreground.png"
          isHovered={hoveredBlock === "vfx"}
          onMouseEnter={() => setHoveredBlock("vfx")}
        ></ServiceBlock>
      </div>
    </S.ServicesSection>
  );
};

const S = {};

S.ServicesSection = styled.div`
  background-color: ${(p) => p.theme.color.primary.main};
  padding-top: ${(p) => p.theme.size.toRem(176)};

  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    padding-top: ${(p) => p.theme.size[96]};
  }

  .ServicesSection__heading-text {
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

  .ServicesSection__services-area {
    position: relative;
    height: 80vh;
    border-bottom: 1px solid ${(p) => p.theme.color.primary.main};
    background-color: ${(p) => p.theme.color.white};
 
    @media (max-width: ${(p) => p.theme.breakpoint.desktopL}) {
      height: unset;
      display: flex;
      align-items: stretch;
    }
    @media (max-width: ${(p) => p.theme.breakpoint.desktopM}) {
      flex-flow: column;
    }
  }

  .ServiceSection__software-ServiceBlock {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 62%;
    z-index: 0;

    ${(p) =>
      p.hoveredBlock === "software" &&
      css`
        z-index: 1;
      `}

    @media (max-width: ${(p) => p.theme.breakpoint.desktopL}) {
      width: 50%;
      position: relative;
    }
    @media (max-width: ${(p) => p.theme.breakpoint.desktopM}) {
      width: 100%;
    }
  }

  .ServiceSection__vfx-ServiceBlock {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 62%;
    z-index: 0;
 
    ${(p) =>
      p.hoveredBlock === "vfx" &&
      css`
        z-index: 1;
      `}

    @media (max-width: ${(p) => p.theme.breakpoint.desktopL}) {
      width: 50%;
      position: relative;
    }
    @media (max-width: ${(p) => p.theme.breakpoint.desktopM}) {
      width: 100%;
    }
  }
`;

export default ServicesSection;
