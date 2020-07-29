import React, { createContext, useState } from "react";

export const NavToggleContext = createContext();

export const NavToggleProvider = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <NavToggleContext.Provider value={[open, setOpen]}>
      {props.children}
    </NavToggleContext.Provider>
  );
};
