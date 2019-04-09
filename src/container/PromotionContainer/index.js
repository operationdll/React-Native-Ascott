// @flow
import * as React from "react";
import { connect } from "react-redux";
import Promotion from "../../stories/screens/Promotion";
import { Icons, TabIcons } from "../../theme/icons";

class PromotionContainer extends React.Component<Props, State> {
	static navigationOptions = {
		tabBarIcon: ({ focused, tintColor }) =>
			TabIcons(Icons.Promotion(tintColor), tintColor, focused)
	};
	render() {
		return <Promotion navigation={this.props.navigation}/>;
	}
}


export default PromotionContainer;
