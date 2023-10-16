var crsr = document.querySelector("#cursor")

document.addEventListener("mousemove", function(dets){

crsr.style.left= dets.x-12+"px"
crsr.style.top = dets.y-12 + "px"

})

var blur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove", function(dets){

blur.style.left= dets.x-200+"px"
blur.style.top = dets.y-200 + "px"

})



gsap.to("#nav",{
    backgroundColor : "#000",
    height: "110px",
    duration: 0.5,
    scrollTrigger:{
        trigger: "#nav",
        scroller: "body",
        markers:true,
        start:"top -10%",
        end: "top -11%",
        scrub:1,

    }
})

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        markers:true,
        start:"top -30%",
        end:"top -70%",
        scrub:2
    }
})