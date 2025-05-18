export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
}

export const publicationData: Publication[] = [
  // If you don't want to show publications, just make the array empty.
  {
    year: "2025",
    conference: "CVPR",
    title: "Zero-Shot Styled Text Image Generation, but Make It Autoregressive",
    authors: "Vittorio Pippi*, Fabio Quattrini*, Silvia Cascianelli, Alessio Tonioni, Rita Cucchiara",
    paperUrl: "https://arxiv.org/abs/2503.17074",
    codeUrl: "https://huggingface.co/blowing-up-groundhogs/emuru",
    // bibtex: "https://arxiv.org/abs/2503.17074.bib",
    tldr: "Existing Styled Handwritten Text Generation (HTG) strategies fail to generalize to novel styles and have technical constraints such as maximum output lenght. We propose a novel framework that leverages a powerful text image representation model (a variational autoencoder) combined with an autoregressive Transformer to generate styled text images conditioned on textual content and writing style examples. Our approach, solely on a diverse, synthetic dataset of English with over 100,000 fonts, shows the capability to reproduce unseen styles in zero-shot. Moreover, our model generates images without background artifacts, which are easier to use for downstream applications. Extensive evaluation on both typewritten and handwritten, any-length text image generation scenarios demonstrates the effectiveness of our approach.",    
    imageUrl: "/images/emuru.png",
    award: "🏆 Oustanding Reviewer Award",
  },
  {
    year: "2024",
    conference: "ECCV",
    title: "Merging and Splitting Diffusion Paths for Semantically Coherent Panoramas",
    authors: "Fabio Quattrini, Vittorio Pippi, Silvia Cascianelli, Rita Cucchiara",
    paperUrl: "https://arxiv.org/abs/2408.15660",
    codeUrl: "https://github.com/aimagela15660b/MAD",
    // bibtex: "https://arxiv.org/abs/2408.17074.bib",
    tldr: "We introduce the Merge-Attend-Diffuse operator to modify pre-trained diffusion models at inference-time and generate panorama images. Our approach improves semantic and perceptual coherence in panoramas by merging diffusion paths and reprogramming attention layers, outperforming previous methods. ",    
    imageUrl: "/images/mad.png",
  },
];
