// @flow
import * as React from "react";
import { connect } from "react-redux";
//import Home from "../../stories/screens/Home";
import Home from "../../stories/screens/NewHome"
import Hometabs from "../../stories/screens/Tabs/Hometabs"
import datas from "./data";
import { fetchList } from "./actions";
export interface Props {
	navigation: any,
	fetchList: Function,
	data: Object,
}
export interface State {}
class HomeContainer extends React.Component<Props, State> {
	componentDidMount() {
		this.props.fetchList(datas);
	}
	render() {
		//return <MainTabSeekerNavigator navigation={this.props.navigation} list={this.props.data} />;
		return <Hometabs />
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
export default connect(mapStateToProps, bindAction)(HomeContainer);
