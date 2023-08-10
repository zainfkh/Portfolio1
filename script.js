window.onload = function() {
  window.scrollTo(0, 0);
};

var crsr=document.querySelector('.cursor')
document.addEventListener("mousemove",function (dets) {
    crsr.style.left=dets.x+20+"px"
    crsr.style.top=dets.y+20+"px"
    
})
gsap.registerPlugin(ScrollTrigger)
var textWrapper = document.querySelector(".title");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime.timeline().add({
    targets:".title .letter",
    transalteY:[100,0],
    transalteZ:0,
    opacity:[0,1],
    easing:'easeOutExpo',
    duration:4000,
    delay:(el,i)=>4800 + 40 *i
})
TweenMax.to(".box", 2.4, {
    y: "-100%",
    ease: Expo.easeInOut,
    delay: 1,
  });
  TweenMax.from(".hero-img", 4, {
    scale: "2",
    ease: Expo.easeInOut,
    delay: 0,
  });
  TweenMax.to(".wrapper-img", 2.4, {
    width: "400",
    height: "500",
    ease: Expo.easeInOut,
    delay: 3.6,
  });
  TweenMax.from(".img", 0.4, {
    opacity: 0,
    ease: Expo.easeInOut,
    delay: 3.4,
  });
  TweenMax.to(".left", 2, {
    x: "-400",
    rotation: -10,
    ease: Expo.easeInOut,
    delay: 3.8,
  });
  
  TweenMax.to(".right", 2, {
    x: "100",
    rotation: 10,
    ease: Expo.easeInOut,
    delay: 3.8,
  });
  TweenMax.staggerFrom(
    ".menu > div, .hero-container > div",
    2,
    {
      opacity: 0,
      y: 30,
      ease: Expo.easeInOut,
      delay: 4.2,
    },
    0.1
  );  

   /* gsap.fromTo('.name',{
      letterSpacing:'10px',
      opacity:0,
      x:300,
      skewX:65
    },{
      letterSpacing:'0',
      opacity:1,
      x:0,
      skewX:0,
      duration:1,
      delay:5,
      scrollTrigger:'.name',
    })*/

    const tl= gsap.timeline();
    tl
    .from('.name,.arrow',{
      duration:1,
      autoAlpha:0,
      x:50,
      skewX:20,
      scrollTrigger:{
          trigger:'.name,.arrow',
          scrub:true,
          start: 'top 80%',
          //markers:true
      }
    })
    .fromTo('.ri-arrow-down-line',{
    autoAlpha:0,
    y:-100,
    duration:2,
    repeat:-1,
    },{
    y:0,
    autoAlpha:1,
    repeat:-1,
    duration:2
    })
    .from('.about-txt',{
    duration:2,
    autoAlpha:0,
    scale:0.5,
    scrollTrigger:{
        trigger:'.about-txt',
        scrub:true
    }
    })
    
   gsap.from('.work__title',{
    opacity:0,
    x:-100,
    scrollTrigger:{
      trigger:'.work__title',
      toggleActions: 'play none none reverse',
      start:'top 50%',
    }
   })
    gsap.fromTo('.elem', {
    opacity: 0,
    scale: 0.1,
    }, {
    opacity: 1,
    scale: 1,
    duration: 1,
    scrollTrigger: {
      trigger: '.elem', // The element that triggers the animation
      start:'top 60%', // The animation starts when the top of the element is 80% in view
      // The animation ends when the bottom of the element is 20% in view
      toggleActions: 'play none none reverse', // Play the animation when it enters the trigger area, and reverse it when it leaves
      // Add any other ScrollTrigger options you want to use
    },
    stagger: {
      amount: 1
    },
    });
var elem= document.querySelectorAll('.elem')
    document.querySelectorAll('.elem').forEach(function (elem) {
      var rotate = 0;
      var diffrot = 0;
       elem.addEventListener("mousemove", function(dets){
        var diff= dets.clientY - elem.getBoundingClientRect().top;
       diffrot = dets.clientX - rotate;
        rotate = dets.clientX;
       gsap.to(elem.querySelector('img'),{
        opacity:1,
        ease:Power3,
        top:diff,
        left:dets.clientX,
        rotate: gsap.utils.clamp(-20,20, diffrot*0.5)
       })
       })
    })
    var elem= document.querySelectorAll('.elem')
    document.querySelectorAll('.elem').forEach(function (elem) {
      var rotate = 0;
      var diffrot = 0;
       elem.addEventListener("mouseleave", function(dets){
       gsap.to(elem.querySelector('img'),{
        opacity:0,
        ease:Power3,
       })
       })
    })


