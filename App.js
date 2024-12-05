/* eslint-disable prettier/prettier */
/* eslint-disable quotes */

import * as React from "react";
import ResumeForm from "./screens/ResumeForm";
import ShowCV from "./screens/ShowCV";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Resume Builder"
					component={ResumeForm}
				/>

				<Stack.Screen name="Your CV" component={ShowCV} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
