// @flow
import React from "react";
import { StackNavigator, DrawerNavigator, createBottomTabNavigator } from "react-navigation";
import { ScrollView, Text } from "react-native"
import { Root } from "native-base";
import Parallax from "./container/ParallaxHeaderContainer";
import Login from "./container/LoginContainer";
import Home from "./container/HomeContainer";
import Lockstatus from "./stories/screens/NewHome/Lockstatus"
import Hometabs from "./stories/screens/Tabs/Hometabs"

import BlankPage from "./container/BlankPageContainer";
import Sidebar from "./container/SidebarContainer";
import Introduction from "./container/IntroductionContainer";
import Promotion from "./container/PromotionContainer";
import LocalInterest from "./container/LocalInterestContainer";
import Community from "./container/CommunityContainer";

import Constant from "./Constant";
import Lock from "./stories/screens/NewHome/Lock"
import Drawerview from "./stories/screens/Tabs/Drawerview"
import DrawerviewRight from "./stories/screens/Tabs/DrawerviewRight"

const TabStack = createBottomTabNavigator(
    {
        Introduction: {
            screen: Introduction,
        },
        Promotion: {
            screen: Promotion,
        },
        LocalInterest: {
            screen: LocalInterest,
        },
        Community: {
            screen: Community,
        }
    },
    {
        initialRouteName: 'Introduction',
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false,
        tabBarOptions: {
            showIcon: true,
            activeTintColor: "#F1BF61",
            inactiveTintColor: '#BABABA',
            upperCaseLabel: false,
            tintColor: '#F1BF61',
            style: {
                height: 60,
                backgroundColor: '#fff',
                justifyContent: 'center',
                alignItems: 'center',
            },
            labelStyle: {
                fontSize: 13                
            },
            tabStyle: {
                backgroundColor: "#fff",            
            },
        }
    },
);

const Drawer = DrawerNavigator({
	Home: { screen: Hometabs },
	Lockscreen:{screen:Lock},
	Lockstatus:{screen:Lockstatus},
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
<<<<<<< HEAD
		Drawer: { screen: Drawer },

		
=======
        Drawer: { screen: Drawer },
        TabStack: {screen: TabStack}
>>>>>>> feature/tabNavigator
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
