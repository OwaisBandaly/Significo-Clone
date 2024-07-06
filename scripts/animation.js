let menuList = document.querySelector(".menulist");
let closeMenu = document.querySelector(".close")
let hamburger = document.querySelector(".hamburger")
let mainSec = document.querySelector(".main")
let navbar = document.querySelector(".navbar")
menuList.style.maxHeight = "0px"

hamburger.addEventListener("click", () => {
  if (menuList.style.maxHeight == "0px") {
    menuList.style.maxHeight = "100vh"
    menuList.style.visibility = "visible"
    closeMenu.style.display = "block"
    hamburger.style.display = "none"
    menuList.classList.add("border-t-[1px]")
    navbar.classList.add("bg-black")
  }
})

closeMenu.addEventListener("click", () => {
  if (menuList.style.maxHeight == "100vh") {
    menuList.style.maxHeight = "0px"
    menuList.style.visibility = "hidden"
    closeMenu.style.display = "none"
    hamburger.style.display = "block"
    menuList.classList.remove("border-t-[1px]")
    navbar.classList.remove("bg-black")
  }
})

function homePageAnimation() {
  gsap.set(".rows", {
    scale: 5,
  });
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".home",
      start: "top top",
      end: "bottom bottom",
      scrub: 2,
    },
  });
  tl.to(
    ".vid",
    {
      "--clip": "0%",
    },
    "a"
  )
    .to(
      ".rows",
      {
        scale: 1.1,
      },
      "a"
    )
    .to(
      ".rgt",
      {
        xPercent: -5,
        ease: Power3,
      },
      "a"
    )
    .to(
      ".lft",
      {
        xPercent: 5,
        ease: Power3,
      },
      "a"
    )
    .to(
      ".rgt",
      {
        xPercent: -10,
        ease: Power4,
      },
      "b"
    )
    .to(
      ".lft",
      {
        xPercent: 10,
        ease: Power4,
      },
      "b"
    );

  //text animation-->
  let clutter1 = "";
  document
    .querySelector(".head1")
    .textContent.split("")
    .forEach(function (e) {
      // if(e === " ") clutter1+= `<span>&nbsp;</span>`
      clutter1 += `<span>${e}</span>`;
    });
  document.querySelector(".head1").innerHTML = clutter1;
  gsap.set(".head1 span", { opacity: 0 });
  gsap.to(".head1 span", {
    scrollTrigger: {
      trigger: ".home-text-main",
      start: "bottom 80%",
      end: "bottom bottom",
      scrub: 5,
    },
    opacity: 1,
    stagger: 0.01,
    ease: Power2,
  });

  let clutter2 = "";
  document
    .querySelector(".head2")
    .textContent.split("")
    .forEach(function (e) {
      // if(e === " ") clutter2+= `<span>&nbsp;</span>`
      clutter2 += `<span>${e}</span>`;
    });
  document.querySelector(".head2").innerHTML = clutter2;
  gsap.set(".head2 span", { opacity: 0 });
  gsap.to(".head2 span", {
    scrollTrigger: {
      trigger: ".home-text-main",
      start: "bottom 79%",
      end: "bottom bottom",
      scrub: 5,
    },
    opacity: 1,
    stagger: 0.01,
    ease: Power2,
  });

  let clutter3 = "";
  document
    .querySelector(".head3")
    .textContent.split("")
    .forEach(function (e) {
      // if(e === " ") clutter2+= `<span>&nbsp;</span>`
      clutter3 += `<span>${e}</span>`;
    });
  document.querySelector(".head3").innerHTML = clutter3;
  gsap.set(".head3 span", { opacity: 0 });
  gsap.to(".head3 span", {
    scrollTrigger: {
      trigger: ".home-text-main",
      start: "bottom 79%",
      end: "bottom bottom",
      scrub: 5,
    },
    opacity: 1,
    stagger: 0.01,
    ease: Power2,
  });

  let clutter4 = "";
  document
    .querySelector(".head4")
    .textContent.split("")
    .forEach(function (e) {
      // if(e === " ") clutter2+= `<span>&nbsp;</span>`
      clutter4 += `<span>${e}</span>`;
    });
  document.querySelector(".head4").innerHTML = clutter4;
  gsap.set(".head4 span", { opacity: 0 });
  gsap.to(".head4 span", {
    scrollTrigger: {
      trigger: ".home-text-main",
      start: "bottom 79%",
      end: "bottom bottom",
      scrub: 5,
    },
    opacity: 1,
    stagger: 0.01,
    ease: Power2,
  });
}

