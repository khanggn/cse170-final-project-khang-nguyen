// Toggle active state in bottom nav
const navItems = document.querySelectorAll(".bottom-nav .nav-item");

navItems.forEach((btn) => {
  btn.addEventListener("click", () => {
    navItems.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

// Simple review counter demo
const moreReviewsBtn = document.getElementById("more-reviews-btn");
const currentReviewSpan = document.getElementById("current-review");
const totalReviewsSpan = document.getElementById("total-reviews");

if (moreReviewsBtn) {
  moreReviewsBtn.addEventListener("click", () => {
    let current = Number(currentReviewSpan.textContent);
    const total = Number(totalReviewsSpan.textContent);

    current = current >= total ? 1 : current + 1;
    currentReviewSpan.textContent = String(current);
  });
}

// Modal behavior used for both "Share Feedback" and "Report Vendor"
const modalBackdrop = document.getElementById("modal-backdrop");
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");
const modalCloseBtn = document.getElementById("modal-close-btn");

const reportVendorBtn = document.getElementById("report-vendor-btn");
const shareFeedbackBtn = document.getElementById("share-feedback-btn");

function openModal(title, text) {
  modalTitle.textContent = title;
  modalText.textContent = text;
  modalBackdrop.classList.remove("hidden");
}

if (reportVendorBtn) {
  reportVendorBtn.addEventListener("click", () => {
    openModal(
      "Report Vendor",
      "In a full version of VendorDex, this is where you could report sketchy behavior or issues with this vendor. For this prototype, the report is not actually sent."
    );
  });
}

if (shareFeedbackBtn) {
  shareFeedbackBtn.addEventListener("click", () => {
    openModal(
      "Share Your Feedback",
      "Here you would normally fill out the 4-step feedback form about your experience, suggestions, and tips for newcomers."
    );
  });
}

if (modalCloseBtn) {
  modalCloseBtn.addEventListener("click", () => {
    modalBackdrop.classList.add("hidden");
  });
}

// Close icon – just shows a friendly message for now
const closeButton = document.querySelector(".close-button");
if (closeButton) {
  closeButton.addEventListener("click", () => {
    openModal(
      "Close Profile",
      "In the full app, this would take you back to the previous screen or convention view."
    );
  });
}

document.querySelector('.bookmark-btn').addEventListener('click', function () {
  this.classList.toggle('saved');
});