const counters = document.querySelectorAll(".stat-number");
const speed = 400;

counters.forEach((counter) => {
  const animate = () => {
    const value = +counter.getAttribute("valor");
    const data = +counter.innerText;

    const time = value / speed;
    if (data < value) {
      counter.innerText = Math.ceil(data + time);
      setTimeout(animate, 1);
    } else {
      counter.innerText = value;
    }
  };

  animate();
});
