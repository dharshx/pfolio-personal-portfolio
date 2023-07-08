document.addEventListener("DOMContentLoaded", function() {
  // Smooth scrolling
  const hireButton = document.querySelector(".btn-hire");
  const projectsButton = document.querySelector(".btn-projects");
  const connectButton = document.querySelector(".btn-talk");

  if (hireButton) {
    hireButton.addEventListener("click", () => smoothScroll("#home"));
  }

  if (projectsButton) {
    projectsButton.addEventListener("click", () => smoothScroll("#projects"));
  }

  if (connectButton) {
    connectButton.addEventListener("click", () => smoothScroll("#contact"));
  }

  function smoothScroll(target) {
    const targetElement = document.querySelector(target);
    const targetPosition = targetElement.offsetTop;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  }

  // Reload website when logo is clicked
  const logo = document.querySelector(".logo");

  if (logo) {
    logo.addEventListener("click", () => {
      location.reload(true); // Add true as an argument to force a full reload
    });
  }
  

  // Typewriter effect for the span element
  const texts = ["Dharshini Vasudevan", "A Result-driven Software Developer", "Your Next Best Hire!"];
  let currentTextIndex = 0;
  let currentText = '';
  let isDeleting = false;
  let typewriterElement = document.getElementById('typewriter');

  function type() {
    if (currentTextIndex >= texts.length) {
      currentTextIndex = 0;
    }

    const fullText = texts[currentTextIndex];

    if (isDeleting) {
      currentText = fullText.substring(0, currentText.length - 1);
    } else {
      currentText = fullText.substring(0, currentText.length + 1);
    }

    typewriterElement.innerHTML = currentText;

    let typingSpeed = 200; // Adjust typing speed as desired

    if (isDeleting) {
      typingSpeed /= 2;
    }

    if (!isDeleting && currentText === fullText) {
      typingSpeed = 1500; // Delay before erasing the text
      isDeleting = true;
    } else if (isDeleting && currentText === '') {
      isDeleting = false;
      currentTextIndex++;
      typingSpeed = 500; // Delay before typing the next text
    }

    setTimeout(type, typingSpeed);
  }

  // Start the typewriter effect when the page is loaded
  type();

// timeline functionality for experience section
const timelineContainer = document.querySelector(".timeline-container");
if (!timelineContainer) {
  console.error("Timeline container not found!");
  return;
}

const timelines = Array.from(timelineContainer.querySelectorAll(".timeline"));
const scrollIndicators = Array.from(document.querySelectorAll(".scroll-indicator"));

let currentTimelineIndex = 0;

function updateTimeline() {
  timelines.forEach((timeline, index) => {
    if (index === currentTimelineIndex) {
      timeline.classList.add("active");
    } else {
      timeline.classList.remove("active");
    }
  });

  scrollIndicators.forEach((indicator, index) => {
    if (index === currentTimelineIndex) {
      indicator.classList.add("active");
    } else {
      indicator.classList.remove("active");
    }
  });
}

function scrollToNextTimeline() {
  if (currentTimelineIndex < timelines.length - 1) {
    currentTimelineIndex++;
    const timelineWidth = timelineContainer.clientWidth;
    timelineContainer.scrollTo({
      left: currentTimelineIndex * timelineWidth,
      behavior: "smooth",
    });
    updateTimeline();
  }
}

function scrollToPrevTimeline() {
  if (currentTimelineIndex > 0) {
    currentTimelineIndex--;
    const timelineWidth = timelineContainer.clientWidth;
    timelineContainer.scrollTo({
      left: currentTimelineIndex * timelineWidth,
      behavior: "smooth",
    });
    updateTimeline();
  }
}

scrollIndicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    currentTimelineIndex = index;
    const timelineWidth = timelineContainer.clientWidth;
    timelineContainer.scrollTo({
      left: currentTimelineIndex * timelineWidth,
      behavior: "smooth",
    });
    updateTimeline();
  });
});

updateTimeline();
});

