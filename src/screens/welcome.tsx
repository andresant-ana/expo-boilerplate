import { RouteProp, useRoute } from "@react-navigation/native"
import { View, StyleSheet, Text } from "react-native"
import { RootStackParamList } from "../navigation"

type DetailsSreenRouteProp = RouteProp<RootStackParamList, "Welcome">

export default function Details() {
  const router = useRoute<DetailsSreenRouteProp>()
  const { userData } = router.params

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Welcome to my app!</Text>
        <Text style={styles.subtitle}>Your email: {userData.email}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  main: {
    flex: 1,
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 42,
    fontWeight: "bold",
  },
  subtitle: {
    marginTop: 20,
    color: "#38434D",
    fontSize: 18,
  },
})
