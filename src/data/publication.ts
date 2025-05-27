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
  pdfUrl?: string;
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
    tldr: "Existing styled handwritten text generation (HTG) methods struggle to generalize to new styles and have technical constraints like maximum output length. We propose a new framework that combines a variational autoencoder with an autoregressive Transformer to generate styled text images based on both content and style examples. Trained solely on a diverse synthetic dataset of English text with over 100,000 fonts, our approach can reproduce previously unseen styles in zero-shot. Our model generates clean images without background artifacts, making them easier for downstream use. We extensively evaluate our method on both typewritten and handwritten text images of any length.",
    imageUrl: "/images/emuru.jpg",
    pdfUrl: "https://arxiv.org/pdf/2503.17074",
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
    tldr: "Existing panorama generation methods with diffusion models often create images that look aligned but lack semantic consistency. We introduce the Merge-Attend-Diffuse operator (MAD), which modifies pretrained diffusion models at inference time to generate panorama images with improved semantic and perceptual coherence. By merging diffusion paths and reprogramming self- and cross-attention layers, our approach addresses the semantic incoherence of previous methods and outperforms them, as demonstrated by extensive experiments and a user study.",
    imageUrl: "/images/mad.jpg",
    pdfUrl: "https://arxiv.org/pdf/2408.15660",
  },
  {
    year: "2024",
    conference: "AI for Visual Arts Workshop, ECCV",
    title: "Alfie: Democratising RGBA Image Generation With No $$$",
    authors: "Fabio Quattrini, Vittorio Pippi, Silvia Cascianelli, Rita Cucchiara",
    paperUrl: "https://arxiv.org/abs/2408.14826",
    codeUrl: "https://github.com/aimagelab/Alfie",
    // bibtex: "https://arxiv.org/abs/2408.14826.bib",
    tldr: "Most image generation models are incapable of generating RGBA images, required by graphic designers for composition in artworks.  We propose a fully automated approach that modifies the inference process of a pretrained Diffusion Transformer to generate RGBA images with prompt-guided control and high visual quality.  Our method enables the creation of complete subjects with easily removable backgrounds, making them ideal for integration into design projects. A user study shows that users prefer, in most cases, our solution over traditional generate-and-matte pipelines, and our illustrations work well in composite scene generation.",    
    imageUrl: "/images/alfie.jpg",
    pdfUrl: "https://arxiv.org/pdf/2408.14826",
    award: "⭐ Oral Spotlight (Top 15%)",
  },
  {
    year: "2024",
    conference: "AI for Digital Humanities Workshop, ECCV",
    title: "μgat: Improving Single-Page Document Parsing by Providing Multi-Page Context",
    authors: "Fabio Quattrini*, Carmine Zaccagnino*, Silvia Cascianelli, Laura Righi, Rita Cucchiara",
    paperUrl: "https://arxiv.org/abs/2408.15646",
    codeUrl: "https://github.com/aimagelab/mugat",
    // bibtex: "https://arxiv.org/abs/2408.14826.bib",
    tldr: "We focus on multi-page visually rich documents, where the layout is as important as the text content to convey the contained information through the structure. In this context, Document Parsing has emerged as a task to process document images and convert them into machine-readable structured representations, usually markup language,. However, most current models consider single-paged documents. In this work, we propose an adaptation to process multi-page context.",    
    imageUrl: "/images/mugat.jpg",
    pdfUrl: "https://arxiv.org/pdf/2408.15646",
  },
  {
    year: "2024",
    conference: "ICDAR",
    title: "Binarizing Documents by Leveraging both Space and Frequency",
    authors: "Fabio Quattrini, Vittorio Pippi, Silvia Cascianelli, Rita Cucchiara",
    paperUrl: "https://arxiv.org/pdf/2404.17243",
    codeUrl: "https://github.com/aimagelab/FourBi/blob/main/README.md",
    // bibtex: "https://arxiv.org/abs/2408.14826.bib",
    tldr: "Document image binarization remains an unsolved problem due to variable page degradations and the need for both local and global context. We propose a solution based on Fast Fourier Convolutions, which models global information more effectively than standard convolutions and scales better to different resolutions at inference time, while being more efficient than Vision Transformers. Our method is validated on diverse document degradations.",    
    imageUrl: "/images/fourbi.jpg",
    pdfUrl: "https://arxiv.org/pdf/2404.17243",
    award: "⭐ Oral",
  },
  {
    year: "2023",
    conference: "BMVC",
    title: "HWD: A Novel Evaluation Score for Styled Handwritten Text Generation",
    authors: "Vittorio Pippi, Fabio Quattrini, Silvia Cascianelli, Rita Cucchiara",
    paperUrl: "https://arxiv.org/abs/2310.20316",
    codeUrl: "https://github.com/aimagelab/HWD",
    // bibtex: "https://arxiv.org/abs/2408.14826.bib",
    tldr: "We introduce Handwriting Distance (HWD), a new metric for evaluating Styled Handwritten Text Generation models. HWD measures similarity in the feature space of a network trained to extract handwriting style features from variable-length images. We show its effectiveness with extensive experiments.",    
    imageUrl: "/images/hwd.jpg",
    pdfUrl: "https://arxiv.org/pdf/2310.20316",
  },
];
