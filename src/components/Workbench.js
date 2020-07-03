import React, { useState } from "react";
import WorkbenchTop from "./WorkbenchTop";
import WorkbenchBody from "./WorkbenchBody";

import { Mosaic } from "react-mosaic-component";

function Workbench() {
  const [loginUser, setLoginUser] = useState("jimin");
  const [selectedItem, setSelectedItem] = useState(null);

  function logout() {
    setLoginUser(null);
  }

  function login(userName) {
    setLoginUser(userName);
    alert(`${userName}이 로그인되었습니다.`);
  }

  console.log("loginUser : " + loginUser);
  return (
    <>
      <WorkbenchTop loginUser={loginUser} login={login} logout={logout} />
      <WorkbenchBody
        loginUser={loginUser}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
    </>
  );
}

export default Workbench;
