import React, { useCallback, useState } from "react";
import { HiChevronDown } from "react-icons/hi";

function MenuDropDown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleMenuClick = (project: string) => {
    // Navigate to the project page
    window.location.href = `/${project}`;
  };

  //       {/* Dropdown Menu */}
  //       {isOpen && (
  //         <div className="absolute mt-2 bg-white border rounded-lg shadow-lg w-48">
  //           <ul className="py-2">
  //             {["project1", "project2", "project3"].map((project) => (
  //               <li key={project}>
  //                 <button
  //                   className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
  //                   onClick={() => handleMenuClick(project)}
  //                 >
  //                   {project.replace("project", "Project ")}
  //                 </button>
  //               </li>
  //             ))}
  //           </ul>
  //         </div>
  //       )}
  //     </div>
  //   );
  // };

  return (
    <div>
      <button
        className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
        onClick={toggleDropdown}
      >
        Menu
        <HiChevronDown className="ml-2" />
      </button>
      {isOpen && (
        <div className="absolute mt-2 bg-white border rounded-lg shadow-lg w-48">
          <ul className="list-inside list-none">
            <li>
              <div
                style={{ color: "black", width: "100%" }}
                onClick={() => handleMenuClick("todolist")}
              >
                Todo List
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default MenuDropDown;
