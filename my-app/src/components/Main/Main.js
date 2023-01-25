
import ProjectTile from "../ProjectTile/ProjectTile";
import projectsImagesArr from "../../files/js/data";
function Main() {

  return ( <main>
    <section id="welcome-section" className="py-0 vh-100 text-center col">
      <div className="mx-auto h-100 d-flex flex-column justify-content-center align-items-center">
        <h1 className="fw-light display-1 fw-bold">Zaiko Eugeni</h1>
        <p className="lead text-muted display-6">a web developer</p>
      </div>
    </section>

    <section className="col album py-5 bg-light min-vh-100 g-3 d-flex justify-content-center align-items-center"
      id="mainProjects">
      <div className="container">
        <div className="row mx-auto my-3">
          <h2 className="text-center py-5 h1 title-h2">These are some of my projects</h2>
        </div>
        {
         
          projectsImagesArr.map(el=><ProjectTile key={el.src} project={el}/>)
        }
        


        <div className="row mx-auto my-3">

          <div className="col-xl-4 col-md-6 col-sm-12 my-3">
            <div className="card shadow-sm project-tile">
              <a href="https://rahunak.github.io/advice/" target="_blank"
                className="text-dark text-decoration-none align-middle blockForImage">
                <img className="bd-placeholder-img card-img-top blockForImage__image" width="100%"
                  src="/src/components/images/advice-mobile-design.jpg" alt="advice " aria-label="Advice application" />
                <div className="card-body">
                  <p className="card-text text-center h3 projectItems">Advice</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">HTML + CSS + JavaScript + Advice API</small>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-xl-4 col-md-6 col-sm-12 my-3">
            <div className="card shadow-sm project-tile">
              <a href="https://rahunak.github.io/note-editor/" target="_blank"
                className="text-dark text-decoration-none align-middle blockForImage">
                <img className="bd-placeholder-img card-img-top blockForImage__image" width="100%"
                  src="/src/components/images/note-editor-short.png" alt="noteEditor" aria-label="noteEditor" />
                <div className="card-body">
                  <p className="card-text text-center h3 projectItems">
                    Note editor
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">React</small>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-sm-12 my-3">
            <div className="card shadow-sm project-tile">
              <a href="https://rahunak.github.io/AlfaDigitalAgency/dist/" target="_blank"
                className="text-decoration-none blockForImage">
                <img className=" blockForImage__image" src="/src/components/images/AlfaDigitalAgency.jpg" alt="shelter "
                  aria-label="AlfaDigitalAgency application" />
                <div className="card-body">
                  <p className="text-dark text-center h5 projectItems px-0">
                    AlfaDigitalAgency
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">HTML + SCSS + JavaScript</small>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-xl-4 col-md-6 col-sm-12 my-3">
            <div className="card shadow-sm project-tile">
              <a href="https://rolling-scopes-school.github.io/rahunak-JSFE2022Q1/SHELTER/" target="_blank"
                className="text-decoration-none blockForImage">
                <img className=" blockForImage__image" src="/src/components/images/shelter.png" alt="shelter "
                  aria-label="shelter application" />
                <div className="card-body">
                  <p className="text-dark text-center h3 projectItems">Shelter</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">HTML + CSS + JavaScript</small>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-xl-4 col-md-6 col-sm-12 my-3">
            <div className="card shadow-sm project-tile">
              <a href="https://rahunak.github.io/cssMemSlider/cssMemeSlider/" target="_blank"
                className="text-decoration-none blockForImage">
                <img className="blockForImage__image" src="/src/components/images/slider.png" alt="shelter "
                  aria-label="slider application" />
                <div className="card-body">
                  <p className="text-dark text-center h3 projectItems">Slider</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">only HTML + pure CSS</small>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-xl-4 col-md-6 col-sm-12 my-3">
            <div className="card shadow-sm project-tile">
              <a href="https://rahunak.github.io/Dictionary/" target="_blank"
                className="text-decoration-none blockForImage">
                <img className="blockForImage__image" src="/src/components/images/dictionary.png" alt="shelter "
                  aria-label="shelter application" />
                <div className="card-body">
                  <p className="text-dark text-center h3 projectItems">
                    Dictionary
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">React-Redux + Material UI + Dictionary API</small>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-xl-4 col-md-6 col-sm-12 my-3">
            <div className="card shadow-sm project-tile">
              <a href="https://rahunak.github.io/virtual-keyboard/dist/" target="_blank"
                className="text-decoration-none blockForImage">
                <img className="blockForImage__image" src="/src/components/images/keyboard.png" alt="shelter "
                  aria-label="shelter application" />
                <div className="card-body">
                  <p className="text-dark text-center h3 projectItems">
                    Keyboard
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">only JavaScript + Scss</small>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-xl-4 col-md-6 col-sm-12 my-3">
            <div className="card shadow-sm project-tile">
              <a href="https://rolling-scopes-school.github.io/rahunak-JSFE2022Q3/codejam/" target="_blank"
                className="text-decoration-none blockForImage">
                <img className="blockForImage__image" src="/src/components/images/codeJam.png" alt="codeJam "
                  aria-label="shelter application" />
                <div className="card-body">
                  <p className="text-dark text-center h3 projectItems">
                    code Jam
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">only JavaScript + Scss</small>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-xl-4 col-md-6 col-sm-12 my-3">
            <div className="card shadow-sm project-tile">
              <a href="https://rolling-scopes-school.github.io/rahunak-JSFE2022Q3/songBird/" target="_blank"
                className="text-decoration-none blockForImage">
                <img className="blockForImage__image" src="/src/components/images/songBird_quiz.png" alt="shelter "
                  aria-label="shelter application" />
                <div className="card-body">
                  <p className="text-dark text-center h3 projectItems">
                    Song Bird
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">only JavaScript + Scss</small>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-xl-4 col-md-6 col-sm-12 my-3">
            <div className="card shadow-sm project-tile">
              <a href="https://rahunak.github.io/Hedgehogs/dist/" target="_blank"
                className="text-decoration-none blockForImage">
                <img className="blockForImage__image" src="/src/components/images/hedgehogs.png" alt="hedgehogs "
                  aria-label="shelter application" />
                <div className="card-body">
                  <p className="text-dark text-center h3 projectItems">
                    Hedgehogs
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">HTML + Scss + JS</small>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-xl-4 col-md-6 col-sm-12 my-3">
            <div className="card shadow-sm project-tile">
              <a href="https://rolling-scopes-school.github.io/rahunak-JSFE2022Q3/online-zoo" target="_blank"
                className="text-decoration-none blockForImage">
                <img className="blockForImage__image" src="/src/components/images/online-zoo.png" alt="online-zoo "
                  aria-label="shelter application" />
                <div className="card-body">
                  <p className="text-dark text-center h3 projectItems">
                    Online Zoo
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">HTML + Scss + JS</small>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-xl-4 col-md-6 col-sm-12 my-3">
            <div className="card shadow-sm project-tile">
              <a href="https://rahunak.github.io/EfimchikStudio/" target="_blank"
                className="text-decoration-none blockForImage">
                <img className="blockForImage__image" src="/src/components/images/efimchik-landing.png" alt="shelter "
                  aria-label="shelter application" />
                <div className="card-body">
                  <p className="text-dark text-center h3 projectItems">
                    Efimchik landing
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">HTML + Scss + JS + AOS</small>
                  </div>
                </div>
              </a>
            </div>
          </div>
       
          <div className="col-xl-4 col-md-6 col-sm-12 my-3">
            <div className="card shadow-sm project-tile">
              <a href="https://rahunak.github.io/circle-slider/slider/" target="_blank"
                className="text-decoration-none blockForImage">
                <img className="blockForImage__image" src="/src/components/images/circleSlider.png" alt="circle slider "
                  aria-label="shelter application" />
                <div className="card-body">
                  <p className="text-dark text-center h3 projectItems">
                   Slider
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">HTML + Scss</small>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-xl-4 col-md-6 col-sm-12 my-3">
            <div className="card shadow-sm project-tile">
              <a href="https://rahunak.github.io/bare-bouns-template/menu_items/" target="_blank"
                className="text-decoration-none blockForImage">
                <img className="blockForImage__image" src="/src/components/images/menu_items.png" alt="menu items"
                  aria-label="shelter application" />
                <div className="card-body">
                  <p className="text-dark text-center h3 projectItems">
                    menu links
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">HTML + Scss + JS</small>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-xl-4 col-md-6 col-sm-12 my-3">
            <div className="card shadow-sm project-tile">
              <a href="https://rahunak.github.io/bare-bouns-template/garland/" target="_blank"
                className="text-decoration-none blockForImage">
                <img className="blockForImage__image" src="/src/components/images/garland.png" alt="menu items"
                  aria-label="shelter application" />
                <div className="card-body">
                  <p className="text-dark text-center h3 projectItems">
                    Garland
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">HTML + Scss </small>
                  </div>
                </div>
              </a>
            </div>
          </div>

        </div>


      </div>



    </section>

    <section className="col py-0 vh-100 text-center container">
      <div className="mx-auto h-100 d-flex flex-column justify-content-center align-items-center">
        <div className="mb-5">
          <h1 className="fw-light display-1 fw-bold">Let's work together...</h1>

        </div>
        <div className="d-flex flex-row justify-content-center ">
          <div className="footerItems p-3">
            <a href="#">
              <p className="h2">
                <a href="https://github.com/rahunak" target="_blank" className="text-dark text-decoration-none ">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                    className="bi bi-github" viewBox="0 0 16 20">
                    <path
                      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                  Git
                </a>
              </p>
            </a>
          </div>

          <div className="footerItems p-3">
            <a href="https://www.linkedin.com/in/rahunak/" target="_blank" className="text-dark text-decoration-none">
              <p className="h2">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                  className="bi bi-linkedin" viewBox="0 0 16 20">
                  <path
                    d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
                Linkedin
              </p>
            </a>
          </div>

          <div className="footerItems p-3">
            <a href="tel:+375257810998" className="text-decoration-none text-dark">
              <p className="h2">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-phone"
                  viewBox="0 0 16 20">
                  <path
                    d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                </svg>
                Call me
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>
  );
}

export default Main;
