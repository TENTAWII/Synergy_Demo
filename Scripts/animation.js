const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  const targetCount = parseInt(card.dataset.count, 10);

  let count = 0;
  const duration = 1000;
  const increment = Math.ceil(targetCount / (duration / 5));

  const interval = setInterval(() => {
    count += increment;

    if (count >= targetCount) {
      count = targetCount;
      clearInterval(interval);
    }

    card.querySelector('h2').innerText = count.toString();
  }, 10);
});