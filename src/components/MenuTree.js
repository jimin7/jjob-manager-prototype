import React, { useState, useEffect } from "react";
import {
  Tree,
  Tooltip,
  Icon,
  Position,
  Intent,
  Classes,
} from "@blueprintjs/core";

const INITIAL_STATE = [
  {
    id: 0,
    hasCaret: true,
    icon: "folder-close",
    label: "Folder 0",
  },
  {
    id: 1,
    icon: "folder-close",
    isExpanded: true,
    label: (
      <Tooltip content="I'm a folder <3" position={Position.RIGHT}>
        Folder 1
      </Tooltip>
    ),
    childNodes: [
      {
        id: 2,
        icon: "document",
        label: "Item 0",
        secondaryLabel: (
          <Tooltip content="An eye!">
            <Icon icon="eye-open" />
          </Tooltip>
        ),
      },
      {
        id: 3,
        icon: (
          <Icon
            icon="tag"
            intent={Intent.PRIMARY}
            className={Classes.TREE_NODE_ICON}
          />
        ),
        label:
          "Organic meditation gluten-free, sriracha VHS drinking vinegar beard man.",
      },
      {
        id: 4,
        hasCaret: true,
        icon: "folder-close",
        label: (
          <Tooltip content="foo" position={Position.RIGHT}>
            Folder 2
          </Tooltip>
        ),
        childNodes: [
          { id: 5, label: "No-Icon Item" },
          { id: 6, icon: "tag", label: "Item 1" },
          {
            id: 7,
            hasCaret: true,
            icon: "folder-close",
            label: "Folder 3",
            childNodes: [
              { id: 8, icon: "document", label: "Item 0" },
              { id: 9, icon: "tag", label: "Item 1" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 10,
    hasCaret: true,
    icon: "folder-close",
    label: "Super secret files",
  },
];

function MenuTree({ loginUser, selectedItem, setSelectedItem }) {
  const [nodes, setNodes] = useState(INITIAL_STATE);

  function handleNodeSelected(nodeData, nodePath, e) {
    setSelectedItem(nodeData.id);
    setNodes(forEachNode(nodes, nodeData.id));
  }

  function forEachNode(children, id) {
    if (children === null) return;

    return children.map((node) => {
      if (node.childNodes) {
        node.childNodes = forEachNode(node.childNodes, id);
      }
      return node.id === id
        ? { ...node, isSelected: true }
        : { ...node, isSelected: false };
    });
  }

  function handleNodeCollapse(nodeData) {
    setNodes(
      nodes.map((node) =>
        node.id === nodeData.id ? { ...node, isExpanded: false } : node
      )
    );
  }
  function handleNodeExpand(nodeData) {
    setNodes(
      nodes.map((node) =>
        node.id === nodeData.id ? { ...node, isExpanded: true } : node
      )
    );
  }

  // setTimeout(() => {
  //   setNodes(INITIAL_STATE);
  // }, 3000);

  return (
    <>
      {loginUser ? (
        <Tree
          contents={nodes}
          onNodeClick={handleNodeSelected}
          onNodeExpand={handleNodeExpand}
          onNodeCollapse={handleNodeCollapse}
        />
      ) : (
        <Tree
          contents={[]}
          onNodeClick={handleNodeSelected}
          onNodeExpand={handleNodeExpand}
          onNodeCollapse={handleNodeCollapse}
        />
      )}
    </>
  );
}

export default MenuTree;
