// @flow
import * as React from "react";
import { connect } from "react-redux";
import ParallaxHeader from "../../stories/screens/ParallaxHeader";
import datas from "./data";
import { fetchList } from "./actions";

import { getConfig } from "../../utils/config";
export interface Props {
	navigation: any,
	fetchList: Function,
	data: Object,
}
export interface State {}
class ParallaxHeaderContainer extends React.Component<Props, State> {
	componentDidMount() {
		this.props.fetchList(datas);
		getConfig();
	}
	render() {
		return <ParallaxHeader navigation={this.props.navigation} list={this.props.data}/>;
	}
}

function bindAction(dispatch) {
	return {
		fetchList: url => dispatch(fetchList(url)),
	};
}

const mapStateToProps = state => ({
	data: state.homeReducer.list,
	isLoading: state.homeReducer.isLoading,
});
export default connect(mapStateToProps, bindAction)(ParallaxHeaderContainer);
