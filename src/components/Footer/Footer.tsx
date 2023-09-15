import { Link } from "react-router-dom";
import { footerData } from "./Footer.data";
import { FooterLinks, StyledFooter } from "./Footer.style";

export const Footer = () => {
  return (
    <StyledFooter>
      {/* <Icon
        className="logo"
        name="clear-pay-logo"
        width="232"
        height="45"
        fill="white"
      /> */}
      <FooterLinks>
        {footerData.map((data) => {
          return (
            <div className="footerLink" key={data.title}>
              <p className="linksHeading">{data.title}</p>
              {data.links.map((link) => (
                <Link to={link.path} className="links" key={link.title}>
                  {link.title}
                </Link>
              ))}
            </div>
          );
        })}
      </FooterLinks>
    </StyledFooter>
  );
};
