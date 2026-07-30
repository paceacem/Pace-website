/**
 * PACE Website — Contact Form Component
 * Handles client-side form validation and logs submission to console.
 */

export function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.querySelector("#form-name")?.value.trim();
    const email = form.querySelector("#form-email")?.value.trim();
    const subject = form.querySelector("#form-subject")?.value.trim();
    const message = form.querySelector("#form-message")?.value.trim();

    if (!name || !email || !subject || !message) {
      alert("Please fill in all required fields.");
      return;
    }

    // Client-side validation successful
    console.log("PACE Contact Form Payload:", {
      name,
      email,
      subject,
      message,
      submittedAt: new Date().toISOString()
    });

    // TODO: wire to backend/api later
    alert("Thank you for your message! (Note: This is a frontend demo. Submissions will be sent to the backend once API endpoints are active).");

    form.reset();
  });
}
