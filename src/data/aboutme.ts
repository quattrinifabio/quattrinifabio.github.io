export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Fabio Quattrini",
  title: "Ph.D. Candidate",
  institution: "AImageLab @ University of Modena and Reggio Emilia",
  // Note that links work in the description
  description: `
  I am a Ph.D student in Artificial Intelligence at <a href="https://aimagelab.ing.unimore.it/imagelab/index.asp">AImageLab</a> (University of Modena and Reggio Emila), advised by <a href="https://aimagelab.ing.unimore.it/imagelab/person.asp?idpersona=1">Rita Cucchiara</a> and <a href="https://silviacascianelli.netlify.app/">Silvia Cascianelli</a>. I am working in visually-rich Document understanding and generation, exploring techniques in handwriting imitation, image generation, and document understanding.
  <br>
  <br> 
  Additionally, I gained valuable experience as an Applied Scientist Intern at Amazon CVNA in 2025, where I worked for six months on foundation GenAI models to establish visual understanding and generation capabilities in images with text.
`,
  email: "fabio.quattrini@unimore.it",
  imageUrl:
    "/images/photo_bio.jpg",
  googleScholarUrl: "https://scholar.google.com/citations?user=mx7S6J8AAAAJ",
  githubUsername: "quattrinifabio",
  linkedinUsername: "fabio-quattrini-8b0a18244/",
  twitterUsername: "quattrini_fabio",
  // blogUrl: "https://",
  // cvUrl: "https://",
  institutionUrl: "https://aimagelab.ing.unimore.it/imagelab/index.asp",
  // altName: "",
  // secretDescription: "",
};