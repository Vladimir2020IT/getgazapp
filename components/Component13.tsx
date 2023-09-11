import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const Component13 = () => {
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
        <Text style={[styles.text, styles.textFlexBox1]}>Добавить дом</Text>
      </View>
      <Text style={[styles.text1, styles.textPosition2]}>
        Вы сможете добавить больше домов в разделе “мои дома”
      </Text>
      <View style={[styles.homeIndicator, styles.bg1Position]}>
        <View style={[styles.bg1, styles.bg1Position]} />
        <View style={styles.homeIndicator1} />
      </View>
      <Text style={[styles.text2, styles.textTypo1]}>{`Заполните данные о
вашем доме`}</Text>
      <View style={[styles.btn, styles.btnLayout]}>
        <LinearGradient
          style={[styles.btnChild, styles.btnChildBg]}
          locations={[0, 1]}
          colors={["#63b4ee", "#55ffd6"]}
        />
        <Text style={[styles.text3, styles.textTypo]}>Добавить дом</Text>
      </View>
      <View style={[styles.view1, styles.viewLayout]}>
        <View style={[styles.child, styles.childLayout]} />
        <Text style={[styles.text4, styles.itemPosition]}>Карта</Text>
        <View style={[styles.item, styles.itemPosition]} />
        <Text style={[styles.text5, styles.textFlexBox]}>№ дома / участка</Text>
        <Text style={[styles.text6, styles.textFlexBox]}>Адрес</Text>
      </View>
      <View style={[styles.view2, styles.viewLayout]}>
        <View style={[styles.child, styles.childLayout]} />
        <Text style={[styles.text7, styles.textFlexBox]}>
          <Text style={styles.text8}>
            <Text style={styles.text9}>Моск</Text>
            <Text style={styles.text10}>{` `}</Text>
          </Text>
          <Text style={styles.text10}>
            <Text style={styles.textTypo1}>|</Text>
          </Text>
        </Text>
        <Text style={[styles.text6, styles.textFlexBox]}>Город</Text>
      </View>
      <View style={[styles.view3, styles.viewLayout]}>
        <View style={[styles.child, styles.childLayout]} />
        <Text style={[styles.text5, styles.textFlexBox]}>0 м3</Text>
        <Text style={[styles.text6, styles.textFlexBox]}>
          Отапливаемая площадь (м3)
        </Text>
      </View>
      <View style={[styles.view4, styles.viewLayout]}>
        <View style={[styles.child, styles.childLayout]} />
        <Text style={[styles.text5, styles.textFlexBox]}>Модель</Text>
        <Text style={[styles.text6, styles.textFlexBox]}>Модель котла</Text>
      </View>
      <View style={[styles.view5, styles.viewLayout]}>
        <View style={[styles.child, styles.childLayout]} />
        <Text style={[styles.text5, styles.textFlexBox]}>0 кВт</Text>
        <Text style={[styles.text6, styles.textFlexBox]}>
          Мощность котла (кВт)
        </Text>
      </View>
      <View style={[styles.view6, styles.viewLayout]}>
        <View style={[styles.child, styles.childLayout]} />
        <Text style={[styles.text5, styles.textFlexBox]}>0 м3</Text>
        <Text style={[styles.text6, styles.textFlexBox]}>
          Емкость газгольдера (м3)
        </Text>
      </View>
      <View style={[styles.view7, styles.viewLayout]}>
        <View style={[styles.child, styles.childLayout]} />
        <Text style={[styles.text5, styles.textFlexBox]}>
          Паспортные данные
        </Text>
        <Text style={[styles.text6, styles.textFlexBox]}>Паспорт сосуда</Text>
      </View>
      <View style={[styles.view8, styles.viewLayout]}>
        <View style={[styles.child, styles.childLayout]} />
        <Text style={[styles.text5, styles.textFlexBox]}>0 м</Text>
        <Text style={[styles.text6, styles.textFlexBox]}>
          Расстояние от парковки до зоны залива (м)
        </Text>
      </View>
      <View style={[styles.view9, styles.viewLayout]}>
        <View style={[styles.child, styles.childLayout]} />
        <Text style={[styles.text5, styles.textFlexBox]}>0 м</Text>
        <Text style={[styles.text6, styles.textFlexBox]}>
          Ширина дорожной колеи (м)
        </Text>
      </View>
      <Text style={[styles.text28, styles.textTypo1]}>Я сделаю это позже</Text>
      <View style={[styles.select, styles.btnLayout]}>
        <View style={[styles.selectChild, styles.childLayout]} />
        <LinearGradient
          style={[styles.selectItem, styles.textLayout]}
          locations={[0, 1]}
          colors={["#63b4ee", "#55ffd6"]}
        />
        <Text style={[styles.text29, styles.textLayout]}>Жилой дом</Text>
        <Text style={[styles.text30, styles.textLayout]}>Дача</Text>
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
  textFlexBox1: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    lineHeight: 24,
  },
  textPosition2: {
    width: 327,
    left: 24,
    textAlign: "center",
    position: "absolute",
  },
  textTypo1: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
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
    lineHeight: 25,
    top: 15,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
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
    textAlign: "center",
    position: "absolute",
    color: Color.colorGray_200,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
    top: "72.73%",
  },
  tabBar: {
    height: 88,
    left: 0,
    top: 0,
    position: "absolute",
  },
  text1: {
    top: 170,
    color: Color.colorGray_100,
    fontFamily: FontFamily.interRegular,
    lineHeight: 20,
    fontSize: FontSize.size_mini,
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
    top: 1319,
    height: 21,
    left: 0,
    position: "absolute",
  },
  text2: {
    top: 112,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    width: 327,
    left: 24,
    textAlign: "center",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    lineHeight: 24,
  },
  btnChild: {
    height: 55,
    width: 327,
    position: "absolute",
    left: 0,
    top: 0,
  },
  text3: {
    fontSize: FontSize.size_mid,
    color: Color.colorWhite,
    width: 327,
    left: 0,
    position: "absolute",
  },
  btn: {
    top: 1204,
    left: 24,
    height: 55,
  },
  child: {
    top: 28,
  },
  text4: {
    left: 271,
    lineHeight: 21,
    textAlign: "right",
    color: Color.colorLightskyblue,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  item: {
    left: 254,
    backgroundColor: Color.colorGray_100,
    width: 1,
    height: 21,
  },
  text5: {
    left: 16,
    top: 43,
    textAlign: "left",
    lineHeight: 25,
    fontSize: FontSize.size_mid,
    color: Color.colorGray_100,
    fontFamily: FontFamily.interRegular,
  },
  text6: {
    lineHeight: 18,
    fontSize: FontSize.size_smi,
    color: Color.colorGray_100,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    left: 0,
    top: 0,
  },
  view1: {
    top: 404,
  },
  text9: {
    color: Color.colorGray_200,
  },
  text10: {
    color: Color.colorLightskyblue,
  },
  text8: {
    fontFamily: FontFamily.interRegular,
  },
  text7: {
    left: 16,
    top: 43,
    textAlign: "left",
    lineHeight: 25,
    fontSize: FontSize.size_mid,
  },
  view2: {
    top: 305,
  },
  view3: {
    top: 503,
  },
  view4: {
    top: 602,
  },
  view5: {
    top: 701,
  },
  view6: {
    top: 800,
  },
  view7: {
    top: 899,
  },
  view8: {
    top: 998,
  },
  view9: {
    top: 1097,
  },
  text28: {
    top: 1283,
    left: 32,
    width: 311,
    color: Color.colorGray_100,
    lineHeight: 20,
    fontSize: FontSize.size_mini,
    textAlign: "center",
    position: "absolute",
  },
  selectChild: {
    top: 0,
  },
  selectItem: {
    top: 4,
    height: 47,
    left: 4,
    width: 159,
    backgroundColor: Color.color,
    borderRadius: Border.br_5xs,
  },
  text29: {
    left: 164,
    width: 159,
    lineHeight: 25,
    top: 15,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    color: Color.colorGray_100,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontSize: FontSize.size_mini,
  },
  text30: {
    left: 4,
    width: 159,
    color: Color.colorWhite,
    lineHeight: 25,
    top: 15,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontSize: FontSize.size_mini,
  },
  select: {
    top: 234,
    left: 24,
    height: 55,
  },
  view: {
    backgroundColor: Color.colorWhitesmoke,
    height: 1340,
    overflow: "hidden",
    width: 375,
  },
});

export default Component13;
