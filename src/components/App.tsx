import "./App.css";
import imageAvt from "../images/lamisreal.jpeg";

function Component(props: any) {
  return (
    <>
      <h5 className="w3-opacity">
        <b>{props.work.opacity}</b>
      </h5>
      {props.work.calendarFrom && props.work.calendarTo ? (
        <h6 className="w3-text-teal">
          <i className="fa fa-calendar fa-fw w3-margin-right" />
          {props.work.calendarFrom} -{" "}
          <span className="w3-tag w3-teal w3-round">
            {props.work.calendarTo}
          </span>
        </h6>
      ) : (
        <></>
      )}
      {props.work.decs.map((item: string, num: number) => (
        <div key={num}>{item}</div>
      ))}

      {props.work.link ? (
        <div>
          Link:{" "}
          <a target="popup" href={props.work.link}>
            {props.work.link}
          </a>
        </div>
      ) : (
        <></>
      )}
      {props.work.isLast ? <br /> : <hr />}
    </>
  );
}

function App() {
  const workExperience: any = [
    {
      opacity: "FRONT END DEVELOPER / SONY BANK (BANKING SERVICES)",
      calendarFrom: "",
      calendarTo: "",
      decs: [
        "ISB VIET NAM CO.,LTD | Full-time | Developer | Japan - China",
        "Language: JavaScript (React JS).",
        "User Interface: Storybook and Adobe XD.",
        "Code: Frontend server and Frontend client",
        "Framework: Nest JS.",
        "This project includes banking services, banking management, and customer service. This application consists of two main components:",
        "1. Application for employees in the bank.",
        "2. Application for customers.",
      ],
      link: "",
      isLast: false,
    },
    {
      opacity: "MOBILE APP DEVELOPER / CUSTOMER CARE (ESTORE APP)",
      calendarFrom: "",
      calendarTo: "",
      decs: [
        "ARI Technology CO., JSC | Full-time | Developer",
        "Language: Java.",
        "User Interface:",
        "+ Draw UI on the storyboard, Android Studio.",
        "+ Design.",
        "Code: Load coupon from dummy data, build framework and code logic for app.",
        "Framework: MVP, Android SDK.",
        "The project is about customer care, customer management, watch the news.",
      ],
      link: "",
      isLast: false,
    },
    {
      opacity:
        "MOBILE APP DEVELOPER / DELIVER USEFUL INFORMATION FOR MOMS(SHAKEHANDSMAGAZINE)",
      calendarFrom: "",
      calendarTo: "",
      decs: [
        "ARI Technology CO., JSC | Full-time | Developer | Japan",
        "Language: Java.",
        "User Interface: Design UI in Adobe XD and build UI by Android Studio Code: Using Webview, load coupon from dummy data, code logic for app.",
        "Framework: MVP, Android SDK.",
        "Get a coupon with a beacon! You can watch 5 famous animes every month, lots of information about HappyMama Festa!",
        "Link to google play store:",
      ],
      link: "https://play.google.com/store/apps/details?id=jp.co.cogito.shakehands.mag",
      isLast: false,
    },
    {
      opacity: "UNIVERSITY PROJECT / CAFE MANAGEMENT",
      calendarFrom: "",
      calendarTo: "",
      decs: [
        "THU DUC College of Technology | Teamwork | Developer",
        "Language: Kotlin.",
        "Implement, design detail and document:",
        "+ Design UI by Adobe XD.",
        "+ Design mokup UI by Balsamiq Mockups.",
        "+ Firebase using firestore.",
        "+ Material UI.",
        "+ Kotlinlang.",
        "Managing the chain of coffee shops in the regionsuch as people, resources.Warehouse management, product planning out of stock.",
      ],
      link: "https://github.com/enpiech/cafe_management",
      isLast: true,
    },
  ];

  const education: any = [
    {
      opacity: "THU DUC COLLEGE OF TECHNOLOGY / INFORMATION TECHNOLOGY",
      calendarFrom: "2017",
      calendarTo: "2021",
      decs: ["GPA: 7.46"],
      isLast: true,
    },
  ];

  const user = {
    name: "Cao Thanh Lâm",
    work: "WEB APP - SOFTWARE ENGINEERING",
    adress: "Binh Duong, Viet Nam",
    email: "lam.ct2910@gmail.com",
    phone: "0379654050",
  };

  return (
    <div>
      <div className="w3-content w3-margin-top" style={{ maxWidth: "1400px" }}>
        {/* The Grid */}
        <div className="w3-row-padding">
          {/* Left Column */}
          <div className="w3-third">
            <div className="w3-white w3-text-grey w3-card-4">
              <div className="w3-display-container">
                <img src={imageAvt} style={{ width: "100%" }} alt="lamisreal" />
                <div className="w3-display-bottomleft w3-container w3-text-white">
                  <h2>{user.name}</h2>
                </div>
              </div>
              <br />
              <div className="w3-container">
                <p>
                  <i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal" />
                  {user.work}
                </p>
                <p>
                  <i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal" />
                  {user.adress}
                </p>
                <p>
                  <i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal" />
                  {user.email}
                </p>
                <p>
                  <i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal" />
                  {user.phone}
                </p>
                <hr />
                <p className="w3-large">
                  <b>
                    <i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal" />
                    Skills
                  </b>
                </p>
                <p>Adobe Photoshop</p>
                <div className="w3-light-grey w3-round-xlarge w3-small">
                  <div
                    className="w3-container w3-center w3-round-xlarge w3-teal"
                    style={{ width: "90%" }}
                  >
                    90%
                  </div>
                </div>
                <p>Photography</p>
                <div className="w3-light-grey w3-round-xlarge w3-small">
                  <div
                    className="w3-container w3-center w3-round-xlarge w3-teal"
                    style={{ width: "80%" }}
                  >
                    <div className="w3-center w3-text-white">80%</div>
                  </div>
                </div>
                <p>Illustrator</p>
                <div className="w3-light-grey w3-round-xlarge w3-small">
                  <div
                    className="w3-container w3-center w3-round-xlarge w3-teal"
                    style={{ width: "75%" }}
                  >
                    75%
                  </div>
                </div>
                <p>Media</p>
                <div className="w3-light-grey w3-round-xlarge w3-small">
                  <div
                    className="w3-container w3-center w3-round-xlarge w3-teal"
                    style={{ width: "50%" }}
                  >
                    50%
                  </div>
                </div>
                <br />
                <p className="w3-large w3-text-theme">
                  <b>
                    <i className="fa fa-globe fa-fw w3-margin-right w3-text-teal" />
                    Languages
                  </b>
                </p>
                <p>English</p>
                <div className="w3-light-grey w3-round-xlarge">
                  <div
                    className="w3-round-xlarge w3-teal"
                    style={{ height: "24px", width: "100%" }}
                  />
                </div>
                <p>Spanish</p>
                <div className="w3-light-grey w3-round-xlarge">
                  <div
                    className="w3-round-xlarge w3-teal"
                    style={{ height: "24px", width: "55%" }}
                  />
                </div>
                <p>German</p>
                <div className="w3-light-grey w3-round-xlarge">
                  <div
                    className="w3-round-xlarge w3-teal"
                    style={{ height: "24px", width: "25%" }}
                  />
                </div>
                <br />
              </div>
            </div>
            <br />
            {/* End Left Column */}
          </div>
          {/* Right Column */}
          <div className="w3-twothird">
            <div className="w3-container w3-card w3-white w3-margin-bottom">
              <h2 className="w3-text-grey w3-padding-16">
                <i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal" />
                Work Experience
              </h2>
              {workExperience && workExperience.length > 0 ? (
                workExperience.map((data: any, index: number) => (
                  <div className="w3-container" key={index}>
                    <Component work={data} />
                  </div>
                ))
              ) : (
                <></>
              )}
            </div>
            <div className="w3-container w3-card w3-white">
              <h2 className="w3-text-grey w3-padding-16">
                <i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal" />
                Education
              </h2>
              {education && education.length > 0 ? (
                education.map((data: any, index: number) => (
                  <div className="w3-container" key={index}>
                    <Component work={data} />
                  </div>
                ))
              ) : (
                <></>
              )}
            </div>
            {/* End Right Column */}
          </div>
          {/* End Grid */}
        </div>
        {/* End Page Container */}
      </div>
      <footer className="w3-container w3-teal w3-center w3-margin-top">
        <p>Find me on social media.</p>
        <i className="fa fa-facebook-official w3-hover-opacity" />{" "}
        <i className="fa fa-instagram w3-hover-opacity" />{" "}
        <i className="fa fa-linkedin w3-hover-opacity" />{" "}
        <p>
          Powered by{" "}
          <a
            rel="noopener noreferrer"
            href="https://www.w3schools.com/w3css/default.asp"
            target="_blank"
          >
            w3.css
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
