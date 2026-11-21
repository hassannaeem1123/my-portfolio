const projects = [
  {
    id: 1,
    title: "Islamic Book Store",
    description: "A web-based bookstore for Islamic books, connected to a database through a Node.js backend.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "Database"],
    year: 2024,
    link: null,
  },
  {
    id: 2,
    title: "Event Management System",
    description: "A console-based C++ project for managing events.",
    tech: ["C++"],
    year: 2023,
    link: null,
  },
  {
    id: 3,
    title: "Flight Management System",
    description: "A console-based C++ project for managing flight information.",
    tech: ["C++"],
    year: 2025,
    link: null,
  },
  {
    id: 4,
    title: "Food Delivery App",
    description: "A food delivery application built with Flutter.",
    tech: ["Flutter"],
    year: 2025,
    link: null,
  },
  {
    id: 5,
    title: "Online Tic-Tac-Toe",
    description: "An online multiplayer Tic-Tac-Toe game built with Flutter and WebSockets.",
    tech: ["Flutter", "WebSockets"],
    year: 2026,
    link: null,
  },
  {
    id: 6,
    title: "Teen Mental Health Prediction Model",
    description: "Collected a dataset about social media's impact on teen mental health, trained a Python model, and used it to make predictions.",
    tech: ["Python", "Machine Learning"],
    year: 2025,
    link: null,
  },
];

const projectGrid = document.querySelector("#project-grid");
const resultCount = document.querySelector("#project-result-count");
const searchInput = document.querySelector("#project-search");
const technologyFilter = document.querySelector("#technology-filter");

function getProjectIcon(project) {
  if (project.title.includes("Book")) return "assets/icons/book.svg";
  if (project.tech.includes("Flutter")) return "assets/icons/mobile.svg";
  if (project.tech.includes("Python")) return "assets/icons/brain.svg";
  return "assets/icons/code.svg";
}

function createProjectCard(project) {
  const article = document.createElement("article");
  article.className = "project-card";

  const icon = document.createElement("img");
  icon.className = "project-icon";
  icon.src = getProjectIcon(project);
  icon.alt = `${project.title} icon`;
  icon.width = 48;
  icon.height = 48;

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

  article.append(icon, title, description, technologies);

  if (project.year !== null) {
    const year = document.createElement("p");
    year.textContent = String(project.year);
    article.append(year);
  }

  if (project.link) {
    const link = document.createElement("a");
    link.href = project.link;
    link.textContent = "View Project";
    article.append(link);
  }

  return article;
}

function renderProjects(projectList) {
  projectGrid.replaceChildren(...projectList.map(createProjectCard));
  resultCount.textContent = `${projectList.length} project(s) found`;

  if (projectList.length === 0) {
    const emptyMessage = document.createElement("p");
    emptyMessage.className = "project-empty";
    emptyMessage.textContent = "No projects found";
    projectGrid.append(emptyMessage);
  }
}

function applyFilters() {
  const searchTerm = searchInput.value.trim().toLowerCase();
  const selectedTechnology = technologyFilter.value;

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm)
      || project.tech.some((technology) => technology.toLowerCase().includes(searchTerm));
    const matchesTechnology = selectedTechnology === "all"
      || project.tech.includes(selectedTechnology);

    return matchesSearch && matchesTechnology;
  });

  renderProjects(filteredProjects);
}

const technologies = [];

projects.forEach((project) => {
  project.tech.forEach((technology) => {
    if (!technologies.includes(technology)) {
      technologies.push(technology);
    }
  });
});

technologies.sort();

technologies.forEach((technology) => {
  const option = document.createElement("option");
  option.value = technology;
  option.textContent = technology;
  technologyFilter.append(option);
});

searchInput.addEventListener("input", applyFilters);
technologyFilter.addEventListener("change", applyFilters);

applyFilters();
