import React, { useState } from "react";
import type { PropsWithChildren } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Colors } from "../../utils/Constans/colors";
import AppText from "./app-text";
import { ArrowDownIcon, ArrowUpIcon } from "./Icons";

type AccordionItemPros = PropsWithChildren<{
  title: string;
}>;

export default function AccordionItem({
  children,
  title,
}: AccordionItemPros): JSX.Element {
  const [expanded, setExpanded] = useState(false);

  function toggleItem() {
    setExpanded(!expanded);
  }

  const body = <View>{children}</View>;

  return (
    <View style={styles.accordContainer} key={title}>
      <TouchableOpacity
        style={[
          styles.accordHeader,
          { borderRadius: expanded ? undefined : 6 },
        ]}
        onPress={toggleItem}
      >
        <AppText style={styles.accordTitle}>{title}</AppText>
        {expanded ? <ArrowUpIcon /> : <ArrowDownIcon />}
      </TouchableOpacity>
      {expanded && body}
    </View>
  );
}

const styles = StyleSheet.create({
  accordContainer: {
    marginHorizontal: 16,
  },
  accordHeader: {
    padding: 25,
    borderTopRightRadius: 6,
    borderTopLeftRadius: 6,
    backgroundColor: Colors.white,
    marginTop: 20,
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  accordTitle: {
    fontSize: 12,
    fontWeight: "400",
    color: Colors.black,
    position: "absolute",
    alignSelf: "center",
    marginLeft: 16,
    left: 0,
  },
  textSmall: {
    fontSize: 16,
  },
  seperator: {
    height: 12,
  },
});
