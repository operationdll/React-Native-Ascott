// @flow
import React from "react";
import { StackNavigator, DrawerNavigator, createBottomTabNavigator } from "react-navigation";
import { Root } from "native-base";
import Parallax from "./container/ParallaxHeaderContainer";
import Login from "./container/LoginContainer";
import Home from "./container/HomeContainer";
import BlankPage from "./container/BlankPageContainer";
import Sidebar from "./container/SidebarContainer";
import Introduction from "./container/IntroductionContainer";
import Promotion from "./container/PromotionContainer";
import LocalInterest from "./container/LocalInterestContainer";
import Community from "./container/CommunityContainer";

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

const Drawer = DrawerNavigator(
    {
        Home: { screen: Home },
    },
    {
        TabStack: { screen: TabStack }
    },
    {
        Parallax: { screen: Parallax },
    },
    {
        initialRouteName: "Parallax",
        contentComponent: props => <Sidebar {...props} />,
    }
);

const App = StackNavigator(
    {
        Login: { screen: Login },
        BlankPage: { screen: BlankPage },
        Drawer: { screen: Drawer },
        Parallax: { screen: Parallax },
        TabStack: { screen: TabStack }
    },
    {
        initialRouteName: "TabStack",
        headerMode: "none",
    }
);

export default () => (
    <Root>
        <App />
    </Root>
);
