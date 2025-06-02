import React, { useState, useMemo, useRef, useEffect } from 'react';
import type { Dance } from '@src/pages/dance/dances'; // Import your Dance interface
import { Genre, ContentType } from '@src/pages/dance/dances';
import DanceItem from './DanceItem.tsx';

interface DanceListFilterProps {
  dances: Dance[]; // The full list of dance data
}

/* Consolidated Genres and Content Types for filteringn */
const allGenres = Object.values(Genre);
const allContentTypes = Object.values(ContentType);

/* Filtering Logic */
const DanceListFilter: React.FC<DanceListFilterProps> = ({ dances }) => {
  // Filter for genres
  const [isGenrePanelOpen, setIsGenrePanelOpen] = useState(false);
  const [selectedGenres, setSelectedGenres] = useState<string[]>(allGenres);

  const genrePanelRef = useRef<HTMLDivElement>(null);
  const genreButtonRef = useRef<HTMLButtonElement>(null);

  // Handler for genre checkbox changes
  const handleGenreChange = (genre: string) => {
    setSelectedGenres(prev =>
      prev.includes(genre)
        ? prev.filter(g => g !== genre) // Deselect
        : [...prev, genre] // Select
    );
  };
  
  // Filter State for Content Type
  const [isContentTypePanelOpen, setIsContentTypePanelOpen] = useState(false);
  const [selectedContentType, setSelectedContentType] = useState<string[]>(allContentTypes); 

  const contentTypePanelRef = useRef<HTMLDivElement>(null);
  const contentTypeButtonRef = useRef<HTMLButtonElement>(null);
  // Handler for genre checkbox changes
  const handleContentTypeChange = (contentType: string) => {
    setSelectedContentType(prev =>
      prev.includes(contentType)
        ? prev.filter(ct => ct !== contentType) // Deselect
        : [...prev, contentType] // Select
    );
  };

  // const [selectedGroupType, setSelectedGroupType] = useState<'all' | 'solo' | 'duo' | 'group'>('all'); 
  const [showLeaderOnly, setShowLeaderOnly] = useState<"all" | "Leader" | "Co-Leader" | "Member" | "Choreographer">("all"); 

  // misc tags filtering
  // const [activeTag, setActiveTag] = useState<string | null>(null);

  useEffect(() => {
    // effects for the panels
    function handleClickOutside(event: MouseEvent) {
      // genre 
      if (
        genrePanelRef.current && !genrePanelRef.current.contains(event.target as Node) &&
        genreButtonRef.current && !genreButtonRef.current.contains(event.target as Node)
      ) {
        setIsGenrePanelOpen(false);
      }

      // content 
      if (
        contentTypePanelRef.current && !contentTypePanelRef.current.contains(event.target as Node) &&
        contentTypeButtonRef.current && !contentTypeButtonRef.current.contains(event.target as Node)
      ) {
        setIsContentTypePanelOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [genrePanelRef, genreButtonRef, contentTypeButtonRef, contentTypePanelRef]);


  // Extract all unique tags from misc tags
  // useMemo allows memoization
  // const allTags = useMemo(() => {
  //   const tags = new Set<string>();
  //   dances.forEach(dance => {
  //     dance.tags?.forEach(tag => tags.add(tag));
  //   });
  //   return Array.from(tags).sort(); // Convert Set to Array and sort alphabetically
  // }, [dances]);
  

  // const handleTagClick = (tag: string) => {
    // if (tag == "") {
    //   setActiveTag(null); // Reset active tag if "All" is clicked
    //   return;
    // } else {
    //   setActiveTag(prevTag => (prevTag === tag ? null : tag));
    // }
  // };

  // Filtering Logic
  const filteredDances = useMemo(() => {
    let currentDances = dances;

    // 1. Filter by general tags
    // if (activeTag) {
    //   currentDances = currentDances.filter(dance => dance.tags?.includes(activeTag));
    // }

    // Genres
    if (selectedGenres.length == 0) {
      currentDances = [];
    } else {
      currentDances = currentDances.filter(dance => 
        selectedGenres.includes(dance.genre)
      );
    }

    // Content Type
    if (selectedContentType.length == 0) {
      currentDances = [];
    } else {
      currentDances = currentDances.filter(dance =>
        selectedContentType.includes(dance.contentType)
      );
    }
 

  // If kpopFilterState is 'all', no K-Pop filtering is applied, so we do nothing here.
    // // 3. Filter by Group Type
    // if (selectedGroupType !== 'all') {
    //   currentDances = currentDances.filter(dance => dance.groupType === selectedGroupType);
    // }

    // // 4. Filter by Content Type
    // if (selectedContentType !== 'all') {
    //     currentDances = currentDances.filter(dance => dance.contentType === selectedContentType);
    // }

    // 5. Filter by Leader Role
    // if (showLeaderOnly) {
    //     currentDances = currentDances.filter(dance => dance.leaderType === showLeaderOnly);
    // }

    return currentDances; // Return the final filtered list
  }, [dances, selectedGenres, selectedContentType, /*selectedGroupType*/showLeaderOnly]);


  return (
    <div className="flex flex-wrap gap-2 mb-6">

      {/* create tags for filtering */}
        {/* <span
           className={`cursor-pointer border rounded-2xl text-sm px-3 py-1 transition-all duration-300
             ${activeTag === null ? 'bg-blue-500 text-white border-blue-500' : 'bg-zinc-100 text-zinc-700 border-zinc-300 hover:border-blue-500 dark:bg-zinc-800 dark:text-zinc-300 dark:border-zinc-700 dark:hover:border-blue-500'}
           `}
           onClick={() => handleTagClick("")}
         >
        All
        </span> */}
        

     {/* Genre Filter Dropdown */}
      <div className="relative mb-4">
        <button
          ref={genreButtonRef}
          className="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800"
          onClick={() => setIsGenrePanelOpen(!isGenrePanelOpen)}
        >
          Filter by Genre {isGenrePanelOpen ? '▲' : '▼'}
        </button>

        {isGenrePanelOpen && (
          <div
            ref={genrePanelRef}
            className="absolute z-10 mt-2 w-48 p-4 border rounded-lg shadow-lg bg-white dark:bg-zinc-800">
            <h4 className="font-semibold text-zinc-700 dark:text-zinc-300 mb-2">Genres:</h4>

            {/* {selectedGenres.length > 0 && (
                <button
                    className="mb-4 px-3 py-1 rounded-2xl text-sm bg-red-200 text-red-800 dark:bg-red-700 dark:text-red-200"
                    onClick={() => setSelectedGenres([])}
                >
                    Deselect All
                </button>
            )}
            {selectedGenres.length < allGenres.length && (
                <button
                    className="mb-4 px-3 py-1 rounded-2xl text-sm bg-red-200 text-red-800 dark:bg-red-700 dark:text-red-200"
                    onClick={() => setSelectedGenres(allGenres)}
                >
                    Select All
                </button>
            )} */}

            {allGenres.map(genre => (
              <div key={genre} className="mb-1">
                <label className="inline-flex items-center text-zinc-800 dark:text-zinc-200 cursor-pointer">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-600 dark:text-blue-400 rounded"
                    checked={selectedGenres.includes(genre)}
                    onChange={() => handleGenreChange(genre)}
                  />
                  <span className="ml-2">{genre}</span>
                </label>
              </div>
            ))}
            
          </div>
        )}
      </div>


        <div className="relative mb-4">
        <button
          ref={contentTypeButtonRef}
          className="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800"
          onClick={() => setIsContentTypePanelOpen(!isContentTypePanelOpen)}
        >
          Filter by Content Type {isContentTypePanelOpen ? '▲' : '▼'}
        </button>

        {isContentTypePanelOpen && (
          <div
            ref={contentTypePanelRef}
            className="absolute z-10 mt-2 w-48 p-4 border rounded-lg shadow-lg bg-white dark:bg-zinc-800">
            <h4 className="font-semibold text-zinc-700 dark:text-zinc-300 mb-2">Content Type:</h4>

            {allContentTypes.map(contentType => (
              <div key={contentType} className="mb-1">
                <label className="inline-flex items-center text-zinc-800 dark:text-zinc-200 cursor-pointer">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-600 dark:text-blue-400 rounded"
                    checked={selectedContentType.includes(contentType)}
                    onChange={() => handleContentTypeChange(contentType)}
                  />
                  <span className="ml-2">{contentType}</span>
                </label>
              </div>
            ))}
            
          </div>
        )}
      </div>


        {/* {allTags.map(tag => (
          <span
            key={tag}
            className={`cursor-pointer border rounded-2xl text-sm px-3 py-1 transition-all duration-300
              ${activeTag === tag ? 'bg-blue-500 text-white border-blue-500' : 'bg-zinc-100 text-zinc-700 border-zinc-300 hover:border-blue-500 dark:bg-zinc-800 dark:text-zinc-300 dark:border-zinc-700 dark:hover:border-blue-500'}
            `}
            onClick={() => handleTagClick(tag)}
          >
            {tag}
          </span>
        ))} */}


      {/* Render the filtered dance items */}
      <div className="grid grid-cols-12 gap-5">
        {filteredDances.map((dance: Dance) => (
          // Pass all dance properties to DanceItem using the spread operator
          <DanceItem key={dance.videoID} dance={dance} />
        ))}
      </div>
      </div>
  );
}

export default DanceListFilter;