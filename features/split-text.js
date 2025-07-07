function splitText() {
  const elements = gsap.utils.toArray(".fade-text");
  const navHeight = document.getElementById("nav")?.offsetHeight || 0;
  elements.forEach(el => {
    const split = SplitText.create(el, { 
      type: "lines", 
      autoSplit: true,
      onSplit: (self) => {
        return fade(self.lines, navHeight)
      }
    });
  }) 
}

