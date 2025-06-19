export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "09/2024 - 03/2025",
    title: "Applied Scientist Intern",
    company: "Amazon Berlin",
    description:
      "Research on foundation GenAI models to establish visual understanding and generation capabilities in images with text. Managed project planning from ideation to completion and supervised data collection and annotation team.",
    advisor: "Bojan Pepik and Michael Opitz",
    companyUrl: "https://www.amazon.science/",
  },
];
