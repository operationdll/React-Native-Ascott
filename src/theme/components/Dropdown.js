import React from 'react';
import {Text, View, Dimensions, Platform, Image} from "react-native";
import {Option, Select} from "react-native-chooser";
import RNPickerSelect from "react-native-picker-select";

export default class Dropdown extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: props.selected,
            data: props.data
        } 
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.data){
            this.setState({data:nextProps.data});
        }
    }

    render() {
        let maxModalHeight = Dimensions.get("window").height - 200;
        let modalHeight = this.props.data.length * 50;
        if (modalHeight > maxModalHeight) modalHeight = maxModalHeight;

        return (            
            <View>
                <Image 
                    source={require('../../../assets/down-arrow.png')}
                    style={{position: 'absolute',top: 30,right: 5,zIndex: 600, width: 17, height: 10, tintColor: '#fff'}}
                />               
                {
                    Platform.OS === 'ios' &&
                <View style={{marginTop: 5}}>
                <RNPickerSelect
                    placeholder={{
                        label: this.props.placeholder,
                        value: '',
                    }}
                    hideIcon={true}
                    items={this.state.data}
                    onValueChange={(value) => this.props.onChange(value)}
                    style={{
                        inputIOS: {
                            textAlign: 'left',
                            height: 40,
                            fontSize: 17
                        },
                        underline:{
                            borderTopWidth: 0,
                        },
                        placeholderColor: this.props.disabled ? "#fff" : '#fff',
                        viewContainer: {
                            backgroundColor: 'transparent',
                            borderColor: '#fff',
                            borderWidth: 1,
                            paddingVertical: 10,
                            marginHorizontal: 20,
                            marginBottom: 10,
                            paddingHorizontal: 10,

                        }
                    }}
                    disabled={this.props.disabled}
                    value={this.state.selected}

                />                 
                </View>
                }
                {
                    Platform.OS === "android" &&
                    <View style={[styles.container, {backgroundColor: 'transparent'}]}
                          pointerEvents={this.props.disabled ? "none" : "auto"}>
                        <Select
                            onSelect={(value) => this.props.onChange(value)}
                            defaultText={this.props.placeholder}
                            selected={this.state.selected}
                            style={{
                                width: Dimensions.get("window").width - 50,                                
                                alignItems: 'flex-start',
                                justifyContent: "center",                            
                                borderWidth: 0,
                                padding: 0,
                                marginLeft: 0
                            }}
                            indicatorSize={15}
                            indicatorColor={"#fff"}
                            textStyle={{
                                textAlign: 'center',
                                alignSelf: 'center',
                                justifyContent: 'center',
                                fontSize: 17,
                                color: "#fff"
                            }}
                            transparent={true}
                            backdropStyle={{backgroundColor: "transparent"}}
                            optionListStyle={{backgroundColor: "white", height: modalHeight}}
                        >
                            {
                                this.props.data.map((item) => {
                                    return (
                                        <Option value={item.value}
                                                style={{
                                                    height: 50,                                                    
                                                    justifyContent: 'center',
                                                    alignItems: 'center'
                                                }}>
                                            <Text style={{textAlign: 'center'}}>{item.label}</Text>
                                        </Option>
                                    );
                                })
                            }
                        </Select>
                    </View>
                }

            </View>
        );
    }

}

const styles = {
    container: {
        marginHorizontal: 20,
        width: Dimensions.get("window").width - 40,
        borderBottomColor: "#fff",
        borderBottomWidth: 1,
        padding: 15,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'center',
        marginTop: 5,
        marginBottom: 10,
        marginLeft: 0
    },
    itemStyle: {
        fontSize: 18,
        height: 75,
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    picker: {
        width: 100,
    },
};