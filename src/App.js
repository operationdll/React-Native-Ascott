// @flow
import React from "react";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import { Root } from "native-base";
import Parallax from "./container/ParallaxHeaderContainer";
import Login from "./container/LoginContainer";
import Home from "./container/HomeContainer";

import BlankPage from "./container/BlankPageContainer";
import Sidebar from "./container/SidebarContainer";

const Drawer = DrawerNavigator(
	{
		Home: { screen: Home },
	},
	{
		Parallax: { screen: Parallax },
	},
	{
		initialRouteName: "Parallax",
		contentComponent: props => <Sidebar {...props} />,
	}
);

// const tabview = BottomTabNavigator({
// 	inntroduction: {
//         screen: Home,
//         navigationOptions: () => ({
//             tabBarIcon: ({tintColor}) => (
//                 <Icon
//                     name="bookmark"
//                     color={tintColor}
//                     size={24}
//                 />
//             )
//         })
//     },
// })
const App = StackNavigator(
	{
		Login: { screen: Login },
		BlankPage: { screen: BlankPage },
		Drawer: { screen: Drawer },
		Parallax: { screen: Parallax },
	},
	{
		initialRouteName: "Login",
		headerMode: "none",
	}
);

export default () => (
	<Root>
		<App />
	</Root>
);
