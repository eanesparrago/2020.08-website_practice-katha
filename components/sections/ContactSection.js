import styled from "styled-components";

const ContactSection = (props) => {
  return (
    <S.ContactSection {...props}>
      <article className="ContactSection__content-block">
        <h1 className="ContactSection__heading-text">Let's get to work!</h1>

        <div className="ContactSection__row-wrapper">
          <section className="ContactSection__contact-block">
            <div className="ContactSection__contactHeading-text">Contact</div>

            <div className="ContactSection__contactItem-group">
              <div className="ContactSection__contactItem-text">
                hello@address.com
              </div>

              <div className="ContactSection__contactItem-text">
                (+63) 98 765 4321
              </div>
            </div>
          </section>

          <section className="ContactSection__contact-block">
            <div className="ContactSection__contactHeading-text">Office</div>

            <div className="ContactSection__contactItem-group">
              <div className="ContactSection__contactItem-text">
                hello@address.com
              </div>

              <div className="ContactSection__contactItem-text">
                Address here
              </div>
            </div>
          </section>
        </div>
      </article>
    </S.ContactSection>
  );
};

const S = {};

S.ContactSection = styled.div`
  background-color: ${(p) => p.theme.color.blueViolet};
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-left: ${(p) => p.theme.size[96]};
  padding-right: ${(p) => p.theme.size[96]};

  @media (max-width: ${(p) => p.theme.breakpoint.desktopM}) {
    height: unset;
    padding-top: ${(p) => p.theme.size.toRem(176)};
    padding-bottom: ${(p) => p.theme.size[64]};
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletLandscape}) {
    align-items: flex-start;

    padding-left: ${(p) => p.theme.size[64]};
    padding-right: ${(p) => p.theme.size[64]};
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    padding-top: ${(p) => p.theme.size[96]};
    padding-left: ${(p) => p.theme.size[24]};
    padding-right: ${(p) => p.theme.size[24]};
    padding-bottom: ${(p) => p.theme.size[96]};
  }

  .ContactSection__content-block {
  }

  .ContactSection__heading-text {
    font-size: 6em;
    font-weight: 700;
    line-height: 100%;
    margin-bottom: ${(p) => p.theme.size[96]};
    position: relative;
    left: -${(p) => p.theme.size[8]};

    @media (max-width: ${(p) => p.theme.breakpoint.desktopL}) {
      font-size: 3.875em;
      margin-bottom: ${(p) => p.theme.size[64]};
    }
    @media (max-width: ${(p) => p.theme.breakpoint.tabletLandscape}) {
      left: 0;
    }
    @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
      font-size: 3em;
      margin-bottom: ${(p) => p.theme.size[48]};
      line-height: 120%;
    }
  }

  .ContactSection__row-wrapper {
    display: flex;

    @media (max-width: ${(p) => p.theme.breakpoint.tabletLandscape}) {
      flex-flow: column;
    }

    > *:not(:last-child) {
      margin-right: ${(p) => p.theme.size.toRem(256)};

      @media (max-width: ${(p) => p.theme.breakpoint.desktopM}) {
        margin-right: ${(p) => p.theme.size.toRem(128)};
      }
      @media (max-width: ${(p) => p.theme.breakpoint.tabletLandscape}) {
        margin-right: unset;
        margin-bottom: ${(p) => p.theme.size[96]};
      }
    }
  }

  .ContactSection__contact-block {
  }

  .ContactSection__contactHeading-text {
    font-size: 1.5em;
    font-weight: 700;
    margin-bottom: ${(p) => p.theme.size[48]};

    @media (max-width: ${(p) => p.theme.breakpoint.desktopL}) {
      margin-bottom: ${(p) => p.theme.size[32]};
    }
    @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
      font-size: 1.3125em;
    }
  }

  .ContactSection__contactItem-group {
    > *:not(:last-child) {
      margin-bottom: ${(p) => p.theme.size[32]};

      @media (max-width: ${(p) => p.theme.breakpoint.desktopL}) {
        margin-bottom: ${(p) => p.theme.size[24]};
      }
    }
  }

  .ContactSection__contactItem-text {
    font-size: 1.3125em;
    line-height: 150%;

    @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
      font-size: 1.1875em;
    }
  }
`;

export default ContactSection;
