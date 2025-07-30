"use client";

import Image from "next/image";
// import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Publication } from "@/data/publication";
// import { ImageViewer } from "./image-viewer";



// Helper function to parse the authors string and make a specific name bold and underlined
const formatAuthors = (authorsString: string, nameToBoldAndUnderline: string) => {
  const parts = authorsString.split(new RegExp(`(${nameToBoldAndUnderline})`, 'gi'));
  return parts.map((part, index) => {
    if (part.toLowerCase() === nameToBoldAndUnderline.toLowerCase()) {
      // Use a span with a custom font-weight class instead of <strong>
      return <span key={index} className="font-semibold underline">{part}</span>;
      // Other options for font-weight in Tailwind:
      // font-medium (500)
      // font-semibold (600) - This is a good choice for "a bit less bold" than default bold (700)
      // font-bold (700) - This is what <strong> usually equates to
      // font-extrabold (800)
      // font-black (900)
    }
    return part;
  });
};


export function PublicationEntry({
  publication,
}: {
  publication: Publication;
}) {
  return (
    <div className="flex flex-col sm:flex-row gap-6">
      {publication.imageUrl && (
        <div className="w-full sm:w-1/4 min-w-[160px] relative">
          {publication.pdfUrl ? (
            <a
              href={publication.pdfUrl}
              className="relative cursor-pointer group border-[1.5px] border-gray-900 rounded-lg block"
            >
              <Image
                src={publication.imageUrl}
                alt={publication.title}
                width={160}
                height={200}
                className="rounded-lg transition-all duration-300 hidden md:block"
              />
              <div
                className="
                  absolute inset-0 rounded-lg
                  bg-gray-400/40
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-300
                  pointer-events-none
                "
              />
            </a>
          ) : (
            <div className="relative border-[1.5px] border-gray-900 rounded-lg block">
              <Image
                src={publication.imageUrl}
                alt={publication.title}
                width={160}
                height={200}
                className="rounded-lg transition-all duration-300 hidden md:block"
              />
            </div>
          )}
        </div>
      )}
      <div className="flex flex-col flex-1">
        <div className="flex flex-row gap-4 items-center mb-2">
          <p className="text-xs text-zinc-500">
            {publication.conference} {publication.year}
          </p>
          {publication.award && (
            <div className="group flex px-2 py-1 bg-gradient-to-r from-amber-50 to-rose-50 rounded-md items-center shadow-md border border-amber-100/50 relative overflow-hidden transition-all duration-300">
              <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/90 to-transparent" />
              <p className="text-xs text-amber-700 font-medium relative">
                {publication.award}
              </p>
            </div>
          )}
        </div>
        <h3 className="font-serif text-md mb-3">{publication.title}</h3>
        {/* Render the formatted authors */}
        <p className="text-sm text-zinc-600 mb-4">
          {formatAuthors(publication.authors, "Fabio Quattrini")}
        </p>
        <div className="flex flex-row gap-6">
          {publication.paperUrl && (
            <a
              href={publication.paperUrl}
              className="group inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-900 transition-colors duration-300"
            >
              <ArrowUpRight
                size={12}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
              <span className="tracking-wider uppercase">Paper</span>
            </a>
          )}
          {publication.codeUrl && (
            <a
              href={publication.codeUrl}
              className="group inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-900 transition-colors duration-300"
            >
              <ArrowUpRight
                size={12}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
              <span className="tracking-wider uppercase">Code</span>
            </a>
          )}
          {publication.posterUrl && (
            <a
              href={publication.posterUrl}
              className="group inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-900 transition-colors duration-300"
            >
              <ArrowUpRight
                size={12}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
              <span className="tracking-wider uppercase">Poster</span>
            </a>
          )}
          {publication.HFUrl && (
            <a
              href={publication.HFUrl}
              className="group inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-900 transition-colors duration-300"
            >
              <ArrowUpRight
                size={12}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
              <span className="tracking-wider uppercase">HuggingFace</span>
            </a>
          )}
          {publication.bibtex && (
            <a
              href={publication.bibtex}
              className="group inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-900 transition-colors duration-300"
            >
              <ArrowUpRight
                size={12}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
              <span className="tracking-wider uppercase">BibTeX</span>
            </a>
          )}
        </div>
        {publication.tldr && (
          <p className="text-sm italic text-zinc-600 mt-4">
            {publication.tldr}
          </p>
        )}
      </div>
    </div>
  );
}
