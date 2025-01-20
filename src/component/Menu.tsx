import React, { useState } from "react";
import { HiChevronDown, HiCheckCircle } from "react-icons/hi";

interface Project {
  name: string;
  description: string;
  isCompleted?: boolean;
}

interface MenuProps {
  projects: Project[];
}

const Project: React.FC<Project> = ({ name, description, isCompleted }) => (
  <div
    className="w-full px-6 py-3 bg-blue-600 text-white text-sm font-medium rounded-lg shadow hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 transition text-left flex items-center justify-between"
    title={description}
  >
    <div className="flex items-center space-x-2">
      {isCompleted && <HiCheckCircle className="text-green-400 text-lg" />}
      <span>{name}</span>
    </div>
    <HiChevronDown className="text-white text-lg" />
  </div>
);

const Menu: React.FC<MenuProps> = ({ projects }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-lg mx-auto">
      {/* Menu Header */}
      <button
        className="w-full px-6 py-3 bg-blue-600 text-white text-sm font-medium rounded-lg shadow hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 transition"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
        aria-controls="project-list"
      >
        {expanded ? "Hide Projects" : "Show Projects"}
      </button>

      {/* Expandable Section */}
      <div
        id="project-list"
        className={`transition-[max-height] duration-300 ease-in-out overflow-hidden ${
          expanded ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className={`mt-4 ${expanded ? "opacity-100" : "opacity-0"}`}>
          {projects.map((project, index) => (
            <Project
              key={index}
              name={project.name}
              description={project.description}
              isCompleted={project.isCompleted}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