function thirdPageAnimation() {
  gsap.to(".slides", {
    scrollTrigger: {
      trigger: ".third-sec",
      start: "top top",
      end: "bottom bottom",
      scrub: 2,
    },
    xPercent: -180,
    ease: Power3,
  });
}

function fourthPageAnimation() {
  document.querySelectorAll(".listelem").forEach(function (el) {
    el.addEventListener("mousemove", function (dets) {
      gsap.to(
        this.querySelector(".float-img"),
        {
          opacity: 1,
          x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX),
          y: gsap.utils.mapRange(0, window.innerHeight, -60, 60, dets.clientY),
          ease: Power2,
          duration: 0.5,
        },
        "c"
      );
      // gsap.to(this.querySelector(".blue-hover"),
      // {
      //   height: "100%",
      // }, 'c')
    });


    el.addEventListener("mouseleave", function (dets) {
      gsap.to(
        this.querySelector(".float-img"),
        {
          opacity: 0,
          ease: Power2,
          duration: 0.5,
        },
        "c"
      );

      // gsap.to(this.querySelector(".blue-hover"),
      // {
      //   height: "0%",
      // }, 'c')
    });
  });
}

(function () {
  const locomotiveScroll = new LocomotiveScroll({
    lenisOptions: {
      smoothWheel: true,
    },
  });
})();

function fifthPageAnimation() {
  gsap.to(
    ".capsule2",
    {
      scrollTrigger: {
        trigger: ".capsules",
        start: "top 50%",
        end: "bottom bottom",
        scrub: 1,
      },
      y: 0,
      ease: Power4,
    },
    "d"
  );

  gsap.to(
    ".capsule1",
    {
      scrollTrigger: {
        trigger: ".capsules",
        start: "top 50%",
        end: "bottom bottom",
        scrub: 1,
      },
      y: 0,
      ease: Power4,
    },
    "d"
  );
}

function bodyColorChange() {
  document.querySelectorAll(".section").forEach(function (e, index, sections) {
    ScrollTrigger.create({
      trigger: e,
      start: "top 50%",
      end: "bottom 50%",
      onEnter: function () {
        // Set the theme (background color) of the page
        document.body.setAttribute("theme", e.dataset.color);

        // // Set opacity of previous sections to 0
        // for (var i = 0; i < index; i++) {
        //     sections[i].style.opacity = 0;
        // }
      },
      onEnterBack: function () {
        // Set the theme (background color) of the page
        document.body.setAttribute("theme", e.dataset.color);

        // // Set opacity of previous sections back to 1
        // for (var i = index; i < sections.length; i--) {
        //     sections[i].style.opacity = 1;
        // }
      },
    });
  });
}

function imageAnimation() {
  gsap.to(
    ".img-1",
    {
      scrollTrigger: {
        trigger: ".img-1",
        start: "top 30%",
        end: "top top",
        scrub: true,
      },
      x: 0,
      ease: Power4,
    },
    "a"
  );
  gsap.to(
    ".img-2",
    {
      scrollTrigger: {
        trigger: ".img-2",
        start: "top 30%",
        end: "top top",
        scrub: true,
      },
      x: 0,
      ease: Power4,
    },
    "a"
  );
}

function cardsAnimation() {
  document.querySelectorAll(".cards").forEach(function (e) {
    gsap.set(e, { backgroundColor: "var(--cyan)", color: "var(--dcyan)" });
    gsap.to(e, {
      scrollTrigger: {
        trigger: e,
        start: "top 59%",
        end: "top 59%",
        scrub: true,
      },
      backgroundColor: "var(--dcyan)",
      color: "var(--cyan)",
    });
  });
}

homePageAnimation();
thirdPageAnimation();
fifthPageAnimation();
bodyColorChange();
imageAnimation();
cardsAnimation();
fourthPageAnimation();


