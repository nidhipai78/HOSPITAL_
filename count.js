  // Define target numbers for each box
  const targetNumbers = [140, 1040, 500, 80];
  let countingStarted = [false, false, false, false]; // Flags to track if counting has started for each box
  
  // Function to start counting for a specific box
  function startCounting(boxIndex) {
    let currentNumber = 0;
    const countElement = document.getElementById(`count${boxIndex}`);
    
    // Interval function to increment the count
    const interval = setInterval(() => {
      // Update the count
      countElement.textContent = currentNumber + "+";
      // Increment the current number
      currentNumber++;
      // If the current number reaches the target, stop counting
      if (currentNumber > targetNumbers[boxIndex - 1]) {
        clearInterval(interval);
      }
    }, 50); // Adjust the interval duration for speed
  }
  
  // Function to check if the element is in viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Function to handle scroll event
  function handleScroll() {
    for (let i = 1; i <= 4; i++) {
      const countBox = document.getElementById(`countBox${i}`);
      // If the count box is in viewport and counting hasn't started yet, start counting
      if (isInViewport(countBox) && !countingStarted[i - 1]) {
        startCounting(i);
        countingStarted[i - 1] = true;
      }
    }
  }

  // Add scroll event listener
  window.addEventListener('scroll', handleScroll);