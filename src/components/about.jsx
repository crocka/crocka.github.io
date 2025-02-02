import React from "react";
import myImage from "../img/myImage.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      // skills: [
      //   { id: "HTML5_skill", content: "HTML5", porcentage: "80%", value: "80" },
      //   { id: "CSS3_skill", content: "CSS3", porcentage: "75%", value: "75" },
      //   {
      //     id: "JavaScript_skill",
      //     content: "JavaScript",
      //     porcentage: "90%",
      //     value: "90"
      //   },

      //   {
      //     id: "ReactJS_skill",
      //     content: "ReactJS",
      //     porcentage: "80%",
      //     value: "80"
      //   }
      // ],

      "skills": [{

        "title": "Languages & Databases",
        "items": [

          {
            "icon": "/skills/js.png",
            "title": "JavaScript"
          },
          {
            "icon": "/skills/ruby.png",
            "title": "Ruby"
          },
          {
            "icon": "/skills/html.png",
            "title": "HTML"
          },
          {
            "icon": "/skills/css.png",
            "title": "CSS"
          },
          {
            "icon": "/skills/postgresql.png",
            "title": "PostgreSQL"
          }
        ]
      },
      {
        "title": "Frameworks & Technologies",
        "items": [
          {
            "icon": "/skills/react.png",
            "title": "React"
          },
          {
            "icon": "/skills/nodejs.png",
            "title": "Nodejs"
          },
          {
            "icon": "/skills/rubyonrails.png",
            "title": "Ruby on Rails"
          }
        ]
      },
      {
        "title": "Tools & Platforms",
        "items": [
          {
            "icon": "/skills/linux.png",
            "title": "Linux"
          },
          {
            "icon": "/skills/git.png",
            "title": "Git"
          },
          {
            "icon": "/skills/github.png",
            "title": "Github"
          },
          {
            "icon": "/skills/vagrant.png",
            "title": "Vagrant"
          }
        ]
      }],

      about_me: [
        {
          id: "first-p-about",
          content:
            "With an undergraduate degree in engineering physics and with a passion for software development. I am a committed full-stack web developer, seeking professional experiences in the world of software development. I enjoy problem solving in a collaborative environment and seek to challenge myself in this fast-moving software industry. I am approved for the ECO Canada wage subsidies."
        },
        // {
        //   id: "second-p-about",
        //   content:
        //     "Lorem ipsum pariatur consectetur laboris occaecat nulla aliqua irure ad deserunt duis. Eiusmod nulla cupidatat labore sint sit aute dolore irure nostrud ut incididunt. Anim laborum reprehenderit labore magna ut dolore quis irure. Labore ea duis deserunt ullamco irure fugiat deserunt ut nisi ea minim proident. Nisi consectetur do non magna duis aliqua minim minim veniam. In occaecat minim qui consequat elit mollit consectetur non id tempor. Amet adipisicing occaecat tempor culpa quis est duis."
        // },
        // {
        //   id: "third-p-about",
        //   content:
        //     "Lorem ipsum pariatur consectetur laboris occaecat nulla aliqua irure ad deserunt duis. Eiusmod nulla cupidatat labore sint sit aute dolore irure nostrud ut incididunt. Anim laborum reprehenderit labore magna ut dolore quis irure. Labore ea duis deserunt ullamco irure fugiat deserunt ut nisi ea minim proident. Nisi consectetur do non magna duis aliqua minim minim veniam. In occaecat minim qui consequat elit mollit consectetur non id tempor. Amet adipisicing occaecat tempor culpa quis est duis."
        // }
      ]
    };
  }

  styles = {
    iconStyle: {
      height: 75,
      width: 75,
      margin: 10,
      marginBottom: 0,
    },
    introTextContainer: {
      whiteSpace: 'pre-wrap',
    },
  };

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">

                  <div className="col-md-6">
                    <div className="title-box-2">
                      <h5 className="title-left">Skills</h5>
                    </div>

                    {/* <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div> */}

                    {/* <div className="skill-mf">
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div> */}

                    <div className="section-content-container">
                      {this.state.skills.map((rows) => (
                        <div key={rows.title}>
                          <br />
                          <h3>{rows.title}</h3>
                          {rows.items.map((item) => (
                            <div key={item.title} style={{ display: 'inline-block' }}>
                              <img
                                style={this.styles.iconStyle}
                                src={item.icon}
                                alt=""
                              />
                              <p>{item.title}</p>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
