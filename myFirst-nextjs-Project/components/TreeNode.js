import React from 'react';

import "TreeNode.css"

const TreeNode = ({ node }) => {
  return (
    <div className="bg-container">
      <p className="para">{node.value}</p>
    </div>
  );
};

export default TreeNode;
