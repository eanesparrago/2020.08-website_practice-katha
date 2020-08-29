import styled, { css } from "styled-components";
import { useState } from "react";

import FilledButton from "components/FilledButton";

const ServiceBlock = (props) => {
  const {
    variant = "alignedLeft",
    headingText = "Heading text",
    bodyText = "Body text",
    photoUrl,
    bgPhotoUrl,
  } = props;

  return (
    <S.ServiceBlock as="article" variant={variant} {...props}>
      <h3 className="ServiceBlock__heading-text">{headingText}</h3>

      <ul className="ServiceBlock__body-text">
        {bodyText.map((service, i) => (
          <li key={i}>• {service}</li>
        ))}
      </ul>

      {photoUrl && (
        <img
          className="ServiceBlock__photo"
          src={photoUrl}
          alt="Software products"
        />
      )}

      <div className="ServiceBlock__cta-block">
        <FilledButton
          className="ServiceSection__learnMore-FilledButton"
          variant="secondary"
        >
          Learn more
        </FilledButton>

        <div className="ServiceBlock__line-graphic"></div>
      </div>

      {bgPhotoUrl && (
        <div className="ServiceBlock__bg-wrapper">
          <div className="ServiceBlock__bgOverlay-graphic"></div>
          <img className="ServiceBlock__bg-graphic" src={bgPhotoUrl} alt="" />
        </div>
      )}

      <div className="ServiceBlock__borderTop"></div>

      <div className="ServiceBlock__borderSide"></div>

      <div className="ServiceBlock__overlay-graphic"></div>
    </S.ServiceBlock>
  );
};

const S = {};

