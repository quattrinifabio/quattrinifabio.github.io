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
    codeUrl: "https://github.com/aimagelab/MAD",
    // bibtex: "https://arxiv.org/abs/2408.17074.bib",
    tldr: "We introduce the Merge-Attend-Diffuse operator to modify pre-trained diffusion models at inference-time and generate panorama images. Our approach improves semantic and perceptual coherence in panoramas by merging diffusion paths and reprogramming attention layers, outperforming previous methods. ",    
    imageUrl: "/images/mad.png",
  },
  {
    year: "2024",
    conference: "AI for Visual Arts Workshop, ECCV",
    title: "Alfie: Democratising RGBA Image Generation With No $$$",
    authors: "Fabio Quattrini, Vittorio Pippi, Silvia Cascianelli, Rita Cucchiara",
    paperUrl: "https://arxiv.org/abs/2408.14826",
    codeUrl: "https://github.com/aimagelab/Alfie",
    // bibtex: "https://arxiv.org/abs/2408.14826.bib",
    tldr: "Most image generation models are incapable of generating RGBA images, required by graphic designers for composition in artworks. In this work, we propose a fully-automated approach for obtaining RGBA illustrations by modifying the inference-time behavior of a pre-trained Diffusion Transformer model, exploiting the prompt-guided controllability and visual quality offered by such models with no additional computational cost. We force the generation of entire subjects without sharp croppings, whose background is easily removed for seamless integration into design projects or artistic scenes. We show with a user study that, in most cases, users prefer our solution over generating and then matting an image, and we show that our generated illustrations yield good results when used as inputs for composite scene generation pipelines.",    
    imageUrl: "/images/alfie.png",
    award: "⭐ Oral Spotlight (Top 15%)"
  },
  {
    year: "2024",
    conference: "AI for Digital Humanities Workshop, ECCV",
    title: "μgat: Improving Single-Page Document Parsing by Providing Multi-Page Context",
    authors: "Fabio Quattrini*, Carmine Zaccagnino*, Silvia Cascianelli, Laura Righi, Rita Cucchiara",
    paperUrl: "https://arxiv.org/abs/2408.15646",
    codeUrl: "https://github.com/aimagelab/mugat",
    // bibtex: "https://arxiv.org/abs/2408.14826.bib",
    tldr: "We focus on multi-page visually rich documents, where the layout is as important as the text content to convey the contained information through the structure. In this context, Document Parsing has emerged as a task to process document images and convert them into machine-readable structured representations, usually markup language,. However, most current models consider single-paged documents and focus on business and scientific documents. In this work, we propose an adaptation to process multi-page context.",    
    imageUrl: "/images/mugat.png"
  },
];
