const projects = [
  {
    id: 1,
    title: "Islamic Book Store",
    description: "A web-based bookstore for Islamic books, connected to a database through a Node.js backend.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "Database"],
    year: 2024,
    link: "index.html",
  },
  {
    id: 2,
    title: "Event Management System",
    description: "A console-based C++ project for managing events.",
    tech: ["C++"],
    year: 2023,
    link: "index.html",
  },
  {
    id: 3,
    title: "Flight Management System",
    description: "A console-based C++ project for managing flight information.",
    tech: ["C++"],
    year: 2025,
    link: "index.html",
  },
  {
    id: 4,
    title: "Food Delivery App",
    description: "A food delivery application built with Flutter.",
    tech: ["Flutter"],
    year: 2025,
    link: "index.html",
  },
  {
    id: 5,
    title: "Online Tic-Tac-Toe",
    description: "An online multiplayer Tic-Tac-Toe game built with Flutter and WebSockets.",
    tech: ["Flutter", "WebSockets"],
    year: 2026,
    link: "index.html",
  },
  {
    id: 6,
    title: "Teen Mental Health Prediction Model",
    description: "Collected a dataset about social media's impact on teen mental health, trained a Python model, and used it to make predictions.",
    tech: ["Python", "Machine Learning"],
    year: 2025,
    link: "index.html",
  },
];

const projectGrid = document.querySelector("#project-grid");
const resultCount = document.querySelector("#project-result-count");

function createProjectCard(project) {
  const article = document.createElement("article");
  article.className = "project-card";

  const title = document.createElement("h2");
  title.textContent = project.title;

  const description = document.createElement("p");
  description.textContent = project.description;

  const technologies = document.createElement("ul");
  technologies.className = "project-tech";

  project.tech.forEach((technology) => {
    const item = document.createElement("li");
    item.textContent = technology;
    technologies.append(item);
  });

  article.append(title, description, technologies);

  if (project.year !== null) {
    const year = document.createElement("p");
    year.textContent = String(project.year);
    article.append(year);
  }

  if (project.link) {
    const link = document.createElement("a");
    link.href = project.link;
    link.textContent = "Portfolio home";
    article.append(link);
  }

  return article;
}

projectGrid.replaceChildren(...projects.map(createProjectCard));
resultCount.textContent = `${projects.length} projects`;
