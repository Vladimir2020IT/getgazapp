import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const NavBar = () => {
  return (
    <View style={styles.navbar}>
      <View style={[styles.bg, styles.bgBg]} />
      <View style={[styles.view, styles.viewPosition]}>
        <View style={[styles.bg1, styles.bg1Position]} />
        <Text style={styles.text}>Мои дома</Text>
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/1.png")}
        />
      </View>
      <View style={[styles.view1, styles.viewPosition]}>
        <View style={[styles.bg1, styles.bg1Position]} />
        <Text style={[styles.text1, styles.textTypo]}>История</Text>
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/2.png")}
        />
      </View>
      <View style={[styles.view2, styles.view2Position]}>
        <View style={[styles.bg3, styles.bg1Position]} />
        <Text style={[styles.text2, styles.textTypo]}>Заказать</Text>
        <Image
          style={[styles.icon2, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/3.png")}
        />
      </View>
      <View style={[styles.view3, styles.viewPosition]}>
        <View style={[styles.bg1, styles.bg1Position]} />
        <Text style={[styles.text1, styles.textTypo]}>Профиль</Text>
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/4.png")}
        />
      </View>
      <View style={[styles.view4, styles.viewPosition]}>
        <View style={[styles.bg1, styles.bg1Position]} />
        <Text style={[styles.text1, styles.textTypo]}>Поддержка</Text>
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/5.png")}
        />
      </View>
      <View style={styles.homeIndicator}>
        <View style={[styles.bg6, styles.bgBg]} />
        <View style={[styles.homeIndicator1, styles.view2Position]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bgBg: {
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  viewPosition: {
    bottom: "29.25%",
    width: "20%",
  },
  bg1Position: {
    backgroundColor: Color.colorSilver,
    left: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
    display: "none",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    top: "0%",
    position: "absolute",
  },
  textTypo: {
    color: Color.colorDarkgray,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_2xs,
    left: "0%",
    width: "100%",
    position: "absolute",
  },
  view2Position: {
    top: "0%",
    position: "absolute",
  },
  bg: {
    height: "79.25%",
    top: "20.75%",
    shadowColor: "rgba(99, 126, 167, 0.1)",
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    left: "0%",
    bottom: "0%",
    width: "100%",
    right: "0%",
  },
  bg1: {
    height: "83.54%",
    top: "-520.52%",
    bottom: "536.98%",
  },
  text: {
    color: Color.colorGray_200,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_2xs,
    top: "70.73%",
    height: "29.27%",
    left: "0%",
    width: "100%",
    position: "absolute",
  },
  icon: {
    right: "33.33%",
    left: "34.67%",
    bottom: "41.46%",
    width: "32%",
    height: "58.54%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  view: {
    right: "80%",
    top: "32.08%",
    height: "38.68%",
    bottom: "29.25%",
    width: "20%",
    position: "absolute",
    left: "0%",
  },
  text1: {
    top: "70.73%",
    height: "29.27%",
    color: Color.colorDarkgray,
  },
  icon1: {
    right: "34.67%",
    left: "33.33%",
    bottom: "41.46%",
    width: "32%",
    height: "58.54%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  view1: {
    right: "60%",
    left: "20%",
    top: "32.08%",
    height: "38.68%",
    bottom: "29.25%",
    width: "20%",
    position: "absolute",
  },
  bg3: {
    height: "45.67%",
    top: "-239.22%",
    bottom: "293.55%",
  },
  text2: {
    height: "16%",
    top: "84%",
  },
  icon2: {
    height: "73.33%",
    width: "73.33%",
    right: "12%",
    bottom: "26.67%",
    left: "14.67%",
  },
  view2: {
    height: "70.75%",
    right: "40%",
    left: "40%",
    bottom: "29.25%",
    width: "20%",
    top: "0%",
  },
  view3: {
    right: "20%",
    left: "60%",
    top: "32.08%",
    height: "38.68%",
    bottom: "29.25%",
    width: "20%",
    position: "absolute",
  },
  view4: {
    left: "80%",
    top: "32.08%",
    height: "38.68%",
    bottom: "29.25%",
    width: "20%",
    position: "absolute",
    right: "0%",
  },
  bg6: {
    height: "420%",
    width: "277.78%",
    top: "-160%",
    right: "-88.89%",
    bottom: "-160%",
    left: "-88.89%",
    display: "none",
  },
  homeIndicator1: {
    height: "100%",
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorGray_400,
    left: "0%",
    bottom: "0%",
    width: "100%",
    right: "0%",
  },
  homeIndicator: {
    height: "4.72%",
    width: "36%",
    top: "87.74%",
    right: "32%",
    bottom: "7.55%",
    left: "32%",
    position: "absolute",
  },
  navbar: {
    width: 375,
    height: 106,
    display: "none",
  },
});

export default NavBar;
