import "react-native-gesture-handler";
import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const LoginScreen = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.Container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ height: "100%", flex: 1 }}
      >
        <View style={styles.HeaderContainer}>
          <Text style={{ fontWeight: "bold", fontSize: 22, color: "#000" }}>
            TRAC
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 22, color: "#64beff" }}>
            KING
          </Text>
        </View>

        <View style={{ marginTop: 70, flex: 0.25 }}>
          <Text style={{ fontSize: 27, fontWeight: "bold", color: "#000" }}>
            Welcome Back,
          </Text>
          <Text style={{ fontSize: 19, fontWeight: "bold", color: "#a5a5a5" }}>
            Sign in to continue
          </Text>
        </View>

        <View style={{ marginTop: 20, flex: 0.5 }}>
          <View style={styles.InputContainer}>
            <Ionicons
              name="mail-outline"
              color="#a5a5a5"
              size={20}
              style={styles.InputIcon}
            />
            <TextInput placeholder="Email" style={styles.Input} />
          </View>
          <View style={styles.InputContainer}>
            <Ionicons
              name="lock-open"
              color="#a5a5a5"
              size={20}
              style={styles.InputIcon}
            />
            <TextInput
              placeholder="Password"
              style={styles.Input}
              secureTextEntry
            />
          </View>
          <View style={styles.btnPrimary}>
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>
              Sign In
            </Text>
          </View>
          <View
            style={{
              marginVertical: 20,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={styles.line}></View>
            <Text style={{ marginHorizontal: 5, fontWeight: "bold" }}>OR</Text>
            <View style={styles.line}></View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={styles.btnSecondary}>
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                Sign in with
              </Text>
              <Image
                style={styles.btnImage}
                source={require("../assets/icons/facebook.png")}
              />
            </View>
            <View style={{ width: 10 }}></View>
            <View style={styles.btnSecondary}>
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                Sign in with
              </Text>
              <Image
                style={styles.btnImage}
                source={require("../assets/icons/google.png")}
              />
            </View>
          </View>
        </View>

        <View style={styles.FooterContainer}>
          <Text style={{ color: "#a5a5a5", fontWeight: "bold" }}>
            Don`t have an account ?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={{ color: "#ff2d5f", fontWeight: "bold" }}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: "white",
  },
  HeaderContainer: {
    flexDirection: "row",
    marginTop: 40,
    flex: 0.25,
  },
  InputContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  Input: {
    color: "#a5a5a5",
    borderBottomWidth: 1,
    borderColor: "#a5a5a5",
    margin: 10,
    marginLeft: 40,
    flex: 1,
    fontSize: 18,
  },
  InputIcon: { marginTop: 15, position: "absolute" },
  btnPrimary: {
    backgroundColor: "#28388f",
    height: 50,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },

  btnSecondary: {
    height: 50,
    borderWidth: 1,
    borderColor: "#a5a5a5",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    flex: 1,
    flexDirection: "row",
  },
  btnImage: { width: 20, height: 20, marginLeft: 5 },
  line: { height: 1, width: 30, backgroundColor: "#a5a5a5" },
  FooterContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 20,
  },
});
export default LoginScreen;
