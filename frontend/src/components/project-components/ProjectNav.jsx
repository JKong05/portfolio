import React from "react";

export default function ProjectNav({ onCategoryChange, selectedCategory }) {
    return (
        <nav>
            <ul className="flex space-x-4 text-lg font-semibold">
                <div 
                    className={`flex box box-content border-2 ${
                        selectedCategory === 'all' 
                            ? 'border-white' 
                            : 'border-transparent'
                    } border-white rounded-md w-auto items-center justify-center px-2 py-1 cursor-pointer hover:border-white`}
                    onClick={() => onCategoryChange('all')}
                >
                    <li>
                        All
                    </li>
                </div>
                <div 
                    className={`flex box box-content border-2 ${
                        selectedCategory === 'webdev' 
                            ? 'border-white' 
                            : 'border-transparent'
                    } border-white rounded-md w-auto items-center justify-center px-2 py-1 cursor-pointer hover:border-white`}
                    onClick={() => onCategoryChange('webdev')}
                >
                    <li>
                        Web Dev
                    </li>
                </div>
                <div 
                    className={`flex box box-content border-2 ${
                        selectedCategory === 'research' 
                            ? 'border-white' 
                            : 'border-transparent'
                    } border-white rounded-md w-auto items-center justify-center px-2 py-1 cursor-pointer hover:border-white`}
                    onClick={() => onCategoryChange('research')}
                >
                    <li>
                        Research
                    </li>
                </div>
            </ul>
        </nav>
    );
}