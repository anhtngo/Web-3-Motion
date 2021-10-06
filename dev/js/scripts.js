import { gsap } from "gsap";

// console.log("hello");

const mainTL = gsap.timeline();

// fade in the picture
mainTL.from("#img",{duration:2, alpha:0});


// fade in the first text 
gsap.from("#h1", {opacity: 0, duration: 1, delay: 1})

// fade in the 2nd text 
gsap.from("#h2", {opacity: 0, duration: 1, delay: 1.25})

// fade in the 3th text 
gsap.from("#h3", {opacity: 0, duration: 1, delay: 1.5})