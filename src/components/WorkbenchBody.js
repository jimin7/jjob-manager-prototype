import React from "react";
import Layout from "./Layout";
import MenuTree from "./MenuTree";

import { Mosaic, MosaicWindow } from "react-mosaic-component";
import MapEditor from "./MapEditor";

function WorkbenchBody({ loginUser, selectedItem, setSelectedItem }) {
  //   const TITLE_MAP = {
  //     navigator: {
  //       name: "Navigator",
  //       body: (
  //         <Layout name={"navigator"}>
  //           <MenuTree loginUser={loginUser} />
  //         </Layout>
  //       ),
  //     },
  //     editor: { name: "Editor", body: <Layout name={"editor"}></Layout> },
  //     property: { name: "Property", body: <Layout name={"property"}></Layout> },
  //     view: { name: "View", body: <Layout name={"view"}></Layout> },
  //   };
  const TITLE_MAP = {
    navigator: {
      name: "Navigator",
      body: (
        <Layout name={"navigator"}>
          <MenuTree
            loginUser={loginUser}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
          />
        </Layout>
      ),
    },
    editor: {
      name: "Editor",
      body: (
        <Layout name={"editor"}>
          <MapEditor selectedItem={selectedItem} />
        </Layout>
      ),
    },
  };

  return (
    <Mosaic
      renderTile={(id, path) => (
        <MosaicWindow path={path} draggable={false} title={TITLE_MAP[id].name}>
          {TITLE_MAP[id].body}
        </MosaicWindow>
      )}
      initialValue={{
        direction: "row",
        first: "navigator",
        second: "editor",
        splitPercentage: 30,
      }}
    />
    // <div>
    //   <Layout name={"navigator"}>
    //     <MenuTree loginUser={loginUser} />
    //   </Layout>
    //   <Layout name={"editor"}></Layout>
    //   <Layout name={"property"}></Layout>
    //   <Layout name={"view"}></Layout>
    // </div>
  );
}

export default WorkbenchBody;
