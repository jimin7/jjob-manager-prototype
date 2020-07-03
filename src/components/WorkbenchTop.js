import React from "react";
import {Button, Classes, Icon, Navbar, NavbarGroup, NavbarHeading, Alignment, NavbarDivider} from "@blueprintjs/core";

function WorkbenchTop({ loginUser, login, logout }) {
  return (
      <>
          <Navbar>
              <NavbarGroup align={Alignment.LEFT}>
                  <NavbarHeading>J-Jobs</NavbarHeading>
              </NavbarGroup>
              <NavbarGroup align={Alignment.RIGHT}>
                  {loginUser === null ? (
                      <Button
                          className={Classes.MINIMAL}
                          icon={"log-in"}
                          onClick={() => login("jimin")}
                      />
                  ) : (
                      <Button className={Classes.MINIMAL} icon={"log-out"} onClick={logout}/>
                  )}
              </NavbarGroup>
          </Navbar>
      </>
  );
}

export default WorkbenchTop;
