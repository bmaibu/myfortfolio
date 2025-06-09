function animateBar(id, percent) {
    const bar = document.getElementById(id);
    let current = 0;

    const interval = setInterval(() => {
      if (current >= percent) {
        clearInterval(interval);
      } else {
        current++;
        bar.style.width = current + '%';
        bar.textContent = current + '%';
      }
    }, 20);
  }

  // Animate all skill bars on load
  window.onload = () => {
    animateBar("html-bar", 60);
    animateBar("css-bar", 50);
    animateBar("js-bar", 40);
    animateBar("react-bar", 40);
    animateBar("cpp-bar", 45);
    animateBar("dsa-bar", 25);
  };
