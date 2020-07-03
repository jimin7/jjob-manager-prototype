import React from "react";
import { Button, Classes, Icon } from "@blueprintjs/core";

function WorkbenchTop({ loginUser, login, logout }) {
  return (
    <>
      <div style={{ height: "50px", width: "100%", border: "solid" }}>
        {loginUser === null ? (
          <Button
            className={Classes.DARK}
            icon={"login"}
            onClick={() => login("jimin")}
          >
            로그인
          </Button>
        ) : (
          <Button className={Classes.DARK} icon={"logout"} onClick={logout}>
            로그아웃
          </Button>
        )}
      </div>
    </>
  );
}

export default WorkbenchTop;
