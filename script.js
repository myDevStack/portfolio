// Jenny — Product Designer Portfolio (plain JS)

const projects = [
  {
    title: "Lirante — Food Delivery Solution",
    text: "A full delivery platform redesign — from courier routing screens to a consumer app that lifted repeat orders by 34% in the first quarter after launch.",
    tags: ["Product Design", "Mobile App", "Design System"],
    images: ["assets/work-mobile.jpg", "assets/work-web.jpg"],
  },
  {
    title: "Nordbank — Fintech Dashboard",
    text: "Rebuilt a dense analytics dashboard into a calm, glanceable workspace for treasury teams, cutting task completion time nearly in half.",
    tags: ["Web App", "Data Visualization", "UI/UX"],
    images: ["assets/work-dashboard.jpg", "assets/work-mobile.jpg"],
  },
  {
    title: "Bloomwell — Health Landing Pages",
    text: "A conversion-focused landing system for a telehealth startup — modular sections, A/B-tested hero variants and a 2.1x signup lift.",
    tags: ["Landing Page", "Web Design", "CRO"],
    images: ["assets/work-web.jpg", "assets/work-dashboard.jpg"],
  },
];

const testimonials = [
  {
    text: "Babul took our vague idea and returned a product our users instantly understood. The redesign paid for itself within two months.",
    name: "Marcus Reed",
    role: "Founder, Lirante",
  },
  {
    text: "Rare mix of taste and rigor. Every design decision came with reasoning, and our engineers loved the handoff files.",
    name: "Priya Nair",
    role: "Product Lead, Nordbank",
  },
  {
    text: "Working with Jenny felt like adding a design team, not a freelancer. Clear communication, fast iterations, beautiful results.",
    name: "Tom Alvarez",
    role: "CEO, Bloomwell",
  },
  {
    text: "Our landing page conversion more than doubled. Jenny understands the business side of design, not just the pixels.",
    name: "Sofia Klein",
    role: "Marketing Director, Helio",
  },
];

const marqueeItems = [
  "UI/UX Design", "Web Design", "Landing Page", "Product Design",
  "Branding", "Design Systems", "Mobile Apps", "Prototyping",
];

// ---------- Portfolio slider ----------
let projectIndex = 0;

const projectImages = document.getElementById("projectImages");
const projectTags = document.getElementById("projectTags");
const projectTitle = document.getElementById("projectTitle");
const projectText = document.getElementById("projectText");

function renderProject() {
  const p = projects[projectIndex];
  projectImages.innerHTML = p.images
    .map((src) => `<img src="${src}" alt="${p.title}" loading="lazy" />`)
    .join("");
  projectTags.innerHTML = p.tags.map((t) => `<span class="tag">${t}</span>`).join("");
  projectTitle.textContent = p.title;
  projectText.textContent = p.text;
}

document.getElementById("projectPrev").addEventListener("click", () => {
  projectIndex = (projectIndex - 1 + projects.length) % projects.length;
  renderProject();
});
document.getElementById("projectNext").addEventListener("click", () => {
  projectIndex = (projectIndex + 1) % projects.length;
  renderProject();
});
renderProject();

// ---------- Testimonial slider ----------
let slide = 0;
const testimonialGrid = document.getElementById("testimonialGrid");

const quoteSvg = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="28" height="28"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>`;

function renderTestimonials() {
  const shown = [
    testimonials[slide % testimonials.length],
    testimonials[(slide + 1) % testimonials.length],
  ];
  testimonialGrid.innerHTML = shown
    .map(
      (t) => `
      <article class="testimonial-card">
        <div class="quote">${quoteSvg}</div>
        <p class="text">"${t.text}"</p>
        <div class="testimonial-person">
          <span class="avatar">${t.name.charAt(0)}</span>
          <div>
            <p class="name">${t.name}</p>
            <p class="role">${t.role}</p>
          </div>
        </div>
      </article>`
    )
    .join("");
}

document.getElementById("testimonialPrev").addEventListener("click", () => {
  slide = (slide - 1 + testimonials.length) % testimonials.length;
  renderTestimonials();
});
document.getElementById("testimonialNext").addEventListener("click", () => {
  slide = (slide + 1) % testimonials.length;
  renderTestimonials();
});
renderTestimonials();

// ---------- Marquee ----------
const marqueeTrack = document.getElementById("marqueeTrack");
const marqueeHtml =
  marqueeItems.map((item) => `<span>${item} ✦</span>`).join("");
// Duplicate content so the -50% translate loop is seamless
marqueeTrack.innerHTML = marqueeHtml + marqueeHtml;

// ---------- active class ----------

 document.querySelectorAll('nav a').forEach(button => {
      button.addEventListener('click', function () {
        document.querySelectorAll('.nav a').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
      });
    });
