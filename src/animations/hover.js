import gsap from "gsap";

export const buttonHover = () => {

  document.querySelectorAll(".btn").forEach((button) => {

    button.addEventListener("mouseenter", () => {

      gsap.to(button, {

        scale: 1.05,

        duration: .3

      });

    });

    button.addEventListener("mouseleave", () => {

      gsap.to(button, {

        scale: 1,

        duration: .3

      });

    });

  });

};