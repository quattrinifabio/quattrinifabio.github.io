export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "2023—Present",
    institution: "University of Modena and Reggio Emilia",
    degree: "Ph.D. in Artificial Intelligence",
    advisor: "Prof. Rita Cucchiara and Dr. Silvia Cascianelli",
  },
  {
    year: "2019—2022",
    institution: "University of Modena and Reggio Emilia",
    degree: "M.S. in Computer Engineering, 110 CUM LAUDE",
    thesis: "Introducing Vision Transformers in Denoising Diffusion Probabilistic Models",
    thesisUrl: "https://morethesis.unimore.it/theses/available/etd-11112022-135122/"
  },
];
