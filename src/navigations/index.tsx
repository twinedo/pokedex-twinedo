import { createStackNavigator } from '@react-navigation/stack';
import { Detail, Favorite, Home } from 'screens';

const Stack = createStackNavigator();

export default function Navigation() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name='Home' component={Home} />
			<Stack.Screen name='Detail' component={Detail} />
			<Stack.Screen name='Favorite' component={Favorite} />
		</Stack.Navigator>
	);
}
