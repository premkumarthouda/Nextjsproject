import React, { useState } from 'react';
import TreeNode from './TreeNode';

const Tree = () => {
  const [tree, setTree] = useState({ value: 1, children: [] });

  // Function to render tree nodes recursively
  const renderTree = (node) => {
    return (
      <div style={{ marginLeft: 20 }}>
        <TreeNode node={node} />
        {node.children && node.children.map((child, index) => (
          <div key={index}>
            {renderTree(child)}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      {renderTree(tree)}
    </div>
  );
};

export default Tree;
