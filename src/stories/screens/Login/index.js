import * as React from "react";
import { Image, Platform, ImageBackground, TouchableOpacity, Picker } from "react-native";
import { Container, Content, Header, Body, Title, Button, Text, View, Icon, Footer, Item, Input } from "native-base";
import { Col, Row, Grid } from 'react-native-easy-grid';
import Toast, { DURATION } from 'react-native-easy-toast';
import RNPickerSelect from 'react-native-picker-select';
import Dropdown from '../../../theme/components/Dropdown';
import styles from "./styles";
export interface Props {
	loginForm: any,
	onLogin: Function,
}
export interface State { }

class Login extends React.Component<Props, State> {
	residence = [
		{
			label: "City Inn",
			value: "City Inn"
		}

	];
	constructor(props) {
		super(props);
		this.state = {
			roomNo: "",
			lastName: "",
			residence: ""
		};
		this.submit = this.submit.bind(this);
		this.onNumberChange = this.onNumberChange.bind(this);
	}

	submit() {
		if (this.state.residence === "" || this.state.roomNo === "" || this.state.lastName === "") {
			this.refs.toast.show('The input information is incomplete!', 1000);
		}
	}

	onNumberChange(residence) {		
        this.setState({residence});
    }

	render() {
		return (
			<Container>
				<ImageBackground source={require('../../../../assets/login_bg.jpg')} style={{ width: '100%', height: '100%' }}>
					<View style={styles.mainContainer}>
						<View style={styles.logoContainer}>
							
						</View>
						<View style={styles.contentContainer}>
							<View>
								<Text style={styles.headerText}>Sign In</Text>
							</View>
							<View>
								<Dropdown 
									data={this.residence}
									selected={this.state.residence}
                                    placeholder={"Find your Residence"}
                                	onChange={this.onNumberChange}																											
								/>
							</View>
							<Grid>
								<Row style={{ height: 70 }}>
									<Col size={45}>
										<Item>
											<Input
												style={styles.inputTextColor}
												placeholder='Room No.'
												placeholderTextColor='#fff'
												value={this.state.roomNo}
												onChangeText={(roomNo) => this.setState({ roomNo })}
											/>
										</Item>
									</Col >
									<Col size={10} />
									<Col size={45}>
										<Item>
											<Input
												style={styles.inputTextColor}
												placeholder='Last Name'
												placeholderTextColor='#fff'
												value={this.state.lastName}
												onChangeText={(lastName) => this.setState({ lastName })}
											/>
										</Item>
									</Col>
								</Row>
								<Row>
									<Col size={45}>
										<Text style={styles.instructionText}>
											Room No: If the room number is less then 3 digits, please add 0 in front of it.
										</Text>
										<Text style={styles.instructionText}>
											e.g. 0101, 2001
										</Text>
									</Col >
									<Col size={10} />
									<Col size={45}>
										<Text style={styles.instructionText}>
											Last Name: Please input your last name
										</Text>
									</Col>
								</Row>
							</Grid>
						</View>
						<View style={styles.footerContainer}>
							<TouchableOpacity onPress={this.submit}>
								<Text style={styles.buttonSignInText}>Guest sign in</Text>
							</TouchableOpacity>
						</View>
					</View>
				</ImageBackground>
				<Toast
					ref='toast'
					fadeInDuration={500}
					fadeOutDuration={500}
					style={styles.toastStyle}
					opacity={0.8}
					position='center'
					textStyle={styles.toastMessageStyle}
				/>
			</Container>
		);
	}
}

export default Login;
