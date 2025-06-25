import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Link } from 'expo-router'

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.title}> Feastify</Text>
      <TouchableOpacity> <Text>Press me!</Text> </TouchableOpacity>
      <Link href={"/about"}>Visist about</Link>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
  title: {
    color: '#000080',
    fontSize: 32,
    fontWeight: 'bold',
  },
  text: {
    color: '#0000100',
    fontSize: 40,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 12,
    marginTop: 16,
  }
}
)