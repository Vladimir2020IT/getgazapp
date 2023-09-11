import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Frame7 = () => {
  return (
    <View style={styles.view}>
      <Image
        style={styles.tabBarIcon}
        contentFit="cover"
        source={require("../assets/tab-bar.png")}
      />
      <Text style={styles.text}>Ваши данные в безопасности</Text>
      <View style={[styles.homeIndicator, styles.bgLayout]}>
        <View style={[styles.bg, styles.bgLayout]} />
        <View style={[styles.homeIndicator1, styles.checkedIcon1Position]} />
      </View>
      <Text style={styles.text1}>Давайте знакомиться</Text>
      <View style={[styles.btn, styles.btnLayout]}>
        <LinearGradient
          style={styles.btnChild}
          locations={[0, 1]}
          colors={["#63b4ee", "#55ffd6"]}
        />
        <Text style={styles.text2}>Продолжить</Text>
      </View>
      <View style={[styles.view1, styles.viewLayout]}>
        <View style={[styles.child, styles.bg1Bg]} />
        <Image
          style={styles.checkedIcon}
          contentFit="cover"
          source={require("../assets/checked.png")}
        />
        <Text style={[styles.text3, styles.textTypo1]}>Михаил</Text>
        <Text style={[styles.text4, styles.textTypo]}>Имя</Text>
      </View>
      <View style={[styles.view2, styles.viewLayout]}>
        <View style={[styles.child, styles.bg1Bg]} />
        <Text style={[styles.text5, styles.textTypo1]}>Иванов</Text>
        <Text style={[styles.text4, styles.textTypo]}>Фамилия</Text>
      </View>
      <View style={[styles.view3, styles.viewLayout]}>
        <View style={[styles.child, styles.bg1Bg]} />
        <Text style={[styles.text5, styles.textTypo1]}>Иванович</Text>
        <Text style={[styles.text4, styles.textTypo]}>Отчество</Text>
      </View>
      <View style={[styles.view4, styles.viewLayout]}>
        <View style={[styles.child, styles.bg1Bg]} />
        <Text style={[styles.text5, styles.textTypo1]}>+7</Text>
        <Text style={[styles.text4, styles.textTypo]}>Телефон</Text>
      </View>
      <View style={[styles.view5, styles.viewLayout]}>
        <View style={[styles.child, styles.bg1Bg]} />
        <Text style={[styles.text5, styles.textTypo1]}>+7</Text>
        <Text style={[styles.text4, styles.textTypo]}>
          Доп. телефон (не обязательно)
        </Text>
      </View>
      <View style={styles.view6}>
        <Text style={[styles.text13, styles.textTypo]}>
          {`Я соглашаюсь с `}
          <Text style={styles.text14}>правилами конфиденциальности</Text>
          {` и `}
          <Text style={styles.text14}>договором оферты</Text>
        </Text>
        <View style={styles.bg1Position}>
          <View style={[styles.bg1, styles.bg1Position]} />
          <Image
            style={[styles.checkedIcon1, styles.checkedIcon1Position]}
            contentFit="cover"
            source={require("../assets/checked1.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bgLayout: {
    height: 21,
    left: 0,
    position: "absolute",
    width: 375,
  },
  checkedIcon1Position: {
    top: 8,
    position: "absolute",
  },
  btnLayout: {
    height: 55,
    width: 327,
    position: "absolute",
  },
  viewLayout: {
    height: 83,
    width: 327,
    left: 24,
    position: "absolute",
  },
  bg1Bg: {
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_5xs,
  },
  textTypo1: {
    textAlign: "left",
    left: 16,
    top: 43,
    lineHeight: 25,
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_smi,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  bg1Position: {
    width: 32,
    height: 32,
    left: 0,
    top: 0,
    position: "absolute",
  },
  tabBarIcon: {
    height: 88,
    left: 0,
    top: 0,
    position: "absolute",
    width: 375,
  },
  text: {
    top: 146,
    left: 32,
    fontSize: FontSize.size_mini,
    lineHeight: 20,
    width: 311,
    textAlign: "center",
    color: Color.colorGray_100,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  bg: {
    top: 0,
  },
  homeIndicator1: {
    left: 120,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorGray_400,
    width: 135,
    height: 5,
  },
  homeIndicator: {
    top: 820,
  },
  text1: {
    top: 112,
    fontSize: FontSize.size_xl,
    lineHeight: 24,
    width: 327,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    color: Color.colorGray_200,
    left: 24,
    textAlign: "center",
    position: "absolute",
  },
  btnChild: {
    backgroundColor: Color.color,
    borderRadius: Border.br_5xs,
    height: 55,
    width: 327,
    left: 0,
    top: 0,
    position: "absolute",
  },
  text2: {
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
    top: 749,
    left: 24,
    height: 55,
  },
  child: {
    top: 28,
    height: 55,
    width: 327,
    position: "absolute",
    left: 0,
  },
  checkedIcon: {
    top: 49,
    left: 298,
    width: 13,
    height: 13,
    position: "absolute",
    overflow: "hidden",
  },
  text3: {
    color: Color.colorGray_200,
    textAlign: "left",
    left: 16,
    top: 43,
  },
  text4: {
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorGray_100,
    left: 0,
  },
  view1: {
    top: 190,
  },
  text5: {
    color: Color.colorGray_100,
  },
  view2: {
    top: 289,
  },
  view3: {
    top: 388,
  },
  view4: {
    top: 487,
  },
  view5: {
    top: 586,
  },
  text14: {
    textDecoration: "underline",
  },
  text13: {
    left: 48,
    color: Color.colorDarkgray,
    width: 279,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_smi,
  },
  bg1: {
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_5xs,
  },
  checkedIcon1: {
    left: 8,
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  view6: {
    top: 693,
    height: 32,
    width: 327,
    left: 24,
    position: "absolute",
  },
  view: {
    backgroundColor: Color.colorWhitesmoke,
    height: 841,
    overflow: "hidden",
    width: 375,
  },
});

export default Frame7;
