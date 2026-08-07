import gsap from "gsap";

export const heroAnimation = () => {
  const tl = gsap.timeline();

  tl.from(".hero-subtitle", {
    y: 30,
    opacity: 0,
    duration: 0.6,
  })
    .from(".hero-label", {
      y: 30,
      opacity: 0,
      duration: 0.6,
    }, "-=0.3")
    .from(".hero-title", {
      y: 50,
      opacity: 0,
      duration: 0.8,
    }, "-=0.3")
    .from(".hero-text", {
      y: 30,
      opacity: 0,
      duration: 0.6,
    }, "-=0.4")
    .from(".hero-buttons", {
      y: 30,
      opacity: 0,
      duration: 0.6,
    }, "-=0.4")
    .from(".hero-image", {
      x: 80,
      opacity: 0,
      duration: 1,
    }, "-=0.5");
};