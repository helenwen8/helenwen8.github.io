import React, { useState, useRef, useEffect } from 'react';

interface ExperienceProps {
  projectName: string;
  dates: string;
  role: string;
  description: string[];
  skills?: string[];
}

const CollapsibleProject: React.FC<ExperienceProps> = ({
  projectName,
  dates,
  role,
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
                {projectName}
            </h3>
            <h3 className="end text-l font-semibold">{dates}</h3>
        </div>

        <div
            ref={contentRef}
            className="overflow-hidden duration-300 ease-in-out"
            style={{ maxHeight: isCollapsed ? '0' : undefined }}
        >
                <span className="font-semibold">{role}</span>
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
    );
}

export default CollapsibleProject;