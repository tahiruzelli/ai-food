import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import AppText from "./app-text";
import { useEffect, useState } from "react";
import Modal from "react-native-modal";
import CircleView from "./circle-view";
import AppButton from "./app-button";
import dimensions from "../../utils/helpers/dimensions";
import { Colors } from "../../utils/constans/colors";
import SearchInput from "./search-input";
import { ButtonTypes } from "../../utils/enums/button-types";
import AppCheckbox from "./app-checkbox";
import Divider from "./divider";
import CancelIcon from "./Icons/cancel";

interface ModalProps {
  isVisible: boolean;
  height?: number;
  closeModal: () => void;
  applyFunction: (value: any) => void;
  clearFunction: () => void;
  data: [];
  title: string;
  multipleSelect: boolean;
  label: string;
}

const DropDownSheet: React.FC<ModalProps> = ({
  isVisible,
  height,
  data,
  closeModal,
  applyFunction,
  clearFunction,
  title,
  multipleSelect,
  label,
}) => {
  const [filteredData, setFilteredData] = useState([]);

  const [datas, setData] = useState([]);

  function setSearchText(value: string) {
    setFilteredData(
      data.filter((element: any) =>
        element[label].toString().toUpperCase().includes(value.toUpperCase())
      )
    );

    if (filteredData.length !== 0) {
      setData(filteredData);
      console.log(filteredData.length);
    } else {
      setData(data);
    }
  }

  useEffect(() => {
    setData(data);
  }, [data]);

  return (
    <Modal
      key={title}
      isVisible={isVisible}
      style={styles.view}
      onBackdropPress={() => closeModal()}
    >
      <View style={[styles.content, { height: height ?? undefined }]}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: dimensions().width - 32,
          }}
        >
          <AppText style={styles.title}>{title}</AppText>
          <TouchableOpacity onPress={closeModal}>
            <CircleView height={30} width={30} color={Colors.background}>
              <CancelIcon></CancelIcon>
            </CircleView>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: dimensions().width,
            marginTop: 30,
            marginBottom: 12,
          }}
        >
          <SearchInput onChange={setSearchText}></SearchInput>
        </View>
        <ScrollView>
          {datas.map((element: any, index: number) => {
            return (
              <Row
                key={index}
                element={element}
                isChanged={(value: boolean) => {
                  if (multipleSelect === false) {
                    removeAllSelected(data);
                  }
                  element["isSelected"] = value;
                  const nextList = [...data];
                  setData(nextList);
                }}
                isSelected={element.isSelected ?? false}
                label={label}
                multipleSelect={multipleSelect}
              ></Row>
            );
          })}
        </ScrollView>
        <View
          style={{
            flexDirection: "row",
            width: dimensions().width - 32,
            marginTop: 20,
          }}
        >
          <View style={{ flex: 1, marginRight: 8 }}>
            <AppButton
              type={ButtonTypes.clear}
              title={"Temizle"}
              onTap={() => {
                removeAllSelected(datas);
                const nextList = [...datas];
                setData(nextList);
                clearFunction();
              }}
              paddingHorizontal={0}
              textColor={Colors.hover}
              borderRadius={111}
            ></AppButton>
          </View>
          <View style={{ flex: 1, marginLeft: 8 }}>
            <AppButton
              type={ButtonTypes.hover}
              title={"Uygula"}
              onTap={() => {
                if (multipleSelect === true) {
                  const selectedData: any[] = [];
                  for (let index = 0; index < datas.length; index++) {
                    const element = datas[index];
                    if (element.isSelected === true) {
                      selectedData.push(element);
                    }
                  }
                  applyFunction(selectedData);
                } else {
                  for (let index = 0; index < datas.length; index++) {
                    const element = datas[index];
                    if (element.isSelected === true) {
                      applyFunction(element);
                    }
                  }
                }
                closeModal();
              }}
              paddingHorizontal={0}
              borderRadius={111}
            ></AppButton>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default DropDownSheet;

function Row(props: any) {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          props.isChanged(!props.isSelected);
        }}
        key={props.element[props.label]}
        style={{
          width: dimensions().width - 32,
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
          marginVertical: 14,
        }}
      >
        <AppText
          style={
            props.isSelected
              ? styles.selectedCityTextStyle
              : styles.unSelectedCityTextStyle
          }
        >
          {props.element[props.label]}
        </AppText>
        <AppCheckbox
          borderRadius={props.multipleSelect === true ? 3 : 111}
          isSelected={props.isSelected}
        ></AppCheckbox>
      </TouchableOpacity>
      <Divider width={dimensions().width - 32}></Divider>
    </View>
  );
}

function removeAllSelected(data: []) {
  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    element["isSelected"] = false;
  }
  return data;
}

const styles = StyleSheet.create({
  selectedCityTextStyle: {
    fontSize: 13,
    fontWeight: "600",
    color: Colors.navy,
  },
  unSelectedCityTextStyle: {
    fontSize: 13,
    fontWeight: "400",
    color: Colors.navy,
  },
  content: {
    backgroundColor: "white",
    paddingHorizontal: 16,
    paddingVertical: 30,
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  view: {
    justifyContent: "flex-end",
    margin: 0,
  },
  description: {
    fontSize: 14,
    fontWeight: "400",
    color: Colors.default,
    textAlign: "center",
  },
  title: {
    fontSize: 16,
    color: Colors.black,
    fontWeight: "400",
  },
});
