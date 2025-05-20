import React, { useState, useRef, useEffect } from 'react';

interface Props {
  title: string;
  company: string;
  location: string;
  dates: string;
  description: string[];
  skills?: string[];
}

const CollapsibleExp: React.FC<Props> = ({
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
            <h3 className="text-xl font-semibold text-gray-700">
                <span>{isCollapsed ? '▶' : '▼'} </span>
                {title}
            </h3>
            <h3 className="end text-l font-semibold text-gray-700">{dates}</h3>
        </div>

        <div
            ref={contentRef}
            className="transition-all overflow-hidden duration-300"
            style={{ maxHeight: isCollapsed ? '0' : undefined }}
        >
            <div className="flex justify-between">
                <span className="text-gray-700 font-semibold">{company}</span>
                <span className="end text-gray-600 text-sm">{location}</span>
            </div>
            
            <ul className="list-disc list-inside my-2">
                {description.map((item, idx) => (
                    <li key={idx} className="text-gray-800">{item}</li>
                ))}
            </ul>

            {skills && (
                <div className="mt-2">
                    <span className="font-semibold text-gray-600">Technologies:</span>
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

export default CollapsibleExp;