import styled, { css } from "styled-components";

import SectionLayout from "components/SectionLayout";
import WorkBlock from "components/WorkBlock";

const WorksSection = (props) => {
  return (
    <S.WorksSection {...props}>
      <SectionLayout headingText="Featured Works">
        <section className="WorksSection__works-group">
          <WorkBlock as="article" className="WorksSection__WorkBlock"></WorkBlock>
          <WorkBlock as="article" className="WorksSection__WorkBlock"></WorkBlock>
          <WorkBlock as="article" className="WorksSection__WorkBlock"></WorkBlock>
          <WorkBlock as="article" className="WorksSection__WorkBlock"></WorkBlock>
        </section>
      </SectionLayout>
    </S.WorksSection>
  );
};

const S = {};

S.WorksSection = styled.div`
  background-color: ${(p) => p.theme.color.grey[3]};

  .WorksSection__works-group {
    display: flex;
    flex-flow: row wrap;
  }

  .WorksSection__WorkBlock {
    width: 50%;

    @media (max-width: ${(p) => p.theme.breakpoint.desktopM}) {
      width: 100%;
    }
  }
`;

export default WorksSection;
