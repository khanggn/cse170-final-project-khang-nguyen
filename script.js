const navItems = document.querySelectorAll(".bottom-nav .nav-item");
navItems.forEach((btn) => {
  btn.addEventListener("click", () => {
    navItems.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });
});
const feedbacks = [
  {
    name: "Jane Doe",
    quote:
      "Super friendly staff, helped me find great starter packs. Perfect for newcomers!",
    tip: "If you’re new to trading, ask them to help you check prices before you swap cards. They walked me through it without making me feel dumb.",
    photos: ["images/img1.png", "images/img2.png", "images/img3.png"],
  },
  {
    name: "Alex Kim",
    quote:
      "They let me take my time looking through binders and never pressured me to buy.",
    tip: "If you're unsure about card condition, ask to see it under better lighting. They were super patient about it.",
    photos: ["images/img4.png", "images/img5.png", "images/img6.png"],
  },
  {
    name: "Riley T.",
    quote:
      "Great selection of graded slabs and fair prices compared to other booths.",
    tip: "Have a budget in mind before you walk up. They’ll help you find options that fit it.",
    photos: ["images/img7.png", "images/img8.png", "images/img9.png"],
  },
  {
    name: "Sam P.",
    quote:
      "I traded a few mid-tier cards toward a grail and they explained the value differences clearly.",
    tip: "Bring screenshots of recent sales. This vendor is happy to compare and explain.",
    photos: ["images/img10.png", "images/img11.png", "images/img12.png"],
  },
  {
    name: "Mina L.",
    quote:
      "Nice energy, no gatekeeping, and they didn’t talk down to me even though I’m new.",
    tip: "Tell them what sets or art styles you like. They’ll pull cards you might not think to ask for.",
    photos: ["images/img13.png", "images/img14.png", "images/img15.png"],
  },
];
let currentIndex = 0;
const nameEl = document.querySelector(".feedback-name");
const quoteEl = document.querySelector(".feedback-main");
const tipEl = document.querySelector(".feedback-tip");
const currentReviewSpan = document.getElementById("current-review");
const totalReviewsSpan = document.getElementById("total-reviews");
const prevBtn = document.getElementById("prev-review");
const nextBtn = document.getElementById("next-review");
const photoBoxes = document.querySelectorAll(".photo-box");
const modalBackdrop = document.getElementById("modal-backdrop");
const reportVendorBtn = document.getElementById("report-vendor-btn");
const cancelReportBtn = document.getElementById("cancel-report");
const submitReportBtn = document.getElementById("submit-report");
const bookmarkBtn = document.querySelector(".bookmark-btn");
function renderFeedback(index) {
  const data = feedbacks[index];

  if (nameEl) nameEl.textContent = data.name;
  if (quoteEl) quoteEl.textContent = `“${data.quote}”`;
  if (tipEl) tipEl.innerHTML = `<strong>Tip:</strong> ${data.tip}`;

  if (currentReviewSpan)
    currentReviewSpan.textContent = String(index + 1);
  if (totalReviewsSpan)
    totalReviewsSpan.textContent = String(feedbacks.length);

  if (photoBoxes.length) {
    photoBoxes.forEach((box, i) => {
      const url = data.photos[i];
      if (url) {
        box.style.backgroundImage = `url('${url}')`;
      } else {
        box.style.backgroundImage = "none";
      }
    });
  }
}
if (prevBtn && nextBtn) {
  prevBtn.addEventListener("click", () => {
    currentIndex--;
    if (currentIndex < 0) currentIndex = feedbacks.length - 1;
    renderFeedback(currentIndex);
  });

  nextBtn.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex >= feedbacks.length) currentIndex = 0;
    renderFeedback(currentIndex);
  });
}
if (reportVendorBtn && modalBackdrop) {
  reportVendorBtn.addEventListener("click", () => {
    modalBackdrop.classList.remove("hidden");
  });
}
if (cancelReportBtn && modalBackdrop) {
  cancelReportBtn.addEventListener("click", () => {
    modalBackdrop.classList.add("hidden");
  });
}
if (submitReportBtn && modalBackdrop) {
  submitReportBtn.addEventListener("click", () => {
    alert(
      "Thanks! In the full app, this report would be sent to convention staff."
    );
    modalBackdrop.classList.add("hidden");
  });
}
if (modalBackdrop) {
  modalBackdrop.addEventListener("click", (e) => {
    if (e.target === modalBackdrop) {
      modalBackdrop.classList.add("hidden");
    }
  });
}
const closeButton = document.querySelector(".header-close");
if (closeButton) {
  closeButton.addEventListener("click", () => {
    alert(
      "In the full app, this would take you back to the previous screen or convention view."
    );
  });
}
if (bookmarkBtn) {
  bookmarkBtn.addEventListener("click", function () {
    this.classList.toggle("saved");
  });
}
renderFeedback(currentIndex);