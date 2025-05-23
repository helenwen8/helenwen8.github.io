import React from 'react';
import type { Dance } from '@src/pages/dance/dances'; // Import your Dance interface

interface DanceItemProps extends Dance {}; // uses props from Dance


const ytLinkPrefix = "https://www.youtube.com/watch?v=";

const getYTLink = (videoID: string) : string => {
  return ytLinkPrefix + videoID;
};

const getYThumbnail = (videoId: string): string => {
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
};

const DanceItem: React.FC<DanceItemProps> = ({
  danceName,
  artistName,
  videoID,
  date,
  tags,
  // ... other properties you might have in Dance interface
}) => {
    return (
    <div className="col-span-12 sm:col-span-6 lg:col-span-4 border dark:border-zinc-700 rounded-xl shadow-sm p-5">
        <div className="flex justify-between items-center">

            {/* tags to display */}
            <div className='flex gap-2'>
                {(tags || [])?.map((tag: string) => (
                    <span
                    key={tag} // React requires a key for list items
                    className='border border-zinc-300 dark:border-zinc-700 rounded-2xl
                        text-sm text-zinc-700 dark:text-zinc-300 no-underline px-2 py-0.5
                        transition-all duration-700
                        hover:border-zinc-700 dark:hover:border-zinc-300'>
                    {tag}
                    </span>
                ))}
            </div>
        </div>
        <img src={getYThumbnail(videoID)} className="rounded-lg mt-4 mb-2" alt={danceName} loading="lazy" />
      {/* console.log(getYThumbnail(videoID)) // Remove console.logs from JSX in production code */}

      <h3 className="font-semibold my-2">
        <p>{danceName} - {artistName}</p>
      </h3>

      <p>{date}</p>

      <div className="flex justify-end gap-3">
        <a className="underline flex items-center gap-2" href={getYTLink(videoID)} target="_blank" rel="noopener noreferrer">
          Video Link
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 0 0 1-2-2V8a2 0 0 1 2-2h6"/></svg>
        </a>
      </div>

    </div>

    )

};

export default DanceItem;
