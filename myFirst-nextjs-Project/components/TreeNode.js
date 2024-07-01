import React from 'react';

import "TreeNode.css"

const TreeNode = (props) => {
  const {node} = props 
  return (
    <div className="bg-container">
      <p className="para">{node.value}</p>
    </div>
  );
};

export default TreeNode;
