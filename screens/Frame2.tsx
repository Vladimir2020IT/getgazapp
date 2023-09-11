import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Frame2 = () => {
  return (
    <View style={styles.view}>
      <View style={[styles.tabBar, styles.bg1Position]}>
        <View style={styles.bg} />
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
        <Text style={styles.text}>Добавить дом</Text>
      </View>
      <View style={[styles.homeIndicator, styles.bg1Position]}>
        <View style={[styles.bg1, styles.bg1Position]} />
        <View style={styles.homeIndicator1} />
      </View>
      <View style={[styles.btn, styles.btnLayout]}>
        <LinearGradient
          style={[styles.btnChild, styles.btnChildBg]}
          locations={[0, 1]}
          colors={["#63b4ee", "#55ffd6"]}
        />
        <Text style={[styles.text1, styles.textTypo]}>Добавить дом</Text>
      </View>
      <View style={[styles.view1, styles.viewLayout]}>
        <View style={[styles.child, styles.childLayout]} />
        <Text style={[styles.text2, styles.itemPosition]}>Карта</Text>
        <View style={[styles.item, styles.itemPosition]} />
        <Text style={[styles.text3, styles.textFlexBox]}>№ дома / участка</Text>
        <Text style={[styles.text4, styles.textFlexBox]}>Адрес</Text>
      </View>
      <View style={[styles.view2, styles.viewLayout]}>
        <View style={[styles.child, styles.childLayout]} />
        <Text style={[styles.text3, styles.textFlexBox]}>Город</Text>
        <Text style={[styles.text4, styles.textFlexBox]}>Город</Text>
      </View>
      <View style={[styles.view3, styles.viewLayout]}>
        <View style={[styles.child, styles.childLayout]} />
        <Text style={[styles.text3, styles.textFlexBox]}>0 м3</Text>
        <Text style={[styles.text4, styles.textFlexBox]}>
          Отапливаемая площадь (м3)
        </Text>
      </View>
      <View style={[styles.view4, styles.viewLayout]}>
        <View style={[styles.child, styles.childLayout]} />
        <Text style={[styles.text3, styles.textFlexBox]}>Модель</Text>
        <Text style={[styles.text4, styles.textFlexBox]}>Модель котла</Text>
      </View>
      <View style={[styles.view5, styles.viewLayout]}>
        <View style={[styles.child, styles.childLayout]} />
        <Text style={[styles.text3, styles.textFlexBox]}>0 кВт</Text>
        <Text style={[styles.text4, styles.textFlexBox]}>
          Мощность котла (кВт)
        </Text>
      </View>
      <View style={[styles.view6, styles.viewLayout]}>
        <View style={[styles.child, styles.childLayout]} />
        <Text style={[styles.text3, styles.textFlexBox]}>0 м3</Text>
        <Text style={[styles.text4, styles.textFlexBox]}>
          Емкость газгольдера (м3)
        </Text>
      </View>
      <View style={[styles.view7, styles.viewLayout]}>
        <View style={[styles.child, styles.childLayout]} />
        <Text style={[styles.text3, styles.textFlexBox]}>
          Паспортные данные
        </Text>
        <Text style={[styles.text4, styles.textFlexBox]}>Паспорт сосуда</Text>
      </View>
      <View style={[styles.view8, styles.viewLayout]}>
        <View style={[styles.child, styles.childLayout]} />
        <Text style={[styles.text3, styles.textFlexBox]}>0 м</Text>
        <Text style={[styles.text4, styles.textFlexBox]}>
          Расстояние от парковки до зоны залива (м)
        </Text>
      </View>
      <View style={[styles.view9, styles.viewLayout]}>
        <View style={[styles.child, styles.childLayout]} />
        <Text style={[styles.text3, styles.textFlexBox]}>0 м</Text>
        <Text style={[styles.text4, styles.textFlexBox]}>
          Ширина дорожной колеи (м)
        </Text>
      </View>
      <View style={[styles.select, styles.btnLayout]}>
        <View style={[styles.selectChild, styles.childLayout]} />
        <LinearGradient
          style={[styles.selectItem, styles.textLayout]}
          locations={[0, 1]}
          colors={["#63b4ee", "#55ffd6"]}
        />
        <Text style={[styles.text21, styles.textLayout]}>Жилой дом</Text>
        <Text style={[styles.text22, styles.textLayout]}>Дача</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bg1Position: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  backIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  btnLayout: {
    height: 55,
    width: 327,
    position: "absolute",
  },
  btnChildBg: {
    backgroundColor: Color.color,
    borderRadius: Border.br_5xs,
  },
  textTypo: {
    color: Color.colorWhite,
    top: 15,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    lineHeight: 25,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
  },
  viewLayout: {
    height: 83,
    width: 327,
    left: 24,
    position: "absolute",
  },
  childLayout: {
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_5xs,
    height: 55,
    width: 327,
    left: 0,
    position: "absolute",
  },
  itemPosition: {
    top: 45,
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "left",
    color: Color.colorGray_100,
    position: "absolute",
  },
  textLayout: {
    width: 159,
    position: "absolute",
  },
  bg: {
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
    right: "87.2%",
    left: "6.4%",
    top: "72.73%",
    maxHeight: "100%",
    maxWidth: "100%",
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
    left: "4.27%",
    lineHeight: 24,
    color: Color.colorGray_200,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    top: "72.73%",
    position: "absolute",
  },
  tabBar: {
    height: 88,
    left: 0,
    top: 0,
    position: "absolute",
  },
  bg1: {
    height: 21,
    left: 0,
    top: 0,
    position: "absolute",
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
    top: 1153,
    height: 21,
    left: 0,
    position: "absolute",
  },
  btnChild: {
    height: 55,
    width: 327,
    position: "absolute",
    left: 0,
    top: 0,
  },
  text1: {
    fontSize: FontSize.size_mid,
    color: Color.colorWhite,
    top: 15,
    width: 327,
    left: 0,
    position: "absolute",
  },
  btn: {
    top: 1082,
    left: 24,
    width: 327,
  },
  child: {
    top: 28,
  },
  text2: {
    left: 271,
    lineHeight: 21,
    color: Color.colorLightskyblue,
    textAlign: "right",
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    top: 45,
  },
  item: {
    left: 254,
    backgroundColor: Color.colorGray_100,
    width: 1,
    height: 21,
  },
  text3: {
    top: 43,
    left: 16,
    fontFamily: FontFamily.interRegular,
    lineHeight: 25,
    textAlign: "left",
    fontSize: FontSize.size_mid,
  },
  text4: {
    lineHeight: 18,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    left: 0,
    top: 0,
  },
  view1: {
    top: 282,
  },
  view2: {
    top: 183,
  },
  view3: {
    top: 381,
  },
  view4: {
    top: 480,
  },
  view5: {
    top: 579,
  },
  view6: {
    top: 678,
  },
  view7: {
    top: 777,
  },
  view8: {
    top: 876,
  },
  view9: {
    top: 975,
  },
  selectChild: {
    top: 0,
  },
  selectItem: {
    top: 4,
    height: 47,
    left: 164,
    width: 159,
    backgroundColor: Color.color,
    borderRadius: Border.br_5xs,
  },
  text21: {
    left: 164,
    width: 159,
    color: Color.colorWhite,
    top: 15,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    lineHeight: 25,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontSize: FontSize.size_mini,
  },
  text22: {
    left: 4,
    width: 159,
    color: Color.colorGray_100,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    lineHeight: 25,
    top: 15,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontSize: FontSize.size_mini,
  },
  select: {
    top: 112,
    left: 24,
    width: 327,
  },
  view: {
    backgroundColor: Color.colorWhitesmoke,
    height: 1174,
    overflow: "hidden",
    width: 375,
  },
});

export default Frame2;
