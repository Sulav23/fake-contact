import React from "react";
import {
  AppBar,
  AppBarSection,
  AppBarSpacer,
} from "@progress/kendo-react-layout";

const Navbar = () => {
  return (
    <AppBar themeColor="dark">
      <AppBarSpacer />
      <AppBarSection>
        <h2>Contacts</h2>
      </AppBarSection>
      <AppBarSpacer />
    </AppBar>
  );
};

export default Navbar;
