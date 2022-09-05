import react, { useState } from "react";
import { View, StyleSheet, Text, TouchableHighlight } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function ({navigation}) {  
    return(
        <View>
            <View>
                <View style={style.container}>
                <Ionicons name="ios-partly-sunny" size={72} color="yellow" />
                    <Text style={style.txtRain}>Nuvens Pesadas</Text>
                    <Text style={style.txtDate}>Quarta, 31 Ago</Text>
                    <Text style={style.txtTemp}>24°</Text>
                </View>

                <View style={style.containerSecondary}>
                    <Text style={style.txtContainerSecondary}>Vento: 19.2km/j</Text>
                    <Text style={style.txtContainerSecondary}>Sensação Térmica: 25°</Text>
                    <Text style={style.txtContainerSecondary}>Índice UV: 2</Text>
                    <Text style={style.txtContainerSecondary}>Pressão: 1014 mbar</Text>
                </View>

            </View>

            <View style={style.containerPrediction}>
                <TouchableHighlight 
                    style={style.btnPrediction}
                    onPress={() => navigation.navigate('SecondaryScreen')}
                    underlayColor='#008'
                >
                    <View>
                        <Text>Next 7 Days</Text>
                    </View>
                </TouchableHighlight>
                <Text style={style.txtPrediction}>Today</Text>
            </View>

            <View style={style.containerIcons}>
                <Ionicons name="ios-partly-sunny" size={50} color="yellow" style={style.icons} />
                <Ionicons name="ios-partly-sunny" size={50} color="yellow" style={style.icons}/>
                <Ionicons name="ios-ellipse-sharp" size={50} color="yellow" style={style.icons}/>
                <Ionicons name="rainy" size={50} color="gray" style={style.icons}/>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        backgroundColor: '#437AFF',
        width: 360,
        height: 300,
        borderTopRightRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

    containerSecondary:{
        backgroundColor: '#437AFF',
        width: 360,
        height: 100,
        borderBottomEndRadius: 10,
        marginTop: 1,
        flexDirection: 'row',
    },

    containerPrediction:{
        paddingTop: 40
    },

    containerIcons: {
        flexDirection: "row",
        padding: 10,
    },

    txtTemp: {
        color: '#FFF',
        fontSize: 72,
        fontWeight: 'bold'
    },

    txtRain:{
        color: '#FFF',
        fontSize: 24
    },

    txtDate:{
        color: '#A0BDFF',
        fontSize: 16
    },

    txtPrediction:{
        fontSize: 16,
        fontWeight: "bold"
    },

    btnPrediction:{
        backgroundColor: '#ccc',
        alignItems: 'center',
        padding: 10,
        width: 100,
        alignSelf: 'flex-end'
    },

    txtContainerSecondary: {
        color: '#fff',
        fontSize: 15,
        alignItems: 'center',
    }, 

    icons: {
        paddingRight: 50
    }
})