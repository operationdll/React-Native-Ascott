// @flow
import React from "react";
import { ScrollView, Text } from "react-native"
import { StackNavigator, DrawerNavigator } from "react-navigation";
import { Root } from "native-base";
import Parallax from "./container/ParallaxHeaderContainer";
import Login from "./container/LoginContainer";
import Home from "./container/HomeContainer";
import Lockstatus from "./stories/screens/NewHome/Lockstatus"
import Hometabs from "./stories/screens/Tabs/Hometabs"

import BlankPage from "./container/BlankPageContainer";
import Sidebar from "./container/SidebarContainer";
import Constant from "./Constant";
import Lock from "./stories/screens/NewHome/Lock"
import Drawerview from "./stories/screens/Tabs/Drawerview"
import Roomtabs from  "./stories/screens/Rommcontrol"
import DrawerviewRight from "./stories/screens/Tabs/DrawerviewRight"
import TestRoomMedia from "./stories/screens/Rommcontrol/TestRoomMedia"

const Drawer = DrawerNavigator({
	Home: { screen: Hometabs },
	Lockscreen:{screen:Lock},
	Lockstatus:{screen:Lockstatus},
	Mediaroom:{screen:TestRoomMedia},
	Parallax: { screen: Parallax },
}, {
		drawerWidth: Constant.SCREEN_WIDTH / 1.4,
		drawerOpenRoute: 'LeftSideMenu',
		drawerCloseRoute: 'LeftSideMenuClose',
		drawerToggleRoute: 'LeftSideMenuToggle',
		drawerPosition: 'left',
		contentComponent: props => <Drawerview props={props} />
	});

const DrawerRight = DrawerNavigator({
	Drawer: { screen: Drawer },
}, {
		drawerWidth: Constant.SCREEN_WIDTH / 1.4,
		drawerOpenRoute: 'RightSideMenu',
		drawerCloseRoute: 'RightSideMenuClose',
		drawerToggleRoute: 'RightSideMenuToggle',
		drawerPosition: 'right',
		contentComponent: props => <DrawerviewRight props={props} />
	});

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
		// BlankPage: { screen: BlankPage },
		//Drawer: { screen: Drawer },
		// Parallax: { screen: Parallax },
		// Home: { screen: Hometabs },
		Drawer: { screen: Drawer },

		
	},
	{
		//initialRouteName: "Home",
		//initialRouteName: "Login",
		//initialRouteName: "Drawer",
		initialRouteName: "Drawer",
		headerMode: "none",
	}
);

export default () => (
	<Root>
		<DrawerRight />
	</Root>
);
