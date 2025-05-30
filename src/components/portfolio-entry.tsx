"use client";

import Image from "next/image";
// import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Portfolio } from "@/data/portfolio";
// import { ImageViewer } from "./image-viewer";

export function PortfolioEntry({ portfolio }: { portfolio: Portfolio }) {
  // const [isImageViewerOpen, setIsImageViewerOpen] = useState(false);

  return (
    <div className="flex flex-col sm:flex-row gap-6">
      {portfolio.imageUrl && (
            <div className="w-1/4 min-w-[160px] relative">
              {portfolio.pdfUrl ? (
                <a
                  href={portfolio.pdfUrl}
                  className="relative cursor-pointer group border-[1.5px] border-gray-900 rounded-lg block"
                >
                  <Image
                    src={portfolio.imageUrl}
                    alt={portfolio.title}
                    width={160}
                    height={200}
                    className="rounded-lg hidden md:block"
                  />
                  {/* Gray overlay (on hover only, when link exists) */}
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
                    src={portfolio.imageUrl}
                    alt={portfolio.title}
                    width={160}
                    height={200}
                    className="rounded-lg hidden md:block"
                  />
                  {/* No hover overlay here! */}
                </div>
              )}
            </div>
          )}
      <div className="flex flex-col flex-1">
        <h3 className="font-serif text-md mb-3">
          {portfolio.projectUrl ? (
            <a
              href={portfolio.projectUrl}
              className="group inline-flex items-center gap-2 hover:text-zinc-600 transition-colors duration-300"
            >
              {portfolio.title}
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
            </a>
          ) : (
            portfolio.title
          )}
        </h3>

        {portfolio.technologies && (
          <div className="flex gap-2 mb-4 flex-wrap">
            {portfolio.technologies.map((tech, index) => (
              <span
                key={index}
                className="text-xs text-zinc-600 px-2 py-1 bg-zinc-100 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="flex gap-6">
          {portfolio.projectUrl && (
            <a
              href={portfolio.projectUrl}
              className="group inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-900 transition-colors duration-300"
            >
              <ArrowUpRight
                size={12}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
              <span className="tracking-wider uppercase">Project</span>
            </a>
          )}
          {portfolio.codeUrl && (
            <a
              href={portfolio.codeUrl}
              className="group inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-900 transition-colors duration-300"
            >
              <ArrowUpRight
                size={12}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
              <span className="tracking-wider uppercase">Code</span>
            </a>
          )}
        </div>
        <p className="text-sm text-zinc-600 mb-4 mt-4 italic">
          {portfolio.description}
        </p>
      </div>
    </div>
  );
}
