import styled from "styled-components";

/**
 * FooterBlock
 */
const FooterBlock = (props) => {
  return (
    <S.FooterBlock {...props}>
      <div className="FooterBlock__socials-block">
        <a className="FooterBlock__socialLink" href="">
          <img src="/static/svgs/facebook_icon.svg" alt="Facebook icon" />
        </a>

        <a className="FooterBlock__socialLink" href="">
          <img src="/static/svgs/instagram_icon.svg" alt="Instagram icon" />
        </a>

        <a className="FooterBlock__socialLink" href="">
          <img src="/static/svgs/youtube_icon.svg" alt="YouTube icon" />
        </a>

        <a className="FooterBlock__socialLink" href="">
          <img src="/static/svgs/twitter_icon.svg" alt="Twitter icon" />
        </a>
      </div>

      <small className="FooterBlock__copyright-text">
        Copyright © 2020 Likha+
      </small>
    </S.FooterBlock>
  );
};

const S = {};

S.FooterBlock = styled.div`
  height: ${(p) => p.theme.size[96]};
  background-color: ${(p) => p.theme.color.grey[2]};
  display: flex;
  align-items: center;
  padding-left: ${(p) => p.theme.size[96]};
  padding-right: ${(p) => p.theme.size[96]};
  position: relative;

  @media (max-width: ${(p) => p.theme.breakpoint.desktopM}) {
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletLandscape}) {
    padding-left: ${(p) => p.theme.size[64]};
    padding-right: ${(p) => p.theme.size[64]};
    padding-top: ${(p) => p.theme.size[48]};
    padding-bottom: ${(p) => p.theme.size[32]};
    height: unset;
    flex-flow: column;
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    padding-left: ${(p) => p.theme.size[24]};
    padding-right: ${(p) => p.theme.size[24]};
  }

  .FooterBlock__socials-block {
    > *:not(:last-child) {
      margin-right: ${(p) => p.theme.size[8]};
    }

    @media (max-width: ${(p) => p.theme.breakpoint.tabletLandscape}) {
      margin-bottom: ${(p) => p.theme.size[32]};
    }
  }

  .FooterBlock__socialLink {
    transition-duration: 150ms;

    &:hover {
      filter: brightness(80%);
    }
  }

  .FooterBlock__copyright-text {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    color: ${(p) => p.theme.color.light};

    @media (max-width: ${(p) => p.theme.breakpoint.tabletLandscape}) {
      position: static;
      left: unset;
      transform: unset;
    }
  }
`;

export default FooterBlock;
