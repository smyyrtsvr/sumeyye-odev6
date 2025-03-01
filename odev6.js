function increaseCounter() {
    const counter = document.querySelector('.sayac');
    let currentCount = parseInt(counter.textContent);
    currentCount += 1;
    counter.textContent = currentCount;
  }