import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import * as Linking from "expo-linking";
import React from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Text, View } from "../components/Themed";
import { RootStackScreenProps } from "../types";

const ProfileScreen = ({
  navigation,
  route,
}: RootStackScreenProps<"Profile">) => {
  const NorColors = ["#7ee8fa", "#abe9cd"];
  const WarColors = ["#eb6b9d", "#ee8c68"];
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={route.params.profile.isWarning ? WarColors : NorColors}
        style={{ flex: 1 }}
      >
        <View style={styles.titleBar}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name="ios-arrow-back"
              size={24}
              color="#52575D"
            ></Ionicons>
          </TouchableOpacity>
          <Ionicons name="md-moon-sharp" size={24} color="#52575D"></Ionicons>
        </View>

        <View style={{ alignSelf: "center", backgroundColor: "transparent" }}>
          <View style={styles.profileImage}>
            <Image
              source={{ uri: route.params?.profile.image }}
              style={styles.image}
              resizeMode="cover"
            ></Image>
          </View>
          <View style={styles.dm}>
            <MaterialIcons
              name="chat"
              size={18}
              color="#DFD8C8"
            ></MaterialIcons>
          </View>
          <View
            style={[
              styles.active,
              {
                backgroundColor: route.params.profile.isWarning
                  ? "red"
                  : "#34FFB9",
              },
            ]}
          ></View>
          <View
            style={[
              styles.add,
              {
                backgroundColor: route.params.profile.isWarning
                  ? "green"
                  : "#41444B",
              },
            ]}
          >
            <TouchableOpacity onPress={() => Linking.openURL("tel:+847766101")}>
              <Ionicons
                name="call"
                size={40}
                color="#DFD8C8"
                style={{ marginTop: 6, marginLeft: 2 }}
              ></Ionicons>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.infoContainer}>
          <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>
            Julie
          </Text>
          <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14 }]}>
            Photographer
          </Text>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statsBox}>
            <Text style={[styles.text, { fontSize: 24 }]}>
              {route.params.profile.isWarning
                ? "I need to help! PLS"
                : "HI, I'm good"}
            </Text>
          </View>
        </View>
        <View style={{ marginTop: 32, backgroundColor: "transparent" }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.mediaImageContainer}>
              <Image
                source={{ uri: route.params?.profile.image }}
                style={styles.image}
                resizeMode="cover"
              ></Image>
            </View>
            <View style={styles.mediaImageContainer}>
              <Image
                source={{ uri: route.params?.profile.image }}
                style={styles.image}
                resizeMode="cover"
              ></Image>
            </View>
            <View style={styles.mediaImageContainer}>
              <Image
                source={{ uri: route.params?.profile.image }}
                style={styles.image}
                resizeMode="cover"
              ></Image>
            </View>
          </ScrollView>
          <View style={styles.mediaCount}>
            <Text
              style={[
                styles.text,
                { fontSize: 24, color: "#DFD8C8", fontWeight: "300" },
              ]}
            >
              70
            </Text>
            <Text
              style={[
                styles.text,
                { fontSize: 12, color: "#DFD8C8", textTransform: "uppercase" },
              ]}
            >
              Media
            </Text>
          </View>
        </View>
        <Text style={[styles.subText, styles.recent]}>Recent Activity</Text>

        <SafeAreaView style={{ flex: 1, backgroundColor: "transparent" }}>
          <FlatList
            contentContainerStyle={{ backgroundColor: "transparent" }}
            data={route.params.profile.adr_history}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item, index }) => (
              <View
                key={index}
                style={{
                  alignItems: "center",
                  backgroundColor: "transparent",
                  height: 80,
                  margin: 10,
                }}
              >
                <BlurView intensity={200} style={styles.CardBlurViewContainer}>
                  <View style={styles.recentItem}>
                    <View style={styles.activityIndicator}>
                      <Text>
                        <MaterialIcons name="place" size={22} color="silver" />
                      </Text>
                    </View>

                    <View
                      style={{ width: "80%", backgroundColor: "transparent" }}
                    >
                      <Text
                        style={[
                          styles.text,
                          { color: "#41444B", fontWeight: "300", fontSize: 20 },
                        ]}
                      >
                        {item}
                      </Text>
                    </View>
                  </View>
                </BlurView>
              </View>
            )}
          />
        </SafeAreaView>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: "#52575D",
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    marginBottom: 24,
    backgroundColor: "transparent",
    marginHorizontal: 16,
  },
  subText: {
    fontSize: 12,
    color: "white",
    textTransform: "uppercase",
    fontWeight: "500",
  },
  profileImage: {
    backgroundColor: "transparent",
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: "hidden",
  },
  dm: {
    backgroundColor: "#41444B",
    position: "absolute",
    top: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  active: {
    backgroundColor: "#34FFB9",
    position: "absolute",
    bottom: 28,
    left: 10,
    padding: 4,
    height: 20,
    width: 20,
    borderRadius: 10,
  },
  add: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  infoContainer: {
    backgroundColor: "transparent",
    alignSelf: "center",
    alignItems: "center",
    marginTop: 16,
  },
  statsContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 32,
    backgroundColor: "transparent",
  },
  statsBox: {
    backgroundColor: "transparent",
    alignItems: "center",
    flex: 1,
  },
  mediaImageContainer: {
    width: 140,
    height: 160,
    borderRadius: 12,
    overflow: "hidden",
    marginHorizontal: 10,
    backgroundColor: "transparent",
  },
  mediaCount: {
    backgroundColor: "#41444B",
    position: "absolute",
    top: "50%",
    marginTop: -50,
    marginLeft: 30,
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    shadowColor: "rgba(0, 0, 0, 0.38)",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 20,
    shadowOpacity: 1,
  },
  recent: {
    marginLeft: 78,
    marginTop: 32,
    marginBottom: 6,
    fontSize: 20,
  },
  recentItem: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 16,
  },
  activityIndicator: {
    backgroundColor: "transparent",
    marginTop: 10,
    marginLeft: -10,
    marginRight: 20,
  },
  CardBlurViewContainer: {
    flex: 1,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ProfileScreen;
