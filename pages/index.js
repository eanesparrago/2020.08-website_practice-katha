import { useContext, useState } from "react";
import Head from "next/head";
import styled from "styled-components";
import { Waypoint } from "react-waypoint";

import HomePageAtf from "components/sections/HomePageAtf";
import ServicesSection from "components/sections/ServicesSection";
import WorksSection from "components/sections/WorksSection";
import CompanySection from "components/sections/CompanySection";
import ContactSection from "components/sections/ContactSection";
import FooterBlock from "components/FooterBlock";

import { SectionContext } from "contexts/sectionContext";

const HomePage = () => {
  const { dispatch } = useContext(SectionContext);

  const [isHeaderFixed, setIsHeaderFixed] = useState(true);

  const showFixedHeader = () => {
    setIsHeaderFixed(true);
  };

  const hideFixedHeader = () => {
    setIsHeaderFixed(false);
    dispatch({ type: "SECTION_CHANGE", payload: "home" });
  };

  const setSection = (section) => {
    dispatch({ type: "SECTION_CHANGE", payload: section });
  };

  return (
    <>
      <Head>
        <title>Likha+</title>

        <meta name="description" content="" />
      </Head>

      <S.HomePage>
        <Waypoint onEnter={hideFixedHeader}></Waypoint>

        <HomePageAtf
          as="section"
          isHeaderFixed={isHeaderFixed}
          id="homeSection"
        ></HomePageAtf>

        <Waypoint onEnter={showFixedHeader}></Waypoint>

        <Waypoint onEnter={() => setSection("services")}></Waypoint>
        <ServicesSection as="section" id="servicesSection"></ServicesSection>

        <Waypoint onEnter={() => setSection("works")}></Waypoint>
        <WorksSection as="section" id="worksSection"></WorksSection>

        <Waypoint onEnter={() => setSection("company")}></Waypoint>
        <CompanySection as="section" id="companySection"></CompanySection>

        <Waypoint onEnter={() => setSection("contact")}></Waypoint>
        <ContactSection as="section" id="contactSection"></ContactSection>

        <FooterBlock as="footer"></FooterBlock>
      </S.HomePage>
    </>
  );
};

const S = {};

S.HomePage = styled.div``;

export default HomePage;
