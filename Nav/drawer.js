
import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import Tabs from "./Nav";
import Userscreen from "../screens/UserScreen";
import SignupScreen from "../screens/signupscreens";
import SigninScreen from "../screens/signinscreen";
import AllBlogs from "../screens/AllBlogsScreen";
import SearchScreen from "../screens/Searchscreen";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Tabs} />
      <Drawer.Screen name="Profile" component={Userscreen} />
      <Drawer.Screen name="Blogs" component={AllBlogs} />
      <Drawer.Screen name="Signup" component={SignupScreen} />
      <Drawer.Screen name="Login" component={SigninScreen} />
      <Drawer.Screen name="Search" component={SearchScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;