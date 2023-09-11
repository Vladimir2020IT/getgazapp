import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Component11 = () => {
  return (
    <View style={styles.view}>
      <View style={[styles.navBar, styles.bg14Position]}>
        <View style={[styles.bg, styles.bgShadowBox]} />
        <View style={[styles.view1, styles.viewPosition7]}>
          <View style={[styles.bg1, styles.bg1Bg]} />
          <Text style={styles.vpn}>VPN</Text>
          <Image
            style={[styles.list1Icon, styles.iconLayout2]}
            contentFit="cover"
            source={require("../assets/list-1.png")}
          />
          <Image
            style={styles.child}
            contentFit="cover"
            source={require("../assets/ellipse-11.png")}
          />
        </View>
        <View style={[styles.view2, styles.viewPosition6]}>
          <View style={[styles.bg1, styles.bg1Bg]} />
          <Text style={styles.vpn}>Adblock</Text>
          <Image
            style={[styles.list1Icon, styles.iconLayout2]}
            contentFit="cover"
            source={require("../assets/list-1.png")}
          />
          <Image
            style={styles.child}
            contentFit="cover"
            source={require("../assets/ellipse-11.png")}
          />
        </View>
        <View style={[styles.view3, styles.viewPosition5]}>
          <View style={[styles.bg1, styles.bg1Bg]} />
          <Text style={styles.vpn}>Утечки</Text>
          <Image
            style={[styles.list1Icon, styles.iconLayout2]}
            contentFit="cover"
            source={require("../assets/list-1.png")}
          />
          <Image
            style={styles.child}
            contentFit="cover"
            source={require("../assets/ellipse-11.png")}
          />
        </View>
        <View style={[styles.view4, styles.viewPosition4]}>
          <View style={[styles.bg1, styles.bg1Bg]} />
          <Text style={styles.vpn}>Проверка ОС</Text>
          <Image
            style={[styles.list1Icon, styles.iconLayout2]}
            contentFit="cover"
            source={require("../assets/list-1.png")}
          />
          <Image
            style={styles.child}
            contentFit="cover"
            source={require("../assets/ellipse-11.png")}
          />
        </View>
        <View style={[styles.view5, styles.viewPosition3]}>
          <View style={[styles.bg1, styles.bg1Bg]} />
          <Text style={styles.text2}>Главная</Text>
          <Image
            style={[styles.list1Icon, styles.iconLayout2]}
            contentFit="cover"
            source={require("../assets/list-1.png")}
          />
          <Image
            style={styles.child}
            contentFit="cover"
            source={require("../assets/ellipse-111.png")}
          />
        </View>
      </View>
      <View style={[styles.homeIndicator, styles.bg6Layout]}>
        <View style={[styles.bg6, styles.bg6Layout]} />
        <View style={styles.homeIndicator1} />
      </View>
      <View style={[styles.tabBar, styles.barLayout]}>
        <View style={[styles.bg7, styles.bg7Position]} />
        <Text style={styles.text3}>Мои дома</Text>
        <Image
          style={[styles.icon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/6.png")}
        />
        <Image
          style={[styles.notificationsIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/notifications.png")}
        />
      </View>
      <View style={styles.navbar}>
        <View style={[styles.bg8, styles.bg7Position]} />
        <View style={[styles.view6, styles.viewPosition]}>
          <View style={[styles.bg9, styles.bg9Position]} />
          <Text style={[styles.text4, styles.textTypo1]}>Мои дома</Text>
          <Image
            style={[styles.icon1, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/1.png")}
          />
        </View>
        <View style={[styles.view7, styles.viewPosition]}>
          <View style={[styles.bg9, styles.bg9Position]} />
          <Text style={[styles.text5, styles.textTypo1]}>История</Text>
          <Image
            style={[styles.icon2, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/21.png")}
          />
        </View>
        <View style={[styles.view8, styles.viewPosition]}>
          <View style={[styles.bg11, styles.bg9Position]} />
          <Text style={[styles.text6, styles.textTypo1]}>Заказать</Text>
          <Image
            style={[styles.icon3, styles.iconLayout2]}
            contentFit="cover"
            source={require("../assets/31.png")}
          />
        </View>
        <View style={[styles.view9, styles.viewPosition]}>
          <View style={[styles.bg9, styles.bg9Position]} />
          <Text style={[styles.text5, styles.textTypo1]}>Профиль</Text>
          <Image
            style={[styles.icon1, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/41.png")}
          />
        </View>
        <View style={[styles.view10, styles.viewPosition]}>
          <View style={[styles.bg9, styles.bg9Position]} />
          <Text style={[styles.text5, styles.textTypo1]}>Поддержка</Text>
          <Image
            style={[styles.icon1, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/52.png")}
          />
        </View>
        <View style={styles.homeIndicator2}>
          <View style={[styles.bg14, styles.bg14Position]} />
          <View style={[styles.homeIndicator3, styles.bg7Position]} />
        </View>
      </View>
      <Text style={styles.text9}>
        Вы еще не добавили ни одного дома, сделайте это сейчас
      </Text>
      <View style={[styles.btn, styles.btnLayout]}>
        <LinearGradient
          style={[styles.btnChild, styles.btnLayout]}
          locations={[0, 1]}
          colors={["#63b4ee", "#55ffd6"]}
        />
        <Text style={[styles.text10, styles.textTypo]}>Добавить дом</Text>
      </View>
      <Text style={[styles.text11, styles.textTypo]}>Вы не добавили дом</Text>
      <Image
        style={styles.child2}
        contentFit="cover"
        source={require("../assets/ellipse-20.png")}
      />
      <Image
        style={[styles.groupIcon, styles.iconLayout2]}
        contentFit="cover"
        source={require("../assets/group-101.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bg14Position: {
    display: "none",
    position: "absolute",
  },
  bgShadowBox: {
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: -10,
    },
    backgroundColor: Color.colorWhite,
  },
  viewPosition7: {
    left: "20%",
    right: "60%",
  },
  bg1Bg: {
    backgroundColor: Color.colorSilver,
    display: "none",
  },
  iconLayout2: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  viewPosition6: {
    left: "40%",
    right: "40%",
  },
  viewPosition5: {
    left: "60%",
    right: "20%",
  },
  viewPosition4: {
    left: "80%",
    right: "0%",
  },
  viewPosition3: {
    right: "80%",
    left: "0%",
  },
  bg6Layout: {
    height: 21,
    position: "absolute",
    width: 375,
  },
  barLayout: {
    height: 88,
    left: 0,
    width: 375,
  },
  bg7Position: {
    bottom: "0%",
    width: "100%",
    right: "0%",
    left: "0%",
    position: "absolute",
  },
  iconLayout1: {
    width: "6.4%",
    height: "27.27%",
    top: "72.73%",
    bottom: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  viewPosition: {
    bottom: "29.25%",
    width: "20%",
    position: "absolute",
  },
  bg9Position: {
    width: "100%",
    right: "0%",
    backgroundColor: Color.colorSilver,
    left: "0%",
    display: "none",
    position: "absolute",
  },
  textTypo1: {
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.interMedium,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontWeight: "500",
    left: "0%",
    position: "absolute",
  },
  iconLayout: {
    bottom: "41.46%",
    height: "58.54%",
    maxHeight: "100%",
    maxWidth: "100%",
    top: "0%",
    width: "32%",
    position: "absolute",
    overflow: "hidden",
  },
  btnLayout: {
    height: 55,
    width: 327,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    width: 327,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    position: "absolute",
  },
  bg: {
    shadowColor: "rgba(0, 0, 0, 0.05)",
    top: 0,
    height: 88,
    left: 0,
    width: 375,
    position: "absolute",
  },
  bg1: {
    height: "140%",
    width: "125.33%",
    top: "-20%",
    right: "-25.33%",
    bottom: "-20%",
    left: "0%",
    backgroundColor: Color.colorSilver,
    position: "absolute",
  },
  vpn: {
    height: 12,
    width: 75,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.sFUIText,
    fontWeight: "500",
    fontSize: FontSize.size_3xs,
    top: 28,
    color: Color.colorGray_100,
    left: 0,
    position: "absolute",
  },
  list1Icon: {
    height: "60%",
    right: "21.33%",
    bottom: "40%",
    left: "46.67%",
    top: "0%",
    width: "32%",
    maxWidth: "100%",
    display: "none",
  },
  child: {
    left: 26,
    width: 24,
    height: 24,
    top: 0,
    position: "absolute",
  },
  view1: {
    bottom: "32.95%",
    top: "21.59%",
    width: "20%",
    height: "45.45%",
    position: "absolute",
  },
  view2: {
    bottom: "32.95%",
    top: "21.59%",
    width: "20%",
    height: "45.45%",
    position: "absolute",
  },
  view3: {
    bottom: "32.95%",
    top: "21.59%",
    width: "20%",
    height: "45.45%",
    position: "absolute",
  },
  view4: {
    bottom: "32.95%",
    top: "21.59%",
    width: "20%",
    height: "45.45%",
    position: "absolute",
  },
  text2: {
    color: Color.colorBlack,
    height: 12,
    width: 75,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.sFUIText,
    fontWeight: "500",
    fontSize: FontSize.size_3xs,
    top: 28,
    left: 0,
    position: "absolute",
  },
  view5: {
    bottom: "32.95%",
    top: "21.59%",
    width: "20%",
    height: "45.45%",
    position: "absolute",
  },
  navBar: {
    top: 724,
    height: 88,
    left: 0,
    width: 375,
  },
  bg6: {
    backgroundColor: Color.colorWhite,
    top: 0,
    left: 0,
  },
  homeIndicator1: {
    top: 8,
    left: 120,
    backgroundColor: Color.colorGray_200,
    width: 135,
    height: 5,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  homeIndicator: {
    top: 1117,
    left: 1,
  },
  bg7: {
    height: "100%",
    bottom: "0%",
    top: "0%",
    backgroundColor: Color.colorSilver,
    display: "none",
  },
  text3: {
    width: "91.47%",
    left: "4.27%",
    color: Color.colorGray_200,
    fontFamily: FontFamily.interMedium,
    top: "72.73%",
    lineHeight: 24,
    fontSize: FontSize.size_mini,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontWeight: "500",
    position: "absolute",
  },
  icon: {
    right: "6.4%",
    left: "87.2%",
  },
  notificationsIcon: {
    right: "87.2%",
    left: "6.4%",
  },
  tabBar: {
    top: 0,
    position: "absolute",
  },
  bg8: {
    height: "79.25%",
    top: "20.75%",
    shadowColor: "rgba(99, 126, 167, 0.1)",
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: -10,
    },
    backgroundColor: Color.colorWhite,
  },
  bg9: {
    height: "83.54%",
    top: "-520.52%",
    bottom: "536.98%",
  },
  text4: {
    top: "70.73%",
    height: "29.27%",
    fontSize: FontSize.size_2xs,
    color: Color.colorGray_200,
  },
  icon1: {
    right: "33.33%",
    left: "34.67%",
  },
  view6: {
    top: "32.08%",
    height: "38.68%",
    bottom: "29.25%",
    right: "80%",
    left: "0%",
  },
  text5: {
    top: "70.73%",
    height: "29.27%",
    fontSize: FontSize.size_2xs,
    color: Color.colorGray_100,
  },
  icon2: {
    right: "34.67%",
    left: "33.33%",
  },
  view7: {
    top: "32.08%",
    height: "38.68%",
    bottom: "29.25%",
    left: "20%",
    right: "60%",
  },
  bg11: {
    height: "45.67%",
    top: "-239.22%",
    bottom: "293.55%",
  },
  text6: {
    height: "16%",
    top: "84%",
    color: Color.colorGray_100,
  },
  icon3: {
    height: "73.33%",
    width: "73.33%",
    right: "12%",
    bottom: "26.67%",
    left: "14.67%",
    top: "0%",
  },
  view8: {
    height: "70.75%",
    left: "40%",
    right: "40%",
    top: "0%",
  },
  view9: {
    top: "32.08%",
    height: "38.68%",
    bottom: "29.25%",
    left: "60%",
    right: "20%",
  },
  view10: {
    top: "32.08%",
    height: "38.68%",
    bottom: "29.25%",
    left: "80%",
    right: "0%",
  },
  bg14: {
    height: "420%",
    width: "277.78%",
    top: "-160%",
    right: "-88.89%",
    bottom: "-160%",
    left: "-88.89%",
    backgroundColor: Color.colorWhite,
  },
  homeIndicator3: {
    backgroundColor: Color.colorGray_400,
    height: "100%",
    bottom: "0%",
    top: "0%",
    borderRadius: Border.br_8xs,
  },
  homeIndicator2: {
    height: "4.72%",
    width: "36%",
    top: "87.74%",
    right: "32%",
    bottom: "7.55%",
    left: "32%",
    position: "absolute",
  },
  navbar: {
    top: 706,
    height: 106,
    left: 0,
    position: "absolute",
    width: 375,
  },
  text9: {
    top: 555,
    left: 32,
    lineHeight: 20,
    fontFamily: FontFamily.interRegular,
    width: 311,
    fontSize: FontSize.size_mini,
    textAlign: "center",
    color: Color.colorGray_100,
    position: "absolute",
  },
  btnChild: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.color,
    top: 0,
    left: 0,
  },
  text10: {
    top: 15,
    fontSize: FontSize.size_mid,
    lineHeight: 25,
    color: Color.colorWhite,
    left: 0,
  },
  btn: {
    top: 627,
    left: 24,
  },
  text11: {
    top: 515,
    fontSize: FontSize.size_xl,
    left: 24,
    lineHeight: 24,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    color: Color.colorBlack,
  },
  child2: {
    top: 147,
    left: 42,
    width: 303,
    height: 315,
    position: "absolute",
  },
  groupIcon: {
    height: "39.04%",
    width: "64.53%",
    top: "17.27%",
    right: "17.87%",
    bottom: "43.69%",
    left: "17.6%",
  },
  view: {
    backgroundColor: Color.colorWhitesmoke,
    height: 812,
    overflow: "hidden",
    width: 375,
  },
});

export default Component11;
