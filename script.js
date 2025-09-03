gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const smoother = ScrollSmoother.create({
   wrapper: "#smooth-wrapper",
   content: "#smooth-content",
   smooth: 2.5,
   smoothTouch: 0.1,
   effects: true,
});

const tl =gsap.timeline();

tl.to(".loading", {
    width: "100%",
    duration: 0.7,
    delay: 0.3,
})
.to(".caplogo", {
    scale: 2,
    duration: 0.5,
    opacity: 0,
},'a')
.to(".capsul", {
    clipPath: "inset(0% 0% 0% 0%)",
}, 'a'); 

const tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1",
        start: "90% 80%",
        end: "155% 80%",
        scrub: true,
    }
})

tl1.to("#bgimage", {
    transform: "scale(1.05)",
})


const tl2 = gsap.timeline({
    ScrollTrigger: {
        trigger: ".page2",
        start: "28% 70%",
        end: "100% 70%",
        scrub: 1,
    }
});

tl2.to(".page2 .bottom", {
    y: 760,
})