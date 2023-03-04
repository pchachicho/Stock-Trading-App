import React from "react";
import ImageSlider from "./ImageSlider";
import "./About.css";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import GithubIcon from "@mui/icons-material/GitHub";

const slides = [
  { url: "http://localhost:3000/CCPhoto.jpg", title: "Cassandra" },
  { url: "http://localhost:3000/CEPhoto.jpg", title: "Connor" },
  { url: "http://localhost:3000/JWPhoto.jpg", title: "Jonovan" },
  { url: "http://localhost:3000/PHPhoto.jpg", title: "Patrick" },
];
const containerStyles = {
  width: "300px",
  height: "320px",
  margin: "0 auto",
};
function About() {
  return (
    <body className="aboutBody">
    <div className="idk">
      <h1 className="title">Meet The People Behind Invesitre</h1>
      <div style={containerStyles} className="ImageSlider">
        <ImageSlider slides={slides} />
      </div>
      <div>
        <div className="row">
          <div className="column">
            <h2>Cassandra</h2>
            <p>Here are Cassandra's socials</p>
            <a href="https://www.linkedin.com/in/cassandra-collins-88519765"  rel="noreferrer" target="_blank">
              {" "}
              {/* <LinkedInIcon />{" "} */}
            </a>
            <a href="https://github.com/cassandrarose12"  rel="noreferrer" target="_blank">
              {" "}
              {/* <GithubIcon />{" "} */}
            </a>
          </div>
          <div className="row">
          <div className="column">
            <h2>Connor</h2>
            <p>Here are Connor's socials</p>
            <a href="https://www.linkedin.com/in/connor-edwards-a36b0424b/"  rel="noreferrer" target="_blank">
              {" "}
              {/* <LinkedInIcon />{" "} */}
            </a>
            <a href="https://github.com/Connorwe"  rel="noreferrer" target="_blank">
              {" "}
              {/* <GithubIcon />{" "} */}
            </a>
          </div>
          <div className="row">
          <div className="column">
            <h2>Jonovan</h2>
            <p>Here are Jonovan's socials</p>
            <a href="https://www.linkedin.com/in/jonovan-watts-b2431012b/"   rel="noreferrer" target="_blank">
              {" "}
              {/* <LinkedInIcon />{" "} */}
            </a>
            <a href="https://github.com/jwatts41" rel="noreferrer" target="_blank">
              {" "}
              {/* <GithubIcon />{" "} */}
            </a>
          </div>
          <div className="row">
          <div className="column">
            <h2>Patrick</h2>
            <p>Here are Patrick's socials</p>
            <a href="https://www.linkedin.com/in/patrick-hachicho-9b0396236/"   rel="noreferrer" target="_blank">
              {" "}
              {/* <LinkedInIcon />{" "} */}
            </a>
            <a href="https://github.com/pchachicho"  rel="noreferrer" target="_blank">
              {" "}
              {/* <GithubIcon />{" "} */}
            </a>
          </div>
          </div>
          </div>
          </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default About;

