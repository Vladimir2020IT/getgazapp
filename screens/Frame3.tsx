import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Frame3 = () => {
  return (
    <View style={styles.view}>
      <View style={[styles.navBar, styles.bg14Position]}>
        <View style={[styles.bg, styles.bgShadowBox]} />
        <View style={[styles.view1, styles.viewPosition7]}>
          <View style={[styles.bg1, styles.bg1Bg]} />
          <Text style={[styles.vpn, styles.vpnTypo]}>VPN</Text>
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
          <Text style={[styles.vpn, styles.vpnTypo]}>Adblock</Text>
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
          <Text style={[styles.vpn, styles.vpnTypo]}>Утечки</Text>
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
          <Text style={[styles.vpn, styles.vpnTypo]}>Проверка ОС</Text>
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
          <Text style={[styles.text2, styles.vpnTypo]}>Главная</Text>
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
      <View style={[styles.rectangleParent, styles.groupLayout]}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Image
          style={styles.right1Icon}
          contentFit="cover"
          source={require("../assets/right-12.png")}
        />
        <LinearGradient
          style={styles.groupItem}
          locations={[0, 1]}
          colors={["#78c6ff", "#55ffd6"]}
        />
        <Text style={[styles.text4, styles.textPosition2]}>Дом №1</Text>
        <Text style={[styles.text5, styles.textPosition2]}>
          г. Екатеринбург, КП “Березки”, д.132
        </Text>
      </View>
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Image
          style={styles.right1Icon}
          contentFit="cover"
          source={require("../assets/right-12.png")}
        />
        <LinearGradient
          style={styles.groupItem}
          locations={[0, 1]}
          colors={["#78c6ff", "#55ffd6"]}
        />
        <Text style={[styles.text4, styles.textPosition2]}>Дом №2</Text>
        <Text style={[styles.text5, styles.textPosition2]}>
          г. Челябинск, КП “Сосны”, д.85
        </Text>
      </View>
      <View style={[styles.rectangleContainer, styles.groupLayout]}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Image
          style={styles.right1Icon}
          contentFit="cover"
          source={require("../assets/right-12.png")}
        />
        <LinearGradient
          style={styles.groupItem}
          locations={[0, 1]}
          colors={["#78c6ff", "#55ffd6"]}
        />
        <Text style={[styles.text4, styles.textPosition2]}>Дом №3</Text>
        <Text style={[styles.text5, styles.textPosition2]}>
          г. Тюмень, КП “Дубы”, д.51/3
        </Text>
      </View>
      <View style={styles.navbar}>
        <View style={[styles.bg8, styles.bg7Position]} />
        <View style={[styles.view6, styles.viewPosition]}>
          <View style={[styles.bg9, styles.bg9Position]} />
          <Text style={[styles.text10, styles.textTypo]}>Мои дома</Text>
          <Image
            style={[styles.icon1, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/1.png")}
          />
        </View>
        <View style={[styles.view7, styles.viewPosition]}>
          <View style={[styles.bg9, styles.bg9Position]} />
          <Text style={[styles.text11, styles.textTypo]}>История</Text>
          <Image
            style={[styles.icon2, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/21.png")}
          />
        </View>
        <View style={[styles.view8, styles.viewPosition]}>
          <View style={[styles.bg11, styles.bg9Position]} />
          <Text style={[styles.text12, styles.textTypo]}>Заказать</Text>
          <Image
            style={[styles.icon3, styles.iconLayout2]}
            contentFit="cover"
            source={require("../assets/31.png")}
          />
        </View>
        <View style={[styles.view9, styles.viewPosition]}>
          <View style={[styles.bg9, styles.bg9Position]} />
          <Text style={[styles.text11, styles.textTypo]}>Профиль</Text>
          <Image
            style={[styles.icon1, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/41.png")}
          />
        </View>
        <View style={[styles.view10, styles.viewPosition]}>
          <View style={[styles.bg9, styles.bg9Position]} />
          <Text style={[styles.text14, styles.textTypo]}>Поддержка</Text>
          <Image
            style={[styles.icon1, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/51.png")}
          />
        </View>
        <View style={styles.homeIndicator2}>
          <View style={[styles.bg14, styles.bg14Position]} />
          <View style={[styles.homeIndicator3, styles.bg7Position]} />
        </View>
      </View>
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
  vpnTypo: {
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
  iconLayout2: {
    maxHeight: "100%",
    maxWidth: "100%",
    top: "0%",
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
  groupLayout: {
    height: 76,
    width: 327,
    position: "absolute",
  },
  textPosition2: {
    textAlign: "left",
    left: 20,
    position: "absolute",
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
  textTypo: {
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
    color: Color.colorGray_100,
  },
  list1Icon: {
    height: "60%",
    right: "21.33%",
    bottom: "40%",
    left: "46.67%",
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
    fontSize: FontSize.size_mini,
    color: Color.colorGray_200,
    fontFamily: FontFamily.interMedium,
    top: "72.73%",
    lineHeight: 24,
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
  groupChild: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorWhite,
    top: 0,
    left: 0,
  },
  right1Icon: {
    top: 30,
    left: 295,
    width: 16,
    height: 16,
    position: "absolute",
    overflow: "hidden",
  },
  groupItem: {
    borderTopRightRadius: Border.br_5xs,
    borderBottomRightRadius: Border.br_5xs,
    width: 4,
    height: 44,
    backgroundColor: Color.color,
    top: 16,
    left: 0,
    position: "absolute",
  },
  text4: {
    fontSize: FontSize.size_mid,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    top: 16,
    color: Color.colorGray_200,
    lineHeight: 24,
    textAlign: "left",
    left: 20,
  },
  text5: {
    top: 44,
    fontSize: FontSize.size_smi,
    lineHeight: 16,
    fontFamily: FontFamily.interRegular,
    color: Color.colorGray_100,
  },
  rectangleParent: {
    top: 112,
    left: 24,
    width: 327,
  },
  rectangleGroup: {
    top: 204,
    left: 24,
    width: 327,
  },
  rectangleContainer: {
    top: 296,
    left: 24,
    width: 327,
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
  text10: {
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
  text11: {
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
  text12: {
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
  },
  view8: {
    height: "70.75%",
    left: "40%",
    right: "40%",
    bottom: "29.25%",
    top: "0%",
  },
  view9: {
    top: "32.08%",
    height: "38.68%",
    bottom: "29.25%",
    left: "60%",
    right: "20%",
  },
  text14: {
    color: Color.colorLightgray,
    top: "70.73%",
    height: "29.27%",
    fontSize: FontSize.size_2xs,
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
  view: {
    backgroundColor: Color.colorWhitesmoke,
    height: 812,
    overflow: "hidden",
    width: 375,
  },
});

export default Frame3;
