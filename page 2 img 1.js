const images0 = ["photo/welcome 10.jpg", "photo/welcome 9.jpg",
     "photo/welcome 11.jpg",
    "photo/welcome 13.jpg",
    "photo/607e055aa413c31405b5e95417905a39.jpg"
  ];
  
  const texts = [
    "Sakura Temple - japan",
    "Mount Fuji - japan",
    "Magome - japan",
    "Tokyo - japan",
    "itsukushima - japan"
  ];
  
  let current = 0;
  
  function showImg(index) {
    const imageElement = document.querySelector(".image-container0 img");
    const overlayTextElement = document.querySelector(".overlay-text0");
  
    imageElement.style.opacity = 0;
    setTimeout(() => {
      imageElement.src = images0[index];
      overlayTextElement.textContent = texts[index];
      imageElement.style.opacity = 1;
    }, 300);
  }
  
  function showPreviousImg() {
    current = (current - 1 + images0.length) % images0.length;
    showImg(current);
  }
  
  function showNextImg() {
    current = (current + 1) % images0.length;
    showImg(current);
  }
  