S.ServiceBlock = styled.div`
  background-color: ${(p) => p.theme.color.grey[2]};
  padding-top: ${(p) => p.theme.size[64]};
  padding-left: ${(p) => p.theme.size[96]};
  padding-right: ${(p) => p.theme.size[96]};
  padding-bottom: ${(p) => p.theme.size.toRem(112)};
  position: relative;
  z-index: 0;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  transition-duration: 400ms;
  height: 100%;

  @media (max-width: ${(p) => p.theme.breakpoint.desktopL}) {
    height: unset;
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletLandscape}) {
    padding-left: ${(p) => p.theme.size[64]};
    padding-right: ${(p) => p.theme.size[64]};
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    padding-top: ${(p) => p.theme.size[48]};
    padding-left: ${(p) => p.theme.size[24]};
    padding-right: ${(p) => p.theme.size[24]};
    padding-bottom: ${(p) => p.theme.size[48]};
  }

  clip-path: inset(0 0 0 0);

  @media (min-width: ${(p) => p.theme.breakpoint.desktopL}) {
    &:hover {
      clip-path: inset(0 0 0 0);
    }

    ${(p) =>
      p.variant === "alignedLeft" &&
      p.isHovered === false &&
      css`
        clip-path: inset(0 38% 0 0);
      `}

    ${(p) =>
      p.variant === "alignedRight" &&
      p.isHovered === false &&
      css`
        clip-path: inset(0 0 0 38%);
      `}

    ${(p) =>
      p.variant === "alignedRight" &&
      css`
        align-items: flex-end;
        text-align: right;
      `}
  }

  .ServiceBlock__heading-text {
    font-size: 6em;
    color: ${(p) => p.theme.color.primary.light};
    font-weight: 300;
    margin-bottom: ${(p) => p.theme.size[32]};
    line-height: 100%;
    position: relative;
    right: ${(p) => p.theme.size[8]};

    @media (max-width: ${(p) => p.theme.breakpoint.desktopL}) {
      margin-bottom: ${(p) => p.theme.size[24]};
      font-size: 3.875em;
    }
    @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
      margin-bottom: ${(p) => p.theme.size[16]};
      font-size: 2em;
      font-weight: 400;
      right: 0;
    }
  }

  .ServiceBlock__body-text {
    line-height: 180%;
    font-size: 1.1875em;
    font-family: ${(p) => p.theme.font.serif};
    width: 50%;
    margin-bottom: ${(p) => p.theme.size[96]};

    @media (max-width: ${(p) => p.theme.breakpoint.desktopL}) {
      margin-bottom: ${(p) => p.theme.size[48]};
      width: 100%;
      font-size: 1em;
    }
    @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
      margin-bottom: ${(p) => p.theme.size[32]};
    }
  }
  

  .ServiceBlock__cta-block {
    width: 100%;
    margin-top: auto;
  }

  .ServiceSection__learnMore-FilledButton {
    margin-bottom: ${(p) => p.theme.size[32]};
  }

  .ServiceBlock__line-graphic {
    height: 1px;
    background-color: ${(p) => p.theme.color.white};
    width: 80%;

    @media (max-width: ${(p) => p.theme.breakpoint.desktopL}) {
      width: 100%;
    }

    ${(p) =>
      p.variant === "alignedRight" &&
      css`
        margin-left: auto;
      `}
  }

  .ServiceBlock__photo {
    position: absolute;
    bottom: ${(p) => p.theme.size[64]};
    right: ${(p) => p.theme.size[64]};
    width: ${(p) => p.theme.size.toRem(450)};

    @media (max-width: ${(p) => p.theme.breakpoint.desktopL}) {
      position: static;
      width: ${(p) => p.theme.size.toRem(256)};
      margin: 0 auto;
      margin-bottom: ${(p) => p.theme.size[32]}
    }
    @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
      margin-bottom: ${(p) => p.theme.size[24]};
    }

    ${(p) =>
      p.variant === "alignedRight" &&
      css`
        align-items: flex-end;
        text-align: right;
        left: ${(p) => p.theme.size[64]};
        right: unset;
      `}
  }

  .ServiceBlock__bg-wrapper {
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }

  .ServiceBlock__bgOverlay-graphic {
    width: 62%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background-image: linear-gradient(to left, ${(p) =>
      p.theme.color.grey[2]}00, ${(p) => p.theme.color.grey[2]});

      ${(p) =>
        p.variant === "alignedRight" &&
        css`
          right: unset;
          left: 0;

          background-image: linear-gradient(
            to right,
            ${(p) => p.theme.color.grey[2]}00,
            ${(p) => p.theme.color.grey[2]}FF
          );
        `}
  }

  .ServiceBlock__bg-graphic {
    width: 62%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: -2;
    object-fit: cover;

    ${(p) =>
      p.variant === "alignedRight" &&
      css`
        right: unset;
        left: 0;
      `}

    @media (max-width: ${(p) => p.theme.breakpoint.desktopL}) {
      display: none;
    }
  }

  .ServiceBlock__borderTop {
    position: absolute;
    left: 0;
    top: 0;
    width: 0%;
    background-color: ${(p) => p.theme.color.white};
    height: 2px;
    transition-duration: 200ms;
    transition-delay: 400ms;

    ${(p) =>
      p.isHovered === true &&
      css`
        width: 100%;
      `}

    ${(p) =>
      p.variant === "alignedRight" &&
      css`
        left: unset;
        right: 0;
      `}

    @media (max-width: ${(p) => p.theme.breakpoint.desktopL}) {
      width: 100%;
    }
    @media (max-width: ${(p) => p.theme.breakpoint.desktopM}) {
      display: none;
    }
  }
  &:hover .ServiceBlock__borderTop {
    width: 100%;
  }

  .ServiceBlock__borderSide {
    position: absolute;
    right: 0;
    bottom: 0;
    background-color: ${(p) => p.theme.color.white};
    width: 2px;
    height: 0%;
    transition-duration: 200ms;
    transition-delay: 400ms;

    ${(p) =>
      p.isHovered === true &&
      css`
        height: 100%;
      `}
  
    ${(p) =>
      p.variant === "alignedRight" &&
      css`
        right: unset;
        left: 0;
      `}

    @media (max-width: ${(p) => p.theme.breakpoint.desktopL}) {
      height: 100%;
      width: 1px;
    }
    @media (max-width: ${(p) => p.theme.breakpoint.desktopM}) {
      display: none;
    }
  }
  &:hover .ServiceBlock__borderSide {
    height: 100%;
  }

  .ServiceBlock__overlay-graphic {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(
      to left,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.8)
    );
    z-index: 10;
    opacity: 0;
    pointer-events: none;
    transition-duration: 400ms;
    transition-delay: 100ms;

    ${(p) =>
      p.isHovered === false &&
      css`
        opacity: 1;
      `}

    @media (max-width: ${(p) => p.theme.breakpoint.desktopL}) {
      display: none;
    }
  }
`;

export default ServiceBlock;
