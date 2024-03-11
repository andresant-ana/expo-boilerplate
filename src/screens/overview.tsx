import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import Ionicons from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';


	import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import { RootStackParamList } from "../navigation";

type OverviewScreenNavigationProps = StackNavigationProp<RootStackParamList, "Overview">;

export default function Overview() {
	const navigation = useNavigation<OverviewScreenNavigationProps>();
  	
		return (
			<View style={styles.container}>
				<View style={styles.main}>
					<View>
						<Text style={styles.title}>Log In</Text>
					</View>
					<View style={styles.containerInput}>
						<Ionicons name="mail" size={32} color={"#ADB0CD"} />
						<TextInput placeholder="Your email" maxLength={37}>
						</TextInput>
					</View>
					<View style={styles.containerInput}>
						<Feather name="key" size={32} color={"#ADB0CD"} />
						<TextInput secureTextEntry={true} placeholder="Password" maxLength={30}>
						</TextInput>
					</View>
					<TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Details", { name: "Dan" })}>
						<Text style={styles.buttonText}>Log In</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	
}


	const styles = StyleSheet.create({
		button: {
			alignItems: "center",
			backgroundColor: "#0062FF",
			borderRadius: 8,
			elevation: 5,
			flexDirection: "row",
			justifyContent: "center",
			padding: 16,
			shadowColor: "#000",
			shadowOffset: {
			height: 403,
			width: 47
			},
			shadowOpacity: 0.25,
			shadowRadius: 3.84
		},
		buttonText: {
			color: "#FFFFFF",
			fontSize: 16,
			fontWeight: "600",
			textAlign: "center",
		},
		container: {
			flex: 1,
			padding: 24,
		},
		main: {
			flex: 1,
			maxWidth: 960,
			marginHorizontal: "auto",
			justifyContent: "center",
		},
		title: {
			fontSize: 30,
			fontWeight: "bold",
			paddingBottom: 30
		},
		subtitle: {
			color: "#38434D",
			fontSize: 36,
		},
		containerInput: {
			flexDirection: "row",
			borderWidth: 1,
			borderRadius: 8,
			padding: 10,
			gap: 8,
			marginBottom: 20,
			borderColor: "#ADB0CD",
		}
	});
