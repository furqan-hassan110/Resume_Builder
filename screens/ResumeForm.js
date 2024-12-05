/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */

import * as React from "react";
import {Text,View,StyleSheet,TextInput,
		Button,TouchableOpacity,ScrollView
} from "react-native";
import { useState } from "react";

export default function ResumeForm({ navigation }) {
	const [userDetails, setUserDetails] = useState({
		fullName: "",
		avatarUrl: "",
		profTitle: "",
		phoneNo: "",
		email: "",
		website: "",
		company: "",
		jobTitle: "",
		skill: "",
	});

	return (
		<ScrollView>
			<View style={styles.cont}>
				<View style={styles.header}>
					<Text style={styles.headerText}>Resume Builder</Text>
				</View>

				<View style={styles.details}>
					<Text style={styles.titleText}>Personal Details</Text>
					<TextInput
						style={styles.textinput}
						placeholder="Enter your full name"
						value={userDetails.fullName}
						onChangeText={(e) => {
							setUserDetails((userDetails) => ({
								...userDetails,
								...{ fullName: e },
							}));
						}}
					/>
					<TextInput
						style={styles.textinput}
						placeholder="Enter your avatar URL"
						value={userDetails.avatarUrl}
						onChangeText={(e) => {
							setUserDetails((userDetails) => ({
								...userDetails,
								...{ avatarUrl: e },
							}));
						}}
					/>
					<TextInput
						style={styles.textinput}
						placeholder="Enter your professional title"
						value={userDetails.profTitle}
						onChangeText={(e) => {
							setUserDetails((userDetails) => ({
								...userDetails,
								...{ profTitle: e },
							}));
						}}
					/>
				</View>

				<View style={styles.details}>
					<Text style={styles.titleText}>Contact Details</Text>
					<TextInput
						style={styles.textinput}
						placeholder="Enter your phone number"
						value={userDetails.phoneNo}
						onChangeText={(e) => {
							setUserDetails((userDetails) => ({
								...userDetails,
								...{ phoneNo: e },
							}));
						}}
					/>
					<TextInput
						style={styles.textinput}
						placeholder="Enter your email"
						value={userDetails.email}
						onChangeText={(e) => {
							setUserDetails((userDetails) => ({
								...userDetails,
								...{ email: e },
							}));
						}}
					/>
					<TextInput
						style={styles.textinput}
						placeholder="Enter your website link"
						value={userDetails.website}
						onChangeText={(e) => {
							setUserDetails((userDetails) => ({
								...userDetails,
								...{ website: e },
							}));
						}}
					/>
				</View>

				<View style={styles.details}>
					<Text style={styles.titleText}>Previous Job</Text>
					<TextInput
						style={styles.textinput}
						placeholder="Enter company name"
						value={userDetails.company}
						onChangeText={(e) => {
							setUserDetails((userDetails) => ({
								...userDetails,
								...{ company: e },
							}));
						}}
					/>
					<TextInput
						style={styles.textinput}
						placeholder="Enter job title"
						value={userDetails.jobTitle}
						onChangeText={(e) => {
							setUserDetails((userDetails) => ({
								...userDetails,
								...{ jobTitle: e },
							}));
						}}
					/>
					<TextInput
						style={styles.textinput}
						placeholder="Enter your best skill"
						value={userDetails.skill}
						onChangeText={(e) => {
							setUserDetails((userDetails) => ({
								...userDetails,
								...{ skill: e },
							}));
						}}
					/>
				</View>

				<Button
					title="Create Resume"
					style={styles.button}
					onPress={() => navigation.navigate("Your CV", userDetails)}
				></Button>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	cont: {
		flex: 1,
		backgroundColor: "white",
		paddingLeft: 40,
		paddingRight: 40,
		paddingTop: 30,
	},
	header: {
		marginBottom: 20,
		alignSelf: "stretch",
	},
	details: {
		marginBottom: 20,
	},
	headerText: {
		fontSize: 24,
		color: "#fff",
		borderBottomColor: "#199187",
		paddingBottom: 10,
		borderBottomWidth: 1,
	},
	titleText: {
		fontWeight: "bold",
		color: "blue",
		fontSize: 20,
		marginBottom: 10,
	},
	textinput: {
		alignSelf: "stretch",
		height: 40,
		color: "black",
		marginBottom: 20,
		borderBottomColor: "black",
		borderBottomWidth: 1,
	},
	button: {
		alignSelf: "stretch",
		alignItems: "center",
		padding: 10,
		backgroundColor: "#59cbbd",
		marginTop: 5,
		marginBottom: 20,
	},
});
