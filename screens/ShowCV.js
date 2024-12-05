/* eslint-disable prettier/prettier */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable eol-last */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */

import * as React from "react";
import {Text,View,Image,StyleSheet,
		TextInput,Button,TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { Card } from "react-native-paper";

export default function ShowCV({ navigation, route }) {
	let dataObj = route.params;
	return (
		<View style={styles.cont}>
			<View style={styles.header}>
				<Text style={styles.headerText}>Your Resume</Text>
			</View>

			<View style={styles.details}>
				<Text style={styles.titleText}>Personal Details</Text>
				<Image
					source={{ uri: dataObj.avatarUrl }}
					style={{ width: 80, height: 80 }}
				/>
				<Text style={styles.text}>
					<Text style={styles.key}>Name: </Text>
					<Text>{dataObj.fullName}</Text>
				</Text>

				<Text style={styles.text}>
					<Text style={styles.key}>Professional Title: </Text>
					<Text>{dataObj.fullName}</Text>
				</Text>
			</View>

			<View style={styles.details}>
				<Text style={styles.titleText}>Contact Details</Text>
				<Text style={styles.text}>
					<Text style={styles.key}>Phone Number: </Text>
					<Text>{dataObj.phoneNo}</Text>
				</Text>

				<Text style={styles.text}>
					<Text style={styles.key}>Email: </Text>
					<Text>{dataObj.email}</Text>
				</Text>

				<Text style={styles.text}>
					<Text style={styles.key}>Website Link: </Text>
					<Text>{dataObj.website}</Text>
				</Text>
			</View>

			<View style={styles.details}>
				<Text style={styles.titleText}>Previous Job</Text>
				<Text style={styles.text}>
					<Text style={styles.key}>Company: </Text>
					<Text>{dataObj.company}</Text>
				</Text>

				<Text style={styles.text}>
					<Text style={styles.key}>Role: </Text>
					<Text>{dataObj.jobTitle}</Text>
				</Text>
				<Text style={styles.text}>
					<Text style={styles.key}>Skill: </Text>
					<Text>{dataObj.skill}</Text>
				</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	cont: {
		flex: 1,
		backgroundColor: "#36485f",
		paddingLeft: 40,
		paddingRight: 40,
		paddingTop: 40,
	},
	header: {
		marginBottom: 20,
		alignSelf: "stretch",
	},
	details: {
		marginBottom: 15,
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
		fontSize: 15,
		marginBottom: 10,
	},
	key: {
		fontWeight: "bold" },

    text: {    
	    color: "white"},    
    });