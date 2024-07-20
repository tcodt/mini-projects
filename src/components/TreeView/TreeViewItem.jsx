/* eslint-disable react/prop-types */
import { useState } from "react";
import TreeViewList from "./TreeViewList";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function TreeViewItem({ item }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  const handleToggleChildren = (currentLabel) => {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [currentLabel]: !displayCurrentChildren[currentLabel],
    });
  };

  return (
    <li>
      <div className="flex items-center gap-4 cursor-pointer">
        <p>{item.label}</p>
        {item && item.children ? (
          <span onClick={() => handleToggleChildren(item.label)}>
            {displayCurrentChildren[item.label] ? <FaMinus /> : <FaPlus />}
          </span>
        ) : null}
      </div>

      {item && item.children && displayCurrentChildren[item.label] ? (
        <div className="ml-4">
          <TreeViewList list={item.children} />
        </div>
      ) : null}
    </li>
  );
}
