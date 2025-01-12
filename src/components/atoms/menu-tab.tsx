import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "../../utils/constans/colors";
import {
  AnnouncementIcon,
  ArrowRightIcon,
  BankIcon,
  BillingIcon,
  ContactUsIcon,
  ContractsIcon,
  DocumentsIcon,
  InformationIcon,
  JobsIcon,
  LogoutIcon,
  NotificationSettingsIcon,
  QuestionIcon,
  SettingsIcon,
  VehicleIcon,
  WalletIcon,
} from "./Icons";
import AppText from "./app-text";

export default function MenuTab(props: any) {
  function GetIcon(props: any) {
    const title = props.title;
    if (title == "İşlerim") {
      return (
        <JobsIcon height={18} width={18} color={Colors.primary}></JobsIcon>
      );
    } else if (title == "Araçlarım") {
      return (
        <VehicleIcon
          height={18}
          width={18}
          color={Colors.primary}
        ></VehicleIcon>
      );
    } else if (title == "Kazançlarım") {
      return (
        <WalletIcon height={18} width={18} color={Colors.primary}></WalletIcon>
      );
    } else if (title == "Ayrıcalıklarım") {
      return (
        <AnnouncementIcon
          height={18}
          width={18}
          color={Colors.primary}
        ></AnnouncementIcon>
      );
    } else if (title == "Profil Ayarları") {
      return (
        <SettingsIcon
          height={18}
          width={18}
          color={Colors.primary}
        ></SettingsIcon>
      );
    } else if (title == "Belgelerim") {
      return (
        <DocumentsIcon
          height={18}
          width={18}
          color={Colors.primary}
        ></DocumentsIcon>
      );
    } else if (title == "Ödeme Bilgileri") {
      return (
        <BankIcon height={18} width={18} color={Colors.primary}></BankIcon>
      );
    } else if (title == "Fatura Bilgileri") {
      return (
        <BillingIcon
          height={18}
          width={18}
          color={Colors.primary}
        ></BillingIcon>
      );
    } else if (title == "Bildirim İzinleri") {
      return (
        <NotificationSettingsIcon
          height={18}
          width={18}
          color={Colors.primary}
        ></NotificationSettingsIcon>
      );
    } else if (title == "Hakkımızda") {
      return (
        <InformationIcon
          height={18}
          width={18}
          color={Colors.primary}
        ></InformationIcon>
      );
    } else if (title == "Sık Sorulan Sorular") {
      return (
        <QuestionIcon
          height={18}
          width={18}
          color={Colors.primary}
        ></QuestionIcon>
      );
    } else if (title == "Sözleşmeler") {
      return (
        <ContractsIcon
          height={18}
          width={18}
          color={Colors.primary}
        ></ContractsIcon>
      );
    } else if (title == "Bize Ulaşın") {
      return (
        <ContactUsIcon
          height={18}
          width={18}
          color={Colors.primary}
        ></ContactUsIcon>
      );
    } else if (title == "Çıkış Yap") {
      return (
        <LogoutIcon height={18} width={18} color={Colors.primary}></LogoutIcon>
      );
    }
  }

  return (
    <View key={props.title}>
      <TouchableOpacity onPress={props.onPress}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 16,
          }}
        >
          <View
            style={[
              styles.iconContainer,
              {
                backgroundColor:
                  props.title == "Çıkış Yap"
                    ? Colors.red100
                    : Colors.blueSecondary,
              },
            ]}
          >
            <GetIcon title={props.title}></GetIcon>
          </View>
          <AppText
            style={[
              styles.titleStyle,
              {
                color: props.title == "Çıkış Yap" ? Colors.error : Colors.navy,
              },
            ]}
          >
            {props.title}
          </AppText>
          <ArrowRightIcon></ArrowRightIcon>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    height: 36,
    width: 36,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  titleStyle: {
    fontSize: 12,
    fontWeight: "500",
    marginLeft: 16,
    flex: 1,
  },
});
