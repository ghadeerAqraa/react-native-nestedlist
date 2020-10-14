import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Button
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/FontAwesome5';
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
}
) => {
    const [isSelectAll , toggleSelectAll] = useState(true)
    const handleSelectAll=()=>{
        toggleSelectAllSubTopics(isSelectAll)
        toggleSelectAll(!isSelectAll)
    }

         const _renderSubTopic = (subTopic,index,subIndex) => {
          return (
            <View style={[styles.checkboxContainer , {paddingLeft:10}]}>

           <View style={ { width:20,
    height:20}}>
           <CheckBox
             value={subTopic.is_selected}
             onValueChange={()=>setSubTopic(index,subIndex)}
             style={styles.checkbox}
             style={{ height: 20, width: 20 }}
             animationDuration={0.1}
             onAnimationType="fade"
             offAnimationType="fade"
             boxType="square"
             disabled={false}
           />
         </View>
          <Text style={[styles.subTopicText, subTopicLabelStyle]}>{subTopic.sub_topic_name}</Text>
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
             <Text style={topicLabelStyle}> {title}</Text>
            </View>
          );
        };
     
    return (
      <View style={{width:'100%' , flex:1}}>
          <TouchableOpacity style={[styles.selectButtonStyle]} onPress={()=> handleSelectAll()}><Text style={selectButtonLabelStyle}>{isSelectAll ? selectAllLabel: deSelectAllLabel}</Text></TouchableOpacity>
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
    alignItems:'center',
    marginVertical:4,
  },
  checkbox: {
    alignSelf: "center",
  },
  subTopicText: {
    marginHorizontal: 3,
  },
  topicWithIconStyle:{
    flex:1,flexDirection:'row',padding:4 , alignItems:'center'
  },
  appButtonStyle:{
    flex: 1,
    height:40,
  },
  bottomContainer:{flex:1,flexDirection:'row'},
  selectButtonStyle:{
margin:5
  }
})
  export default NestedList;
