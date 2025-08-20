const certificates = [
  {
    title: "Secondary School Certificate (10th - CBSE, 2022)",
    issuedBy: "Central Board of Secondary Education (CBSE)",
    stream: "General Subjects",
    dateOfIssue: "22 July 2022",
    highlights: [
      "Consistent academic performance across all core subjects.",
      "Strong scores in Social Science (76) and Hindi (77).",
      "Established a solid foundation for further studies in Science stream."
    ],
    image: "image/10marksheet.jpg"
  },
  {
    title: "Senior Secondary School Certificate (12th - CBSE, 2024)",
    issuedBy: "Central Board of Secondary Education (CBSE)",
    stream: "Science (Biology)",
    dateOfIssue: "13 May 2024",
    highlights: [
      "Excellent grades in Physical Education (88) and Biology (69).",
      "Balanced academic performance with strong scores in Physics and Chemistry.",
      "Gained scientific foundation for higher studies in Computer or Medical field."
    ],
    image: "image/12marksheet.jpg"
  },
  {
    title: "RS-CIT Certificate (Information Technology)",
    issuedBy: "Vardhman Mahaveer Open University, Kota",
    stream: "Computer Fundamentals & IT Skills",
    dateOfIssue: "04 September 2023",
    highlights: [
      "Certified with 61% in Rajasthan State Certificate course (RS-CIT).",
      "Covers essential IT skills including MS Office, Internet, Email, and Digital Literacy.",
      "Recognized by government for entry-level IT jobs and education."
    ],
    image: "image/Rs-cit.jpg"
  },
  {
    title: "Internship Certificate (Web Development)",
    issuedBy: "Baadam Info & Tradelink Services Pvt. Ltd.",
    stream: "Web Development",
    dateOfIssue: "30 June 2025",
    highlights: [
      "Completed a 5-month internship from Feb 2025 to June 2025.",
      "Worked on live web development projects under professional supervision.",
      "Gained practical experience in front-end & back-end development tasks."
    ],
    image: "image/internship.jpeg"
  }
];

let index = 0;

const titleEl = document.getElementById("cert-title");
const descEl = document.getElementById("cert-description");
const imageEl = document.getElementById("cert-image");
const viewBtn = document.getElementById("view-btn");

function updateCertificate() {
  const cert = certificates[index];
  titleEl.textContent = cert.title;
  descEl.innerHTML = `
    <strong>Issued By:</strong> ${cert.issuedBy}<br>
    <strong>Stream:</strong> ${cert.stream}<br>
    <strong>Date of Issue:</strong> ${cert.dateOfIssue}<br><br>
    <strong>✅ Highlights:</strong><ul>
      ${cert.highlights.map(item => `<li>${item}</li>`).join('')}
    </ul>
  `;
  imageEl.style.opacity = 0;

  setTimeout(() => {
    imageEl.src = cert.image;
    imageEl.alt = cert.title;
    imageEl.style.opacity = 1;
  }, 300);

  viewBtn.onclick = () => {
    window.open(cert.image, "_blank");
  };
}

updateCertificate();

setInterval(() => {
  index = (index + 1) % certificates.length;
  updateCertificate();
}, 5000);

// --------- Script for Fade-in Animation of Service Cards ---------

document.addEventListener("DOMContentLoaded", () => {
  // Select all service cards
  const cards = document.querySelectorAll(".service-card");

  // Loop through each card
  cards.forEach((card, index) => {
    // Initially hide card with opacity & move down
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";

    // Add delay for staggered animation
    setTimeout(() => {
      card.style.transition = "all 0.6s ease";  // Smooth animation
      card.style.opacity = "1";                 // Fade in
      card.style.transform = "translateY(0)";   // Move to normal position
    }, 200 * index); // Each card appears one after another
  });
});
