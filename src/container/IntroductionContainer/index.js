// @flow
import * as React from "react";
import { connect } from "react-redux";
import Introduction from "../../stories/screens/Introduction";
import { Icons, TabIcons } from "../../theme/icons";

class IntroductionContainer extends React.Component<Props, State> {
	static navigationOptions = {
		tabBarIcon: ({ focused, tintColor }) =>
			TabIcons(Icons.Introduction(tintColor), tintColor, focused)
	};
	render() {
		return <Introduction navigation={this.props.navigation} />;
	}
}

export default IntroductionContainer;
