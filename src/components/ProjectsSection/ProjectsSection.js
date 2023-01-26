import projectsImagesArr from "../../files/js/data";
import ProjectTile from "../ProjectTile/ProjectTile";

function ProjectsSection(){
    return(
        <section className="col album py-5 bg-light min-vh-100 g-3 d-flex justify-content-center align-items-center"
        id="mainProjects">
        <div className="container">
          <div className="row mx-auto my-3">
            <h2 className="text-center py-5 h1 title-h2">These are some of my projects</h2>
          </div>/PortfolioZaiko.2.github.io/my-app/src/files/js/data.js
          <div className="row mx-auto my-3">
           { projectsImagesArr.map(el=><ProjectTile key={el.src} project={el}/>) }
          </div>
        </div>
      </section>
    );
}
export default ProjectsSection;