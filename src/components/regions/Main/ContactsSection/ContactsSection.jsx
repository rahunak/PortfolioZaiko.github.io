import React from 'react';

import style from './style.module.css';
function ContactsSection() {
  window.addEventListener('scroll', function(e) {
    if(window.scrollY > 600 ){
      this.document.querySelector('#contact-section').classList.remove(style.bg_black);
      this.document.querySelector('#contact-section').classList.add(style.bg_white);
      let texts = this.document.querySelectorAll("#contact-section a");
     texts.forEach(link=>{
      link.classList.add(style.text_black);
      link.classList.remove(style.text_white);
      });
      this.document.querySelector('#h1').classList.add(style.text_black);
      this.document.querySelector('#h1').classList.remove(style.text_white);
    }else{
      let texts = this.document.querySelectorAll("#contact-section a");
      this.document.querySelector('#h1').classList.remove(style.text_black);
      this.document.querySelector('#h1').classList.add(style.text_white);
      texts.forEach(link=>{
        link.classList.remove(style.text_black);
        link.classList.add(style.text_white);
        })
      this.document.querySelector('#contact-section').classList.add(style.bg_black);
      this.document.querySelector('#contact-section').classList.remove(style.bg_white);
    }
  });
  return (
    <section id="contact-section" className={style.bg_black + " col py-0 vh-100 text-center  "+style.wrapper}>

      <div className="mx-auto h-100 d-flex flex-column justify-content-center align-items-center">



        <div  className="mb-5">

          <h1 id="h1" className={style.text_white +" fw-light display-1 fw-bold "+ style.text }>Let&apos;s work together...</h1>
        </div>
        <div className={"d-flex flex-row justify-content-center "+style.relative}>
          <div id="placeForShapes" className={style.placeForShapes}>
          </div>
          <div className="footerItems p-3">
            <p className="h2">
              <a href="https://github.com/rahunak" target="_blank" className={style.text_white + " text-decoration-none "+ style.text } rel="noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-github"
                  viewBox="0 0 16 20"
                >
                  <path
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                  />
                </svg>
                Git
              </a>
            </p>
          </div>

          <div className="footerItems p-3">
            <a href="https://www.linkedin.com/in/rahunak/" target="_blank" className={style.text_white +" text-decoration-none "+ style.text } rel="noreferrer">
              <p className="h2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-linkedin"
                  viewBox="0 0 16 20"
                >
                  <path
                    d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                  />
                </svg>
                Linkedin
              </p>
            </a>
          </div>

          <div className="footerItems p-3">
          <p className="h2">
            <a href="tel:+375257810998" className={style.text_white + " text-decoration-none "+ style.text }>
              
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-phone"
                  viewBox="0 0 16 20"
                >
                  <path
                    d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"
                  />
                  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                </svg>
                Call me
            </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ContactsSection;
