import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    SafeAreaView
} from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import stringsoflanguages from '../components/locales/stringsoflanguages';
import ActionButton from 'react-native-circular-action-menu';


class SettingsActivity extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }


    showLoading() {
        this.setState({ loading: true });
    }

    hideLoading() {
        this.setState({ loading: false });
    }

    static navigationOptions = {
        title: 'Dashboard'
    };

    componentDidMount() {

    }



    render() {
        return (
            <SafeAreaView style={styles.container}>

                <View style={styles.insideContainer}>


                    <View style={{
                        flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#FB4252',
                        flex: .3, width: '100%'

                    }}>

                        <TouchableOpacity style={{
                            alignItems: 'center', justifyContent: 'center',
                            alignContent: 'center'
                        }}
                            onPress={() => { }} >

                            <Image
                                source={require('../images/profile.jpg')}
                                style={{ width: 100, height: 100, borderRadius: 100 / 2, borderWidth: 2, borderColor: 'white' }}
                            />

                        </TouchableOpacity>


                        <Text style={styles.profileNameStyle}>John Smith</Text>



                    </View>

                    <View style={{
                        flexDirection: 'column', alignItems: 'center', backgroundColor: '#ffffff',
                        flex: .7, width: '100%'
                    }}>


                        <View style={{
                            flexDirection: 'column', alignItems: 'center', backgroundColor: '#ffffff', flex: 1, marginTop: 20
                        }}>


                            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>

                                {/* <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }}>

                                    <Image source={require('../images/setting_profile_icon.png')}
                                        style={styles.StyleMenuIcon} />

                                </TouchableOpacity> */}


                                <View style={styles.second_half_view}>

                                    <Text style={styles.labeltextstyle}>{stringsoflanguages.Profile}</Text>

                                </View>

                            </View>


                            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>

                                {/* <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }}>

                                    <Image source={require('../images/setting_profile_icon.png')}
                                        style={styles.StyleMenuIcon} />

                                </TouchableOpacity> */}


                                <View style={styles.second_half_view}>

                                    <Text style={styles.labeltextstyle}>{stringsoflanguages.my_subscription}</Text>

                                </View>

                            </View>


                            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>


                                <View style={styles.second_half_view}>
                                    <Text style={styles.labeltextstyle}>{stringsoflanguages.subscribed_videos}</Text>
                                </View>
                            </View>



                            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>

                                <View style={styles.second_half_view}>
                                    <Text style={styles.labeltextstyle}>{stringsoflanguages.change_password}</Text>
                                </View>
                            </View>



                            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>

                                <View style={styles.second_half_view}>
                                    <Text style={styles.labeltextstyle}>{stringsoflanguages.notification}</Text>
                                </View>
                            </View>


                            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>

                                <View style={styles.second_half_view}>
                                    <Text style={styles.labeltextstyle}>{stringsoflanguages.who_we_are}</Text>
                                </View>
                            </View>

                            <TouchableOpacity 
                            style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}
                            onPress={() => this.props.navigation.navigate('Login') }>

                                <View style={styles.second_half_view}>
                                    <Text style={styles.labeltextstyle}>{stringsoflanguages.Logout}</Text>
                                </View>
                   </TouchableOpacity>



                        </View>



                        <View style={{
                            flexDirection: 'column', alignItems: 'center', backgroundColor: '#ffffff',
                            flex: .14, width: '100%'
                        }}>


                            <View style={styles.tabStyle}>

                                <TouchableOpacity style={styles.tabButtonStyle}
                                    onPress={() => { this.props.navigation.navigate('Dashboard') }}>

                                    <Image source={require('../images/home_inactive.png')}
                                        style={styles.StyleHomeTab} />

                                    <Text style={styles.bottominactivetextstyle}>{stringsoflanguages.Home}</Text>

                                </TouchableOpacity>

                                <TouchableOpacity style={styles.tabButtonStyle}
                                    onPress={() => { this.props.navigation.navigate('Dashboard') }}>

                                    <Image source={require('../images/video_inactive.png')}
                                        style={styles.StyleVideoTab} />

                                    <Text style={styles.bottomvideotextstyle}>{stringsoflanguages.my_videos}</Text>

                                </TouchableOpacity>



                                <View style={{ position: 'absolute', alignSelf: 'center', backgroundColor: '#fffff', width: 70, height: 100, bottom: 5, zIndex: 10 }}>

                                    <View style={{ flex: 1 }}>
                                        <ActionButton
                                            buttonColor="#ffffff"
                                            onPress={() => {

                                                this.props.navigation.navigate('ServiceContractScreen1')

                                            }}>


                                        </ActionButton>
                                    </View>
                                </View>


                                <TouchableOpacity style={styles.tabButtonStyle}
                                >

                                    <Image source={require('../images/bell_inactive.png')}
                                        style={styles.styleNotificationTab} />

                                    <Text style={styles.bottomnotificationtextstyle}>{stringsoflanguages.notification_small}</Text>

                                </TouchableOpacity>


                                <TouchableOpacity style={styles.tabButtonStyle}
                                    onPress={() => { this.props.navigation.navigate('Contactus') }}>

                                    <Image source={require('../images/setting_active.png')}
                                        style={styles.StyleProfileTab} />

                                    <Text style={styles.bottomactivetextstyle}>{stringsoflanguages.settings}</Text>


                                </TouchableOpacity>






                            </View>


                        </View>


                    </View>

                </View>

            </SafeAreaView>
        );
    }
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    insideContainer: {
        flex: 1,
        backgroundColor: '#FB3954'
    },
    loading: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        opacity: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loading_text: {
        fontSize: RFValue(10, 580),
        textAlign: 'center',
        color: '#FFC33B',
        fontWeight: 'bold'
    },
    input: {
        color: 'black',
        height: 50,
        padding: 10,
        flex: .5,
        textAlign: 'left',
        backgroundColor: 'transparent'
    },
    labeltextstyle: {
        color: '#4D4D4D',
        marginLeft: 10,
        fontSize: RFPercentage(2),
        textAlign: 'left'
    },
    bottomactivetextstyle: {
        color: "#FB3954",
        fontSize: 8,
        marginTop: 5,
        textAlign: 'center'
    },
    bottominactivetextstyle: {
        color: "#887F82",
        fontSize: 8,
        marginTop: 3,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    StyleHomeTab: {
        marginTop: 5,
        width: 30,
        height: 28,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    StyleVideoTab: {
        marginTop: 11,
        marginRight: 40,
        width: 38,
        height: 23,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomvideotextstyle: {
        color: "#887F82",
        fontSize: 8,
        marginRight: 40,
        marginTop: 3,
        textAlign: 'center',
    },
    styleNotificationTab: {
        marginTop: 9,
        width: 25,
        height: 30,
        marginLeft: 40,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomnotificationtextstyle: {
        color: "#887F82",
        fontSize: 8,
        marginLeft: 40,
        marginTop: 3,
        textAlign: 'center'
    },
    StyleProfileTab: {
        marginTop: 9,
        width: 30,
        height: 30,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        height: 60,
        margin: 5,
        shadowColor: '#ecf6fb',
        elevation: 20,
        shadowColor: 'grey',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 1
    }
    ,
    tabButtonStyle: {
        flex: .25,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    lineStyle: {
        borderWidth: 1,
        borderColor: 'black',
        margin: 10,
        width: 300
    },
    StyleMenuIcon: {
        width: 50,
        height: 60,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    second_half_view: {
        flex: .80,
        justifyContent: 'center',
        marginLeft: 5,
        marginTop: 10,
        alignSelf: 'center'
    },
    profileNameStyle: {
        color: 'white',
        marginLeft: 10,
        marginTop:20,
        fontSize: RFPercentage(2),
        textAlign: 'center'

    },


});

export default SettingsActivity;
