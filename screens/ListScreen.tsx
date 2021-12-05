import * as React from "react";
import { StyleSheet, TouchableOpacity, Image, FlatList } from "react-native";
import { Text, View } from "../components/Themed";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

import { RootStackScreenProps } from "../types";

import faker from "faker";
import { SafeAreaView } from "react-native-safe-area-context";
import { BlurView } from "expo-blur";

export interface dataI {
  key: string;
  image: string;
  name: string;
  jobTitle: string;
  email: string;
  phone: string;
  isWarning: boolean;
  address: string;
  adr_history: string[];
}

const DATA: dataI[] = [...Array(20).keys()].map((_, i) => {
  return {
    key: faker.datatype.uuid(),
    image: `https://randomuser.me/api/portraits/${faker.helpers.randomize([
      "women",
      "men",
    ])}/${faker.datatype.number(60)}.jpg`,
    name: faker.name.findName(),
    jobTitle: faker.name.jobTitle(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber(),
    isWarning: faker.datatype.boolean(),
    address: faker.address.ordinalDirection(),
    adr_history: [...Array(20).keys()].map((_, i) => faker.address.ordinalDirection())
  };
});

const CardElement: React.FC<{ content: dataI; OnPress: () => void }> = ({
  content,
  OnPress,
}) => {
  return (
    <TouchableOpacity
      onPress={OnPress}
      style={[
        styles.CardContainer,
        { backgroundColor: content.isWarning ? "#ffc371" : "transparent" },
      ]}
    >
      <BlurView intensity={80} style={styles.CardBlurViewContainer}>
        <View style={styles.CardContentContainer}>
          <View style={styles.CardContentImageContainer}>
            <Image
              style={styles.backgroundImage}
              source={{
                uri: content.image,
              }}
            />
            <Text>
              <AntDesign
                name={content.isWarning ? "warning" : "checkcircle"}
                size={20}
                color={content.isWarning ? "red" : "#2980B9"}
              />
              {content.isWarning ? " Warning" : " Good"}
            </Text>
          </View>
          <View style={styles.ContentInfoContainer}>
            <View style={styles.NameTextContainer}>
              <Text style={{ textTransform: "uppercase" }}>{content.name}</Text>
            </View>
            <View style={{ backgroundColor: "transparent", margin: 10 }}>
              <Text>{content.jobTitle}</Text>
              <Text>{content.jobTitle}</Text>
              <Text>{content.jobTitle}</Text>
            </View>
            <View style={{ backgroundColor: "transparent", margin: 10 }}>
              <Text>
                <MaterialIcons name="place" size={15} color="silver" />{" "}
                {content.address}
              </Text>
            </View>
          </View>
        </View>
      </BlurView>
    </TouchableOpacity>
  );
};

const ListScreen = ({ navigation, route }: RootStackScreenProps<"List">) => {
  return (
    <View style={styles.Container}>
      <LinearGradient
        colors={["#a8c0ff", "#c4e0e5"]}
        start={{ x: 1, y: 1 }}
        end={{ x: 1, y: 1 }}
        style={styles.CardLinearGradientContainer}
      >
        <View>
          <Text>LIST</Text>
        </View>
        <SafeAreaView style={{ flex: 1 }}>
          <FlatList
            data={DATA}
            renderItem={({ item, index }) => (
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "transparent",
                }}
              >
                <CardElement
                  OnPress={() => {
                    navigation.navigate("Profile", { profile: item });
                  }}
                  key={index}
                  content={item}
                />
              </View>
            )}
            keyExtractor={(item) => item.key}
          />
        </SafeAreaView>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  ContentContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "transparent",
  },
  CardLinearGradientContainer: {
    flex: 1,
  },
  CardContainer: {
    height: 200,
    width: "90%",
    margin: 10,
    borderRadius: 20,
    backgroundColor: "transparent",
  },
  CardBlurViewContainer: {
    flex: 1,
    borderRadius: 20,
  },
  CardContentContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "transparent",
    borderRadius: 20,
    flexDirection: "row",
  },
  CardContentImageContainer: {
    flex: 1 / 3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    margin: 10,
  },
  backgroundImage: {
    height: 120,
    width: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  backgroundAbstractImage: {
    position: "absolute",
    height: undefined,
    width: "100%",
    aspectRatio: 1,
    zIndex: 5,
    transform: [{ translateY: 200 }, { rotateZ: "-55deg" }, { scale: 1.5 }],
  },
  ContentInfoContainer: {
    flex: 2 / 3,
    width: "100%",
    backgroundColor: "transparent",
    margin: 10,
    justifyContent: "space-between",
  },
  NameTextContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    marginEnd: 10,
  },
});

export default ListScreen;
