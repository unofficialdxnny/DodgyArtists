// Scripts for index.html

function hideElementOnSmallScreen() {
    const elementToHide = document.querySelector('#hide'); // Change to the appropriate selector
  
    if (window.innerWidth <= 600) {
      elementToHide.style.display = 'none';
    } else {
      elementToHide.style.display = 'block'; // Or 'initial' depending on your desired default state
    }
  }
  
  // Attach the event listener to the window's resize event
  window.addEventListener('resize', hideElementOnSmallScreen);
  
  // Call the function initially to set the initial state
  hideElementOnSmallScreen();