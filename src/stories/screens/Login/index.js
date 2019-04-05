import * as React from "react";
import { Image, Platform, ImageBackground, TouchableOpacity, Picker, TextInput, KeyboardAvoidingView } from "react-native";
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
		const { onLogin } = this.props;
	//	const { verifyUser, isValid } = this.props;
		const resident = this.state.residence;
		const roomNo = this.state.roomNo;
		const lastName = this.state.lastName;
		//onLogin();

	//	verifyUser({resident, roomNo, lastName});
		if (resident === "" || roomNo === "" || lastName === "") {
			this.refs.toast.show('The input information is incomplete!', 1000);
		}
    	else if(roomNo !== "7202" || lastName !== "wang")
		{
            this.refs.toast.show('Incorrect room NO. or guest name', 1000)
		}
		else{
			console.log('test login');
			this.props.navigation.navigate('Home');
		}
		
	}

	onNumberChange(residence) {
		this.setState({ residence });
	}

	render() {
		return (
			<ImageBackground source={require('../../../../assets/login_bg.jpg')} style={{ width: '100%', height: '100%' }}>
				<KeyboardAvoidingView style={styles.mainContainer} enabled>
					<View style={styles.contentContainer}>
						<View>
							<Text style={styles.headerText}>Sign In</Text>
						</View>
						<View style={styles.inputContainer}>
							<Dropdown
								data={this.residence}
								selected={this.state.residence}
								placeholder={"Find your Residence"}
								onChange={this.onNumberChange}
							/>
							<View style={styles.textFieldContainer}>
								<TextInput
									style={styles.inputText}
									placeholder='Room No.'
									placeholderTextColor='#fff'
									value={this.state.roomNo}
									onChangeText={(roomNo) => this.setState({ roomNo })}
									underlineColorAndroid='#fff'
								/>
								<TextInput
									style={[styles.inputText, styles.inputPadding]}
									placeholder='Last Name'
									placeholderTextColor='#fff'
									value={this.state.lastName}
									onChangeText={(lastName) => this.setState({ lastName })}
									underlineColorAndroid='#fff'
								/>
							</View>
							<View style={styles.textContainer}>
								<Text style={styles.instructionText}>
									{"Room No: If the room number is less then 3 digits, please add 0 in front of it.\ne.g. 0101, 2001"}
								</Text>
								<Text style={[styles.instructionText, styles.inputPadding]}>
									{"Last Name: Please input your last name"}
								</Text>
							</View>
						</View>

						<View style={styles.buttonContainer}>
							<TouchableOpacity onPress={this.submit}>
								<Text style={styles.buttonSignInText}>Guest sign in</Text>
							</TouchableOpacity>
						</View>
					</View>
				</KeyboardAvoidingView>
				<Toast
					ref='toast'
					fadeInDuration={500}
					fadeOutDuration={500}
					style={styles.toastStyle}
					opacity={0.8}
					position='center'
					textStyle={styles.toastMessageStyle}
				/>
			</ImageBackground>
		);
	}
}

export default Login;
