
var crsr=document.querySelector('.cursor')
document.addEventListener("mousemove",function (dets) {
    crsr.style.left=dets.x+20+"px"
    crsr.style.top=dets.y+20+'px'
    
})

const myText = new SplitType('.mid-txt')

gsap.to('.char',{
y:0,
stagger:0.05,
delay:0.1,
duration:0.2,
ease: 'power3'
})
gsap.fromTo('.msg i',{
    opacity:0,
    duration:2,
    delay:2,
    repeat:-1,
},{
    opacity:1,
    repeat:-1,
    duration:2,
    delay:2,
})
gsap.from('nav',{
    autoAlpha:0,
    duration:3,
    y:-100
})
var tl= gsap.timeline();
tl
.from('.msg,.coffee',{
    autoAlpha:0,
    scale:2,
    duration:1,
    delay:1
})
.from('.mail,.cof',{
    autoAlpha:0,
    duration:2
})
gsap.from('.socials',{
    opacity:0,
    x:-100,
    duration:1,
    stagger:0.5,
    scrollTrigger:{
        trigger:'.socials',
        toggleActions: 'play none none reverse',
        start:'top 60%',
       // markers:true
    }
})
gsap.to('.main',{
    backgroundColor:'black',
    duration:1,
    scrollTrigger:{
        trigger:'.page2',
        scroller:'body',
        //markers:true,
        start:'top 50%',
        end:'top 20%',
        toggleActions: 'play none none reverse',
    }
})
/*.fromTo('.down',{
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
*/




