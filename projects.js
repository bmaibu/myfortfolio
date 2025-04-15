window.onload = () => {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('show');
      }, index * 200); // delay animation by index
    });
  };
  function goHome() {
   window.location.href = "index.html";
 }