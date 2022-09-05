import react from "react";
import { View, Text, StyleSheet } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';


export default function() {
    return(
        <View style={style.container}>
            <View>
                <Text style={style.txtBasic}>Bandung, Indonesia</Text>
            </View>

            <View style={style.containerSecond}>
                <Text style={style.txtNextDay}>Next 7 Days</Text>
                <Text style={style.txtDays}>Segunda</Text>
                <Ionicons name="ios-ellipse-sharp" size={32} color="yellow" />
                <Text style={style.txtDays}>Terça-Feira</Text>
                <Ionicons name="thunderstorm-outline" size={32} color="white" />
                <Text style={style.txtDays}>Quarta-Feira</Text>
                <Ionicons name="ios-ellipse-sharp" size={32} color="yellow" />
                <Text style={style.txtDays}>Quinta-Feira</Text>
                <Ionicons name="ios-partly-sunny-sharp" size={32} color="yellow" />
                <Text style={style.txtDays}>Sexta-Feira</Text>
                <Ionicons name="ios-partly-sunny-sharp" size={32} color="yellow" />
                <Text style={style.txtDays}>Sábado</Text>
                <Ionicons name="ios-partly-sunny-sharp" size={32} color="yellow" />
                <Text style={style.txtDays}>Domingo</Text>
                <Ionicons name="ios-rainy" size={32} color="gray" />
            </View>
            
        </View>
    );
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#437AFF',
    },

    containerSecond: {
        margin: 40
    },

    txtBasic: {
        color: '#FFF',
        fontSize: 15,
        alignSelf: 'center',
        fontWeight: 'bold'
    },

    txtDays: {
        color: '#FFF',
        paddingTop: 15,
        fontWeight: 'bold',
    }, 

    txtNextDay: {
        paddingBottom: 15,
        fontSize: 20,
        color:'#FFF'
    }
})