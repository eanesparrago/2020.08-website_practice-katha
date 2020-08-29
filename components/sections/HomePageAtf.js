import styled, { css } from "styled-components";
import { motion } from "framer-motion";

import HeaderBlock from "components/HeaderBlock";

import homeSectionData from "data/homeSection";

const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const HomePageAtf = (props) => {
  const { isHeaderFixed } = props;

  return (
    <S.HomePageAtf {...props}>
      <motion.section
        className="HomePageAtf__atf-area"
        variants={stagger}
        initial="initial"
        animate="animate"
      >
        <HeaderBlock
          className="HomePageAtf__HeaderBlock"
          isHeaderFixed={isHeaderFixed}
        ></HeaderBlock>

        <div className="HomePageAtf__headline-block">
          <motion.h1 className="HomePageAtf__headline-text" variants={fadeInUp}>
            {homeSectionData.headline}
          </motion.h1>

          <motion.p
            className="HomePageAtf__subheadline-text"
            variants={fadeInUp}
          >
            {homeSectionData.subHeadline}
          </motion.p>
        </div>

        <div className="HomePageAtf__socials-block">
          {homeSectionData.socialLinks.facebook !== "" && (
            <a
              className="HomePageAtf__socialLink"
              href={homeSectionData.socialLinks.facebook}
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src="/static/svgs/facebook_icon.svg" alt="Facebook icon" />
            </a>
          )}

          {homeSectionData.socialLinks.instagram !== "" && (
            <a
              className="HomePageAtf__socialLink"
              href={homeSectionData.instagram}
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src="/static/svgs/instagram_icon.svg" alt="Instagram icon" />
            </a>
          )}

          {homeSectionData.socialLinks.youtube !== "" && (
            <a
              className="HomePageAtf__socialLink"
              href={homeSectionData.youtube}
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src="/static/svgs/youtube_icon.svg" alt="YouTube icon" />
            </a>
          )}

          {homeSectionData.socialLinks.twitter !== "" && (
            <a
              className="HomePageAtf__socialLink"
              href={homeSectionData.twitter}
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src="/static/svgs/twitter_icon.svg" alt="Twitter icon" />
            </a>
          )}
        </div>

        <img
          className="HomePageAtf__scrollIndicator-graphic"
          src="/static/svgs/scroll_indicator.svg"
          alt="Scroll down indicator"
        />

        <div
          className="HomePageAtf__bgGraphic"
          style={{
            backgroundImage: "url('/static/images/atf_graphic.jpg')",
          }}
        ></div>
      </motion.section>
    </S.HomePageAtf>
  );
};

const animation = css`
  animation-name: animate-fadeIn;
  animation-duration: 600ms;
  animation-delay: 1000ms;
  animation-fill-mode: backwards;

  @keyframes animate-fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

const S = {};

S.HomePageAtf = styled.div`
  .HomePageAtf__atf-area {
    height: 101vh;
    display: relative;
    overflow: hidden;
  }

  .HomePageAtf__HeaderBlock {
    position: relative;
    z-index: 10;

    ${animation};
  }

  .HomePageAtf__headline-block {
    position: absolute;
    top: 35%;
    left: ${(p) => p.theme.size[96]};
    z-index: 1;

    @media (max-width: ${(p) => p.theme.breakpoint.desktopM}) {
      transform: none;
      top: ${(p) => p.theme.size.toRem(224)};
    }
    @media (max-width: ${(p) => p.theme.breakpoint.tabletLandscape}) {
      left: ${(p) => p.theme.size[64]};
      padding-right: ${(p) => p.theme.size[64]};
    }
    @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
      left: ${(p) => p.theme.size[24]};
      padding-right: ${(p) => p.theme.size[24]};
      top: ${(p) => p.theme.size.toRem(144)};
    }
  }

  .HomePageAtf__headline-text {
    font-size: 5em;
    font-weight: 700;
    color: ${(p) => p.theme.color.primary.light};
    margin-bottom: ${(p) => p.theme.size[32]};
    text-shadow: ${(p) => p.theme.shadow.small};

    @media (max-width: ${(p) => p.theme.breakpoint.tabletLandscape}) {
      font-size: 3.875em;
    }
    @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
      font-size: 2em;
    }
  }

  .HomePageAtf__subheadline-text {
    font-family: ${(p) => p.theme.font.serif};
    line-height: 150%;
    font-size: 1.75em;
    color: ${(p) => p.theme.color.light};
    width: 62%;

    @media (max-width: ${(p) => p.theme.breakpoint.tabletLandscape}) {
      font-size: 1.5em;
      width: 100%;
      padding-right: ${(p) => p.theme.size[64]};
    }
    @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
      font-size: 1.1875em;
      padding-right: ${(p) => p.theme.size[24]};
    }
  }

  .HomePageAtf__socials-block {
    display: flex;
    align-items: flex-start;
    flex-flow: column;
    position: absolute;
    bottom: ${(p) => p.theme.size[48]};
    left: ${(p) => p.theme.size[96]};

    ${animation};

    @media (max-width: ${(p) => p.theme.breakpoint.tabletLandscape}) {
      left: ${(p) => p.theme.size[64]};
    }
    @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
      display: none;
    }

    > *:not(:last-child) {
      margin-bottom: ${(p) => p.theme.size[8]};
    }
  }

  .HomePageAtf__hamburger-button-mobile {
    display: none;

    @media (max-width: ${(p) => p.theme.breakpoint.desktopM}) {
      display: block;
    }
  }

  .HomePageAtf__socialLink {
    transition-duration: 150ms;

    &:hover {
      filter: brightness(80%);
    }
  }

  .HomePageAtf__scrollIndicator-graphic {
    position: absolute;
    bottom: ${(p) => p.theme.size[48]};
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;

    animation-name: HomePageAtf__scrollIndicator-graphic;
    animation-duration: 150ms;
    animation-delay: 1400ms;
    animation-fill-mode: backwards;
    animation-timing-function: ease-out;

    @keyframes HomePageAtf__scrollIndicator-graphic {
      0% {
        opacity: 0;
        transform: translateX(-50%) translateY(-50%);
      }

      100% {
        opacity: 1;
        transform: translateX(-50%) translateY(0%);
      }
    }
  }

  .HomePageAtf__bgGraphic {
    height: 100%;
    background-repeat: no-repeat;
    background-position: 115% 50%;
    background-size: auto 120vh;
    z-index: -100;

    ${animation};

    @media (max-width: ${(p) => p.theme.breakpoint.desktopL}) {
      background-size: 62vw auto;
      background-position: 115% 110%;
    }
    @media (max-width: ${(p) => p.theme.breakpoint.desktopM}) {
      background-size: auto 62vh;
      background-position: 115% 110%;
    }
    @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
      background-size: auto 62vh;
      background-position: 0% 110%;
    }
  }
`;

export default HomePageAtf;
