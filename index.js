import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  CheckBox,
  FlatList,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const NestedList = ({
    topicsData,
    setTopic,
    setSubTopic,
  
}
) => {
         const _renderSubTopic = (subTopic,index,subIndex) => {
          return (
           <View style={[styles.checkboxContainer , {paddingLeft:10}]}>
           <CheckBox
             value={subTopic.is_selected}
             onValueChange={()=>setSubTopic(index,subIndex)}
             style={styles.checkbox}
           />
           <Text style={styles.subTopicText}>{subTopic.sub_topic_name}</Text>
         </View>
          );
        };


        const _renderListItem = ({item,index}) => {
          return (
            <View style={{flex:1,flexDirection:'column',paddingLeft:10}}>
            <TouchableOpacity
              onPress={() => setTopic(index)}
              style={styles.item}>
                {item.opened ? _renderTopicTitleWithIconView(item.title,'minus') : _renderTopicTitleWithIconView(item.title,'plus')  }
            </TouchableOpacity>
            {item.opened && <View>
              {item.items.map((subTopic , subIndex)=>(
                _renderSubTopic(subTopic,index , subIndex)
              )
              )}
            </View>}
            </View>
          );
        };

        const _renderTopicTitleWithIconView = (title,iconName) => {
          return (
            <View style={styles.topicWithIconStyle}>
                <Icon
                 name={iconName}
                 color="black"
                 size={10}  
             />
             <Text> {title}</Text>
            </View>
          );
        };
     
    return (
      <View style={{width:'100%' , flex:1}}>
        <FlatList
      data={topicsData}
      keyExtractor={(item, i) => String(i)}
      renderItem={_renderListItem}
      keyboardShouldPersistTaps="handled"
      initialNumToRender={8}
    />
</View>
      );
  }
  const styles = StyleSheet.create({
  listContainer: {flex: 1, backgroundColor: 'rgb(255, 255, 255)', padding: 15},
  node: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: 'rgb(0, 0, 0)',
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems:'center'
  },
  checkbox: {
    alignSelf: "center",
  },
  subTopicText: {
    margin: 2,
  },
  topicWithIconStyle:{
    flex:1,flexDirection:'row',padding:4 , alignItems:'center'
  },
  appButtonStyle:{
    flex: 1,
    height:40,
  },
  bottomContainer:{flex:1,flexDirection:'row'}
})
  export default NestedList;
