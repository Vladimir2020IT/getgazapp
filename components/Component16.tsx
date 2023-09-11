import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontSize, Border, Color, FontFamily } from "../GlobalStyles";

const Component16 = () => {
  return (
    <View style={styles.view}>
      <Image
        style={[styles.tabBarIcon, styles.bgPosition]}
        contentFit="cover"
        source={require("../assets/tab-bar1.png")}
      />
      <Text style={[styles.text, styles.textTypo]}>
        Код подтверждения придет вам в смс
      </Text>
      <View style={[styles.homeIndicator, styles.bgLayout]}>
        <View style={[styles.bg, styles.bgLayout]} />
        <View style={styles.homeIndicator1} />
      </View>
      <Text style={styles.text1}>Введите код подтверждение</Text>
      <View style={[styles.btn, styles.btnLayout]}>
        <LinearGradient
          style={[styles.btnChild, styles.childPosition]}
          locations={[0, 1]}
          colors={["#63b4ee", "#55ffd6"]}
        />
        <Text style={[styles.text2, styles.textFlexBox]}>Продолжить</Text>
      </View>
      <View style={[styles.rectangleParent, styles.groupParentLayout]}>
        <View style={[styles.groupChild, styles.groupParentLayout]} />
        <Text style={[styles.text3, styles.textFlexBox]}>0</Text>
      </View>
      <View style={[styles.rectangleGroup, styles.groupParentLayout]}>
        <View style={[styles.groupChild, styles.groupParentLayout]} />
        <Text style={[styles.text3, styles.textFlexBox]}>0</Text>
      </View>
      <View style={[styles.rectangleContainer, styles.groupParentLayout]}>
        <View style={[styles.groupChild, styles.groupParentLayout]} />
        <Text style={[styles.text3, styles.textFlexBox]}>0</Text>
      </View>
      <View style={[styles.groupView, styles.groupParentLayout]}>
        <View style={[styles.groupChild, styles.groupParentLayout]} />
        <Text style={[styles.text3, styles.textFlexBox]}>0</Text>
      </View>
      <View style={[styles.rectangleParent1, styles.groupParentLayout]}>
        <View style={[styles.groupChild, styles.groupParentLayout]} />
        <Text style={[styles.text3, styles.textFlexBox]}>0</Text>
      </View>
      <Text style={[styles.text8, styles.textTypo]}>
        <Text style={styles.textClr}>{`Не пришло смс? `}</Text>
        <Text style={styles.text10}>Отправить снова</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bgPosition: {
    left: 0,
    top: 0,
  },
  textTypo: {
    textAlign: "center",
    lineHeight: 20,
    fontSize: FontSize.size_mini,
    left: "8.53%",
    width: "82.93%",
    position: "absolute",
  },
  bgLayout: {
    height: 21,
    position: "absolute",
    width: 375,
  },
  btnLayout: {
    height: 55,
    width: 327,
    position: "absolute",
  },
  childPosition: {
    borderRadius: Border.br_5xs,
    left: 0,
    top: 0,
  },
  textFlexBox: {
    lineHeight: 25,
    fontSize: FontSize.size_mid,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    position: "absolute",
  },
  groupParentLayout: {
    width: 55,
    height: 55,
    position: "absolute",
  },
  tabBarIcon: {
    height: 88,
    position: "absolute",
    width: 375,
  },
  text: {
    top: "27.09%",
    color: Color.colorGray_100,
    fontFamily: FontFamily.interRegular,
  },
  bg: {
    left: 0,
    top: 0,
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
    left: 1,
  },
  text1: {
    width: "87.2%",
    top: "22.91%",
    left: "6.4%",
    fontSize: FontSize.size_xl,
    lineHeight: 24,
    color: Color.colorGray_200,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "center",
    position: "absolute",
  },
  btnChild: {
    backgroundColor: Color.color,
    height: 55,
    width: 327,
    position: "absolute",
  },
  text2: {
    top: 15,
    color: Color.colorWhite,
    width: 327,
    lineHeight: 25,
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    left: 0,
  },
  btn: {
    top: 367,
    left: 24,
  },
  groupChild: {
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_5xs,
    left: 0,
    top: 0,
  },
  text3: {
    width: "100%",
    top: "27.27%",
    left: "0%",
    color: Color.colorGray_100,
    fontFamily: FontFamily.interRegular,
  },
  rectangleParent: {
    top: 288,
    width: 55,
    left: 24,
  },
  rectangleGroup: {
    left: 92,
    top: 288,
    width: 55,
  },
  rectangleContainer: {
    left: 160,
    top: 288,
    width: 55,
  },
  groupView: {
    left: 228,
    top: 288,
    width: 55,
  },
  rectangleParent1: {
    left: 296,
    top: 288,
    width: 55,
  },
  textClr: {
    color: Color.colorGray_100,
    fontFamily: FontFamily.interRegular,
  },
  text10: {
    color: Color.colorLightskyblue,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  text8: {
    top: "54.93%",
  },
  view: {
    backgroundColor: Color.colorWhitesmoke,
    height: 812,
    overflow: "hidden",
    width: 375,
  },
});

export default Component16;
