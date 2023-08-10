gsap.from('#about h1',{
    opacity:0,
    x:100,
    stagger:0.4,
    scrollTrigger:{
        trigger:'#about h1',
        toggleActions: 'play none none reverse',
        start:'top 50%',
    }
})
gsap.from('#contact ',{
    opacity:0,
    scale:0.5,
    scrollTrigger:{
        trigger:'#contact ',
        toggleActions: 'play none none reverse',
    }
})
