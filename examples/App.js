/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import NestedList from 'react-native-nestedlist'
const data = [{title:'Topic 1' , items :[{"sub_topic_id":1,"sub_topic_name":"Subtopic 1","is_selected":false},{"sub_topic_id":2,"sub_topic_name":"Subtopic 2","is_selected":false},{"sub_topic_id":3,"sub_topic_name":"Subtopic 3","is_selected":false}],opened:false},
{title:'Topic 2' , items :[{"sub_topic_id":1,"sub_topic_name":"Subtopic 1","is_selected":false},{"sub_topic_id":2,"sub_topic_name":"Subtopic 2","is_selected":false},{"sub_topic_id":3,"sub_topic_name":"Subtopic 3","is_selected":false}],opened:false}]
const App = () => {
  const [topicsData, setTopicsData] = useState(data);
  const setTopic = (index)=>{
    const updatedTopicArray = [...topicsData]
    updatedTopicArray[index].opened = !updatedTopicArray[index].opened
    setTopicsData(updatedTopicArray)
  }

const setSubTopic=(index,subIndex)=>{
  const updatedSubTopicArray = [...topicsData]
  updatedSubTopicArray[index].items[subIndex].is_selected = !updatedSubTopicArray[index].items[subIndex].is_selected
  setTopicsData(updatedSubTopicArray)      
}


const toggleSelectAllSubTopics=(isSelectAll)=>{
  console.log('select all',isSelectAll)
  const updatedSubTopicArray = [...topicsData]
  updatedSubTopicArray.map((topic)=>{
    topic.items.map(item => {
      item.is_selected = isSelectAll
    })
  })
  setTopicsData(updatedSubTopicArray)      


}

  return (
          <View style={styles.body}>
                <NestedList
            topicsData={topicsData} 
            setTopic={setTopic}
            setSubTopic={setSubTopic}
            selectAllLabel = {'Select All'}
            deSelectAllLabel = {'Deselect All'}
            toggleSelectAllSubTopics = {toggleSelectAllSubTopics}
            topicLabelStyle = {styles.topicLabelStyle}
            subTopicLabelStyle = {styles.subTopicLabelStyle}
            selectButtonLabelStyle = {styles.topicLabelStyle}
            ></NestedList>
            </View>
  );
};

const styles = StyleSheet.create({

  body: {
    flex:1
  },
  topicLabelStyle : {
    fontSize:17,
  },
  subTopicLabelStyle : {
    fontSize:22,
  }
});

export default App;
