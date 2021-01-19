import React, { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import CheckBox from "@react-native-community/checkbox";
const NestedList = ({
  topicsData,
  setTopic,
  setSubTopic,
  topicLabelStyle,
  subTopicLabelStyle,
  selectAllLabel,
  deSelectAllLabel,
  toggleSelectAllSubTopics,
  selectButtonLabelStyle,
  showSelectAllButton = false,
  tintColor = "#9ea1b4",
  onCheckColor = "#6945ff",
  onFillColor = "#13f4ae",
  onTintColor = "#13f4ae",
  boxType = "square",
  lineWidth = 1,
}) => {
  const [isSelectAll, toggleSelectAll] = useState(true);
  const handleSelectAll = () => {
    toggleSelectAllSubTopics(isSelectAll);
    toggleSelectAll(!isSelectAll);
  };

  const _renderSubTopic = (subTopic, index, subIndex) => {
    return (
      <View
        style={[styles.checkboxContainer, { paddingLeft: 70 }]}
        key={subTopic.sub_topic_id}
      >
        <View style={{ width: 20, height: 20 }}>
          <CheckBox
            value={subTopic.is_selected}
            onValueChange={() => setSubTopic(index, subIndex)}
            style={styles.checkbox}
            style={{ height: 20, width: 20 }}
            animationDuration={0.1}
            onAnimationType="fade"
            offAnimationType="fade"
            tintColor={tintColor}
            onCheckColor={onCheckColor}
            onFillColor={onFillColor}
            onTintColor={onTintColor}
            boxType={boxType}
            disabled={false}
            lineWidth={lineWidth}
          />
        </View>
        <TouchableOpacity onPress={() => setSubTopic(index, subIndex)}>
          <Text style={[styles.subTopicText, subTopicLabelStyle]}>
            {subTopic.sub_topic_name}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const _renderListItem = ({ item, index }) => {
    let selectedSubTopics = item.items.filter(
      (subTopic) => subTopic.is_selected == true
    );
    return (
      <View
        style={{ flex: 1, flexDirection: "column", paddingLeft: 10 }}
        key={index}
      >
        <TouchableOpacity onPress={() => setTopic(index)} style={styles.item}>
          {_renderTopicTitleWithIconView(
            item.title,
            item.topicIcon,
            selectedSubTopics.length + "/" + item.items.length
          )}
        </TouchableOpacity>
        {item.opened && (
          <View>
            {item.items.map((subTopic, subIndex) =>
              _renderSubTopic(subTopic, index, subIndex)
            )}
          </View>
        )}
      </View>
    );
  };

  const _renderTopicTitleWithIconView = (title, Icon, selectedItemText) => {
    return (
      <View style={styles.topicWithIconStyle}>
        <View style={{ width: 40, justifyContent: "center" }}>{Icon}</View>
        <Text style={topicLabelStyle}> {title}</Text>
        <Text
          style={[topicLabelStyle, { color: "#9ea1b4", paddingHorizontal: 4 }]}
        >
          ({selectedItemText})
        </Text>
      </View>
    );
  };

  return (
    <View style={{ width: "100%", flex: 1 }}>
      {showSelectAllButton && (
        <TouchableOpacity
          style={[styles.selectButtonStyle]}
          onPress={() => handleSelectAll()}
        >
          <Text style={selectButtonLabelStyle}>
            {isSelectAll ? selectAllLabel : deSelectAllLabel}
          </Text>
        </TouchableOpacity>
      )}
      <FlatList
        data={topicsData}
        keyExtractor={(item, i) => String(i)}
        renderItem={_renderListItem}
        keyboardShouldPersistTaps="handled"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    backgroundColor: "rgb(255, 255, 255)",
    padding: 15,
  },
  node: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: "rgb(0, 0, 0)",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  checkbox: {
    alignSelf: "center",
  },
  subTopicText: {
    marginHorizontal: 3,
  },
  topicWithIconStyle: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  appButtonStyle: {
    flex: 1,
    height: 40,
  },
  bottomContainer: { flex: 1, flexDirection: "row" },
  selectButtonStyle: {
    margin: 5,
  },
});
export default NestedList;
