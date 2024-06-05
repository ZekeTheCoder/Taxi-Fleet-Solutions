import React from "react";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-top">
          {/* <div className="container"> */}
          <div className="footer-brand">
            {/* <a href="#" className="logo">
              <img
                src="src\Components\Homepage\assets\images\logo.svg"
                alt="TFS logo"
              />
            </a> */}
            {/* <p className="footer-text">
              Professionally taxi fleet solutions for your taxi business needs.
            </p> */}
            <ul className="social-list">
              {["google", "twitter", "instagram", "linkedin"].map(
                (platform, index) => (
                  <li key={index}>
                    <a href="#" className="social-link">
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
                title: "Services",
                links: [
                  "Business Data Analysis",
                  "Income and Expense Tracker",
                  "Human Resource Capital",
                ],
              },
              {
                title: "Company",
                links: ["About", "Terms", "Privacy Policy", "Careers"],
              },
              { title: "Job Info", links: ["Select", "Services", "Payment"] },
              {
                title: "Contact",
                links: [
                  { text: "Call : 071 234 5678", href: "tel:011 234 5678" },
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
        {/* <div className="container"> */}
        <p className="copyright">
          &copy; 2024 <a href="#">Taxi Fleet Solutions</a>. All right reserved
        </p>
      </div>
      {/* </div> */}
      {/* </div> */}
    </>
  );
}

export default Footer;
