import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { BaseContainer } from 'components/layout';
import { SafeAreaView } from 'react-native-safe-area-context';
import globalStyles from 'styles/globalStyles';
import { Input, Toolbar } from 'components/basic';
import { BLACK, GREY1, WHITE } from 'styles/colors';
import { AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

export default function Home() {
	return (
		<BaseContainer>
			<StatusBar backgroundColor={WHITE} />
			<Toolbar
				textStyle={{ fontWeight: 'bold', fontSize: 20 }}
				containerStyle={{ borderBottomWidth: 0.5, borderBottomColor: GREY1 }}
				postfix={<AntDesign name='hearto' size={24} color='black' />}>
				Pokedex
			</Toolbar>
			<View
				style={[
					globalStyles.displayFlex,
					globalStyles.horizontalDefaultPadding,
					globalStyles.verticalDefaultPadding,
					{ backgroundColor: WHITE },
				]}>
				<Input
					placeholder='Search by name'
					placeholderTextColor={GREY1}
					containerStyle={{ borderRadius: 10 }}
				/>
				<Text>Home</Text>
			</View>
		</BaseContainer>
	);
}

const styles = StyleSheet.create({});
