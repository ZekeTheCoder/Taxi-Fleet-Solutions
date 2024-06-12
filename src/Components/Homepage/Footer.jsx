import React from "react";

function Footer() {
  //   const socialLinks = {
  //     github: "https://github.com/yourusername",
  //     linkedin: "https://www.linkedin.com/in/yourusername",
  //     twitter: "https://twitter.com/yourusername",
  //     whatsapp: "https://wa.me/yourphonenumber",
  //     youtube: "https://www.youtube.com/channel/UC4-D6o4-bBYXXXLUZSkEAPw",
  //   };

  return (
    <>
      <div className="footer">
        <div className="footer-top">
          <div className="footer-brand">
            <ul className="social-list">
              {["github", "linkedin", "twitter", "whatsapp", "youtube"].map(
                (platform, index) => (
                  <li key={index}>
                    <a
                      //   href={socialLinks[platform]}
                      className="social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ion-icon name={`logo-${platform}`}></ion-icon>
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="footer-link-box">
            {[
              {
                title: "Contact",
                links: [
                  { text: "Call : 071 234 5678", href: "tel:011 234 5678" },
                  { text: "WhatsApp : 071 234 5678", href: "tel:011 234 5678" },
                  {
                    text: "Email : taxifleetsolutions@gmail.com",
                    href: "mailto:taxifleetsolutions@gmail.com",
                  },
                  {
                    text: "Address : Johannesburg, Gauteng, South Africa",
                    href: "#",
                  },
                ],
              },
              {
                title: "Services",
                links: [
                  "Business Data Analysis",
                  "Income and Expense Tracker",
                  "Human Resource Management",
                  "Customer Relation",
                ],
              },
              {
                title: "Company",
                links: ["About", "Terms", "Privacy Policy", "Careers"],
              },
              {
                title: "Account Info",
                links: ["Portal", "Dashboard"],
              },
            ].map((section, index) => (
              <ul key={index} className="footer-list">
                <li>
                  <p className="footer-link-title">{section.title}</p>
                </li>
                {section.links.map((link, index) =>
                  typeof link === "string" ? (
                    <li key={index}>
                      <a href="#" className="footer-link">
                        {link}
                      </a>
                    </li>
                  ) : (
                    <li key={index} className="contact-item">
                      <span>{link.text.split(" : ")[0]} : </span>
                      <a href={link.href} className="contact-link">
                        {link.text.split(" : ")[1]}
                      </a>
                    </li>
                  )
                )}
              </ul>
            ))}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="copyright">
          &copy; 2024 <a href="#">Taxi Fleet Solutions</a>. All right reserved
        </p>
      </div>
    </>
  );
}

export default Footer;
