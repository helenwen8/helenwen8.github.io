// src/components/DanceListFilter.tsx

import React, { useState, useMemo } from 'react';
import type { Dance } from '@src/pages/dance/dances'; // Import your Dance interface
import DanceItem from './DanceItem.tsx';


interface DanceListFilterProps {
  dances: Dance[]; // The full list of dance data
}

const DanceListFilter: React.FC<DanceListFilterProps> = ({ dances }) => {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  // Extract all unique tags from your dance data
  // useMemo allows memoization
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    dances.forEach(dance => {
      dance.tags?.forEach(tag => tags.add(tag));
    });
    return Array.from(tags).sort(); // Convert Set to Array and sort alphabetically
  }, [dances]);

  // Filter the dances based on the activeTag
  const filteredDances = useMemo(() => {
    if (!activeTag) {
      return dances; // If no tag is active, return all dances
    }
    return dances.filter(dance => dance.tags?.includes(activeTag));
  }, [dances, activeTag]);

  const handleTagClick = (tag: string) => {
    if (tag == "") {
      setActiveTag(null); // Reset active tag if "All" is clicked
      console.log("All");
      return;
    } else {
      setActiveTag(prevTag => (prevTag === tag ? null : tag));
      console.log(tag);
    }
  };


  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {/* create tags for filtering */}
        <span
           className={`cursor-pointer border rounded-2xl text-sm px-3 py-1 transition-all duration-300
             ${activeTag === null ? 'bg-blue-500 text-white border-blue-500' : 'bg-zinc-100 text-zinc-700 border-zinc-300 hover:border-blue-500 dark:bg-zinc-800 dark:text-zinc-300 dark:border-zinc-700 dark:hover:border-blue-500'}
           `}
           onClick={() => handleTagClick("")}
         >
          All
        </span>


        {allTags.map(tag => (
          <span
            key={tag}
            className={`cursor-pointer border rounded-2xl text-sm px-3 py-1 transition-all duration-300
              ${activeTag === tag ? 'bg-blue-500 text-white border-blue-500' : 'bg-zinc-100 text-zinc-700 border-zinc-300 hover:border-blue-500 dark:bg-zinc-800 dark:text-zinc-300 dark:border-zinc-700 dark:hover:border-blue-500'}
            `}
            onClick={() => handleTagClick(tag)}
          >
            {tag}
          </span>
        ))}


      {/* Render the filtered dance items */}
      <div className="grid grid-cols-12 gap-5">
        {filteredDances.map((dance: Dance) => (
          // Pass all dance properties to DanceItem using the spread operator
          <DanceItem key={dance.videoID} {...dance} />
        ))}
      </div>
      </div>
  );
}

export default DanceListFilter;