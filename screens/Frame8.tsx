import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontSize, Border, Color, FontFamily } from "../GlobalStyles";

const Frame8 = () => {
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
      <Text style={[styles.text1, styles.textTypo]}>
        <Text style={styles.textClr}>{`Не пришло смс? `}</Text>
        <Text style={styles.text3}>Отправить снова</Text>
      </Text>
      <View style={[styles.homeIndicator, styles.bgLayout]}>
        <View style={[styles.bg, styles.bgLayout]} />
        <View style={styles.homeIndicator1} />
      </View>
      <Text style={styles.text4}>Введите код подтверждение</Text>
      <View style={[styles.btn, styles.btnLayout]}>
        <LinearGradient
          style={[styles.btnChild, styles.childPosition]}
          locations={[0, 1]}
          colors={["#63b4ee", "#55ffd6"]}
        />
        <Text style={styles.text5}>Продолжить</Text>
      </View>
      <View style={[styles.rectangleParent, styles.groupParentLayout]}>
        <View style={[styles.groupChild, styles.groupParentLayout]} />
        <Text style={[styles.text6, styles.textPosition]}>1</Text>
      </View>
      <View style={[styles.rectangleGroup, styles.groupParentLayout]}>
        <View style={[styles.groupChild, styles.groupParentLayout]} />
        <Text style={[styles.text7, styles.textPosition]}>2</Text>
      </View>
      <View style={[styles.rectangleContainer, styles.groupParentLayout]}>
        <View style={[styles.groupChild, styles.groupParentLayout]} />
        <Text style={[styles.text7, styles.textPosition]}>3</Text>
      </View>
      <View style={[styles.groupView, styles.groupParentLayout]}>
        <View style={[styles.groupChild, styles.groupParentLayout]} />
        <Text style={[styles.text7, styles.textPosition]}>5</Text>
      </View>
      <View style={[styles.rectangleParent1, styles.groupParentLayout]}>
        <View style={[styles.groupChild, styles.groupParentLayout]} />
        <Text style={[styles.text7, styles.textPosition]}>1</Text>
      </View>
      <Text style={styles.text11}>Неверный код</Text>
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
  groupParentLayout: {
    width: 55,
    height: 55,
    position: "absolute",
  },
  textPosition: {
    left: "0%",
    top: "27.27%",
    width: "100%",
    lineHeight: 25,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: Color.colorGray_200,
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
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
  textClr: {
    color: Color.colorGray_100,
    fontFamily: FontFamily.interRegular,
  },
  text3: {
    color: Color.colorLightskyblue,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  text1: {
    top: "58.37%",
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
  text4: {
    top: "22.91%",
    lineHeight: 24,
    justifyContent: "center",
    color: Color.colorGray_200,
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_xl,
    left: "6.4%",
    width: "87.2%",
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
  text5: {
    top: 15,
    color: Color.colorWhite,
    lineHeight: 25,
    fontSize: FontSize.size_mid,
    width: 327,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "center",
    left: 0,
    position: "absolute",
  },
  btn: {
    top: 395,
    left: 24,
  },
  groupChild: {
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorLightcoral,
    borderWidth: 1,
    borderRadius: Border.br_5xs,
    left: 0,
    top: 0,
  },
  text6: {
    left: "0%",
    top: "27.27%",
    width: "100%",
    fontSize: FontSize.size_xl,
  },
  rectangleParent: {
    top: 288,
    width: 55,
    left: 24,
  },
  text7: {
    fontSize: FontSize.size_mid,
    left: "0%",
    top: "27.27%",
    width: "100%",
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
  text11: {
    top: "43.47%",
    fontSize: FontSize.size_smi,
    lineHeight: 18,
    color: Color.colorLightcoral,
    textAlign: "left",
    alignItems: "center",
    display: "flex",
    left: "6.4%",
    width: "87.2%",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  view: {
    backgroundColor: Color.colorWhitesmoke,
    height: 812,
    overflow: "hidden",
    width: 375,
  },
});

export default Frame8;
