import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { FontSize, Border, Color, FontFamily } from "../GlobalStyles";

const Component12 = () => {
  return (
    <View style={styles.view}>
      <Image
        style={[styles.mapIcon, styles.mapIconPosition]}
        contentFit="cover"
        source={require("../assets/map1.png")}
      />
      <Image
        style={styles.locationIcon}
        contentFit="cover"
        source={require("../assets/location.png")}
      />
      <View style={[styles.homeIndicator, styles.mapIconPosition]}>
        <View style={[styles.bg, styles.bgPosition]} />
        <View style={styles.homeIndicator1} />
      </View>
      <Image
        style={styles.pinIcon}
        contentFit="cover"
        source={require("../assets/pin.png")}
      />
      <View style={[styles.tabBar, styles.bgPosition]}>
        <View style={styles.bg1} />
        <Image
          style={[styles.backIcon, styles.backIconLayout]}
          contentFit="cover"
          source={require("../assets/back.png")}
        />
        <Image
          style={[styles.tabBarChild, styles.backIconLayout]}
          contentFit="cover"
          source={require("../assets/group-5.png")}
        />
        <Text style={[styles.text, styles.textTypo]}>Добавить дом</Text>
        <Text style={[styles.text1, styles.textTypo]}>
          ул. Степана Разина д.43
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mapIconPosition: {
    left: 0,
    position: "absolute",
    width: 375,
  },
  bgPosition: {
    top: 0,
    left: 0,
    position: "absolute",
    width: 375,
  },
  backIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  textTypo: {
    textAlign: "center",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  mapIcon: {
    top: 112,
    height: 700,
  },
  locationIcon: {
    top: 623,
    left: 311,
    width: 40,
    height: 152,
    position: "absolute",
  },
  bg: {
    height: 21,
  },
  homeIndicator1: {
    top: 8,
    left: 120,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorGray_400,
    width: 135,
    height: 5,
    position: "absolute",
  },
  homeIndicator: {
    top: 791,
    height: 21,
  },
  pinIcon: {
    top: 408,
    left: 161,
    width: 55,
    height: 55,
    position: "absolute",
    overflow: "hidden",
  },
  bg1: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    left: "0%",
    backgroundColor: Color.colorSilver,
    display: "none",
    bottom: "0%",
    position: "absolute",
  },
  backIcon: {
    height: "27.27%",
    width: "6.4%",
    top: "72.73%",
    right: "87.2%",
    left: "6.4%",
    bottom: "0%",
  },
  tabBarChild: {
    height: "9.09%",
    width: "11.73%",
    top: "70.45%",
    right: "44%",
    bottom: "20.45%",
    left: "44.27%",
    display: "none",
  },
  text: {
    width: "91.47%",
    top: "61.36%",
    left: "4.27%",
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorGray_200,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  text1: {
    top: "88.64%",
    left: "25.87%",
    lineHeight: 18,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorGray_100,
  },
  tabBar: {
    height: 88,
  },
  view: {
    backgroundColor: Color.colorWhitesmoke,
    height: 812,
    overflow: "hidden",
    width: 375,
  },
});

export default Component12;
