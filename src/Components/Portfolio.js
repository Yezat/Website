import React, { Component } from "react";


let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;

      return (
        <div key={id++} className="columns portfolio-item">
          <a href={projects.url} >
            <div className="item-wrap">
              <img alt={projects.title} src={projectImage} />
              <div style={{ textAlign: "center" }}>{projects.title}</div>
            </div>
          </a>
        </div>
      );
    });

    return (
      <section id="portfolio">
        
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some of My Works.</h1>

              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {projects}
              </div>
            </div>
          </div>
        
      </section>
    );
  }
}

export default Portfolio;
