// @flow
import * as React from "react";
import { connect } from "react-redux";
import LocalInterest from "../../stories/screens/LocalInterest";
import { Icons, TabIcons } from "../../theme/icons";

class LocalInterestContainer extends React.Component<Props, State> {
	static navigationOptions = {
		tabBarIcon: ({ focused, tintColor }) =>
			TabIcons(Icons.LocalInterest(tintColor), tintColor, focused),
		title: 'Local Interest',
	};
	render() {
		return <LocalInterest navigation={this.props.navigation}/>;
	}
}

export default LocalInterestContainer;
