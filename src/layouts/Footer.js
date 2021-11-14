import styled from "styled-components";

import Brand from "../components/footer/Brand";
import AboutUs from "../components/footer/AboutUs";
import ContactUs from "../components/ContactUs";

const Footer = () => {
  return (
    <StyledFooter>
      <Brand />

      <AboutUs />

      <ContactUs />
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background: rgb(235, 238, 240); ;
`;

export default Footer;
