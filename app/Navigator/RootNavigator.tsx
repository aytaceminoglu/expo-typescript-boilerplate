import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import ListScreen from "../screens/ListScreen";
import DetailScreen from "../screens/DetailScreen";



const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="List" >
                <Stack.Screen name={"Card"} component={ListScreen} />
                <Stack.Screen name={"Detail"} component={DetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default RootNavigator;