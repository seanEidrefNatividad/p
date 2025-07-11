function fade(lines, containerHeight) {
  lines.forEach(el => {
    const tl = gsap.timeline({
      scrollTrigger: {
        id: "fade",
        trigger: el,
        start: "top 97%",
        end:   `bottom ${containerHeight + 5}px`,
        scrub: true,
        // markers: true
      }
    });

    // 1. Fade-in each line, one after another
    tl.fromTo(el,
      { opacity: 0, y: 5 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.4,
        ease: "power2.out"
      },
      0
    )

    tl.to(el,
      {
        opacity: 0,
        y: -5,
        stagger: 0.4,
        ease: "power2.out"
      },
      "+=4.6"
    )
  })
}