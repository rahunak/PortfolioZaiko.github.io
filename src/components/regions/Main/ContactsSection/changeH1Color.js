window.addEventListener("scroll", function(e) {
  if (window.scrollY > 600) {
    this.document
      .querySelector("#contact-section")
      .classList.remove(style.bg_black);
    this.document
      .querySelector("#contact-section")
      .classList.add(style.bg_white);
    let texts = this.document.querySelectorAll("#contact-section a");
    texts.forEach(link => {
      link.classList.add(style.text_black);
      link.classList.remove(style.text_white);
    });
    this.document.querySelector("#h1").classList.add(style.text_black);
    this.document.querySelector("#h1").classList.remove(style.text_white);
  } else {
    let texts = this.document.querySelectorAll("#contact-section a");
    this.document.querySelector("#h1").classList.remove(style.text_black);
    this.document.querySelector("#h1").classList.add(style.text_white);
    texts.forEach(link => {
      link.classList.remove(style.text_black);
      link.classList.add(style.text_white);
    });
    this.document
      .querySelector("#contact-section")
      .classList.add(style.bg_black);
    this.document
      .querySelector("#contact-section")
      .classList.remove(style.bg_white);
  }
});
