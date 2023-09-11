import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontFamily, Border, FontSize, Color } from "../GlobalStyles";

const Component18 = () => {
  return (
    <View style={styles.view}>
      <Image
        style={[styles.tabBarIcon, styles.bgPosition]}
        contentFit="cover"
        source={require("../assets/tab-bar3.png")}
      />
      <Text style={styles.text}>Мы отправим вам код подтверждения</Text>
      <View style={[styles.homeIndicator, styles.bgLayout]}>
        <View style={[styles.bg, styles.bgLayout]} />
        <View style={styles.homeIndicator1} />
      </View>
      <Text style={[styles.text1, styles.textFlexBox]}>
        Введите ваш номер телефона
      </Text>
      <View style={[styles.btn, styles.btnLayout]}>
        <LinearGradient
          style={[styles.btnChild, styles.childLayout]}
          locations={[0, 1]}
          colors={["#63b4ee", "#55ffd6"]}
        />
        <Text style={[styles.text2, styles.textLayout]}>Продолжить</Text>
      </View>
      <View style={[styles.rectangleParent, styles.btnLayout]}>
        <View style={[styles.groupChild, styles.childLayout]} />
        <Text style={[styles.text3, styles.textLayout]}>+7</Text>
        <View style={[styles.groupItem, styles.text2Layout]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bgPosition: {
    left: 0,
    top: 0,
  },
  bgLayout: {
    height: 21,
    position: "absolute",
    width: 375,
  },
  textFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "center",
  },
  btnLayout: {
    height: 55,
    left: 24,
    width: 327,
    position: "absolute",
  },
  childLayout: {
    borderRadius: Border.br_5xs,
    height: 55,
    width: 327,
    left: 0,
    top: 0,
    position: "absolute",
  },
  textLayout: {
    lineHeight: 25,
    fontSize: FontSize.size_mid,
    position: "absolute",
  },
  text2Layout: {
    width: 327,
    left: 0,
  },
  tabBarIcon: {
    height: 88,
    position: "absolute",
    width: 375,
  },
  text: {
    width: "82.93%",
    top: "27.09%",
    left: "8.53%",
    fontSize: FontSize.size_mini,
    lineHeight: 20,
    textAlign: "center",
    color: Color.colorGray_100,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
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
    position: "absolute",
  },
  btnChild: {
    backgroundColor: Color.color,
  },
  text2: {
    top: 15,
    color: Color.colorWhite,
    width: 327,
    left: 0,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "center",
  },
  btn: {
    top: 367,
  },
  groupChild: {
    backgroundColor: Color.colorWhite,
  },
  text3: {
    top: "27.27%",
    left: "4.89%",
    textAlign: "left",
    color: Color.colorGray_100,
    fontFamily: FontFamily.interRegular,
    lineHeight: 25,
    fontSize: FontSize.size_mid,
  },
  groupItem: {
    top: 49,
    backgroundColor: Color.colorDarkgray,
    height: 1,
    display: "none",
    position: "absolute",
  },
  rectangleParent: {
    top: 288,
  },
  view: {
    backgroundColor: Color.colorWhitesmoke,
    height: 812,
    overflow: "hidden",
    width: 375,
  },
});

export default Component18;
