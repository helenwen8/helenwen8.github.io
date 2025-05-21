import React, { useState, useRef, useEffect } from 'react';
import type { ExperienceProps } from '@src/pages/resume/resume';


const CollapsibleExperience: React.FC<ExperienceProps> = ({
  title,
  company,
  location,
  dates,
  description,
  skills,
}) => {
    // return a boolean and a function to set the boolean
    const [isCollapsed, setIsCollapsed] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (contentRef.current) {
        contentRef.current.style.maxHeight = isCollapsed ? '0' : `${contentRef.current.scrollHeight}px`;
        }
    }, [isCollapsed]);

    return (
        <div className="mb-6">
        <div className="flex justify-between cursor-pointer" onClick={() => setIsCollapsed(!isCollapsed)}>
            <h3 className="text-xl font-semibold">
                <span>{isCollapsed ? '▶' : '▼'} </span>
                {title}
            </h3>
            <h3 className="end text-l font-semibold">{dates}</h3>
        </div>

        <div
            ref={contentRef}
            className="overflow-hidden duration-300 ease-in-out"
            style={{ maxHeight: isCollapsed ? '0' : undefined }}
        >
            <div className="flex justify-between">
                <span className="font-semibold">{company}</span>
                <span className="end text-sm">{location}</span>
            </div>
            
            <ul className="list-disc list-inside my-2">
                {description.map((item, idx) => (
                    <li key={idx} className="">{item}</li>
                ))}
            </ul>

            {skills && (
                <div className="mt-2">
                    <span className="font-semibold">Skills:</span>
                    <div className="flex flex-wrap gap-2 mt-1">
                    {skills.map((tech, idx) => (
                        <span key={idx} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                        {tech}
                        </span>
                    ))}
                    </div>
                </div>
            )}
        </div>
        </div>
    );
}

export default CollapsibleExperience;