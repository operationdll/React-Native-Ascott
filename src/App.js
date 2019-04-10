import React from "react";
import { ScrollView, Text } from "react-native"

import { StackNavigator, DrawerNavigator, DrawerActions,createStackNavigator, createDrawerNavigator, createBottomTabNavigator } from "react-navigation";
import { Root } from "native-base";
import Parallax from "./container/ParallaxHeaderContainer";
import Login from "./container/LoginContainer";
import Home from "./container/HomeContainer";
import Lockstatus from "./stories/screens/NewHome/Lockstatus"

import BlankPage from "./container/BlankPageContainer";
import Sidebar from "./container/SidebarContainer";
import Constant from "./Constant";
import Lock from "./stories/screens/NewHome/Lock"
import Drawerview from "./stories/screens/Tabs/Drawerview"
import Roomtabs from "./stories/screens/Roomcontrol"
import DrawerviewRight from "./stories/screens/Tabs/DrawerviewRight"
import TabRoomMedia from "./stories/screens/Roomcontrol/TabRoomMedia"
import Hometabs from "./stories/screens/Tabs/Hometabs";
import Mapbox from "./stories/screens/Mapbox"
import Roomreservation from "./stories/screens/Roomreservation"

const TabStack = createDrawerNavigator({
	Home: { screen: Hometabs },
	Lockscreen: { screen: Lock },
	Lockstatus: { screen: Lockstatus },
	Mediaroom: { screen: TabRoomMedia },
	Parallax: { screen: Parallax },
	Roomreservation:{screen:Roomreservation},
	Mapbox:{screen:Mapbox},
}, {
		drawerWidth: Constant.SCREEN_WIDTH / 1.4,
		drawerOpenRoute: 'LeftSideMenu',
		drawerCloseRoute: 'LeftSideMenuClose',
		drawerToggleRoute: 'LeftSideMenuToggle',
		drawerPosition: 'left',
		contentComponent: props => <Drawerview props={props} />,
		getCustomActionCreators: (route, stateKey) => {
			return {
				toggleLeftDrawer: () => DrawerActions.toggleDrawer({ key: stateKey }),
			};
		},
	});

const DrawerRight = DrawerNavigator({
	Drawer: { screen: TabStack },
}, {
		drawerWidth: Constant.SCREEN_WIDTH / 1.4,
		drawerOpenRoute: 'RightSideMenu',
		drawerCloseRoute: 'RightSideMenuClose',
		drawerToggleRoute: 'RightSideMenuToggle',
		drawerPosition: 'right',
		contentComponent: props => <DrawerviewRight props={props} />,
		getCustomActionCreators: (route, stateKey) => {
			return {
				toggleRightDrawer: () => DrawerActions.toggleDrawer({ key: stateKey }),
			};
		},
	});

	const AppMain = createStackNavigator(
		{
			Login: { screen: Login },
			DrawerRight:{screen:DrawerRight},
			// BlankPage: { screen: BlankPage },
			//Drawer: { screen: Drawer },
			// Parallax: { screen: Parallax },
			//Home: { screen: Hometabs },
			//Drawer: { screen: TabStack },
			//TabStack: {screen: TabStack}
		},
		{
			initialRouteName: "Login",
			//initialRouteName: "Login",
			//initialRouteName: "Drawer",
			//initialRouteName: "TabStack",
			headerMode: "none",
		}
	);

export default class App extends React.Component {
	render() {
		return (
			
			<Root>
				{/* <DrawerRight screenProps={{ rootNavigation: this.props.navigation }} /> */}
				<AppMain/>
			</Root >
		)
	}
	}
