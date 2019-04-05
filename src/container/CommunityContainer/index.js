// @flow
import * as React from "react";
import { connect } from "react-redux";
import Community from "../../stories/screens/Community";
import { Icons, TabIcons } from "../../theme/icons";

class CommunityContainer extends React.Component<Props, State> {
	static navigationOptions = {
		tabBarIcon: ({ focused, tintColor }) =>
			TabIcons(Icons.Community(tintColor), tintColor, focused)		
	};
	render() {
		return <Community navigation={this.props.navigation}/>;
	}
}

export default CommunityContainer;
