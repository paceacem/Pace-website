/**
 * PACE Website — Main Javascript Controller
 * Student-led technical club website logic (Frontend-only)
 */

// ==========================================
// Members Data
// ==========================================
const members = [
  { name: "Biraj Pandey", role: "President", photo: "" },
  { name: "Thaneshwor Chaudhary", role: "Vice-President", photo: "" },
  { name: "Anushka Aryal", role: "Secretary", photo: "" },
  { name: "Apekchhaya Bhattarai", role: "Joint Secretary", photo: "" },
  { name: "Praphul Dahal", role: "Vice Secretary", photo: "" },
  { name: "Aayusha Kunwor", role: "Treasurer", photo: "" },
  { name: "Nistha Maharjan", role: "Member", photo: "" },
  { name: "Prem Rai", role: "Member", photo: "" },
  { name: "Kripa Shrestha", role: "Member", photo: "" },
  { name: "Sandesh Bhatta", role: "Member", photo: "/home/sandesh/Pace-website/assests/member/sandesh.jpg" },
  { name: "Santosh Kumar Tharu", role: "Member", photo: "" },
  { name: "Aayush Paudel", role: "Member", photo: "" },
  { name: "Dipansh Sunar", role: "Member", photo: "" },
  { name: "Niraj Shah", role: "Member", photo: "" },
  { name: "Suraj Joshi", role: "Member", photo: "" },
  { name: "Abishma Lamichhane", role: "Member", photo: "" },
  { name: "Ankita Adhikari", role: "Member", photo: "" },
  { name: "John Dhakal", role: "Member", photo: "" },
  { name: "Kishor Kafle", role: "Member", photo: "" },
  { name: "Krijal Tandukar", role: "Member", photo: "" },
  { name: "Mohan Paudel", role: "Member", photo: "" },
  { name: "Pranil Tandukar", role: "Member", photo: "" },
  { name: "Prasubh Pokharel", role: "Member", photo: "" },
  { name: "Sakshyam Nepal", role: "Member", photo: "" },
];

function getInitials(name) {
  return name.split(" ").map(w => w[0]).join("").toUpperCase();
}

function renderMembers() {
  const grid = document.getElementById("membersGrid");
  if (!grid) return;
  grid.innerHTML = members.map(m => `
    <div class="member-card">
      <div class="member-photo-wrap">
        ${m.photo
          ? `<img src="${m.photo}" alt="${m.name}" class="member-photo" loading="lazy">`
          : `<div class="member-image-placeholder">${getInitials(m.name)}</div>`
        }
        <div class="member-overlay">
          <span class="member-role">${m.role.toUpperCase()}</span>
          <h4 class="member-name">${m.name}</h4>
          <span class="member-year">${m.year || ""}</span>
        </div>
      </div>
    </div>
  `).join("");
}

document.addEventListener('DOMContentLoaded', () => {
  // --- DOM Elements ---
  const header = document.querySelector('.navbar-header');
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');
  const contactForm = document.getElementById('contactForm');

  // ==========================================
  // 0. Render Members
  // ==========================================
  renderMembers();

  // ==========================================
  // 1. Mobile Menu Toggling
  // ==========================================
  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
      const isExpanded = hamburgerBtn.getAttribute('aria-expanded') === 'true';
      hamburgerBtn.classList.toggle('active');
      navMenu.classList.toggle('active');
      hamburgerBtn.setAttribute('aria-expanded', !isExpanded);
      document.body.style.overflow = isExpanded ? '' : 'hidden';
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburgerBtn.classList.remove('active');
        navMenu.classList.remove('active');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  // ==========================================
  // 2. Header Scroll Effect
  // ==========================================
  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll();

  // ==========================================
  // 3. Navigation Active State on Scroll
  // ==========================================
  const sections = document.querySelectorAll('section[id]');

  const observerOptions = {
    root: null,
    rootMargin: '-30% 0px -60% 0px',
    threshold: 0
  };

  const observerCallback = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);
  sections.forEach(section => observer.observe(section));

  // ==========================================
  // 4. Contact Form Handling
  // ==========================================
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('form-name').value.trim();
      const email = document.getElementById('form-email').value.trim();
      const subject = document.getElementById('form-subject').value.trim();
      const message = document.getElementById('form-message').value.trim();

      console.log('PACE Contact Form Mock Submission:', { name, email, subject, message });

      alert(
        `Thank you, ${name}! Your mock message has been logged.\n\n` +
        `Note: This website is a frontend-only demonstration. Form submissions are non-functional until a backend service (e.g., Formspree, EmailJS, or Node/Express API) is wired up.`
      );

      contactForm.reset();
    });
  }
});