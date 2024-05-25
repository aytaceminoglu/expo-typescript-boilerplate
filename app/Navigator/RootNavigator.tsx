import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import ListScreen from "../screens/ListScreen";
import DetailScreen from "../screens/DetailScreen";

type RootStackParamList = {
    pokemon: {id: string}
    List: undefined
    Detail: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>();


const RootNavigator = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Detail" >
                <Stack.Screen name={"List"}
                              component={ListScreen} />
                <Stack.Screen name={"Detail"}
                              component={DetailScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default RootNavigator;