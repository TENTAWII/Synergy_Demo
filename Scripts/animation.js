const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  const targetCount = parseInt(card.dataset.count, 10);

  let count = 0;
  const duration = 2000;
  const increment = Math.ceil(targetCount / (duration / 10));

  const interval = setInterval(() => {
    count += increment;

    if (count >= targetCount) {
      count = targetCount;
      clearInterval(interval);
    }

    card.querySelector('h2').innerText = count.toString();
  }, 10);
});