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
const data = [{title:'Test1111' , items :[{"sub_topic_id":1,"sub_topic_name":"Classics","is_selected":false},{"sub_topic_id":2,"sub_topic_name":"Historical","is_selected":false},{"sub_topic_id":3,"sub_topic_name":"Time travel romance","is_selected":false}],opened:false},
{title:'Test1111333' , items :[{"sub_topic_id":1,"sub_topic_name":"Classics","is_selected":false},{"sub_topic_id":2,"sub_topic_name":"Historical","is_selected":false},{"sub_topic_id":3,"sub_topic_name":"Time travel romance","is_selected":false}],opened:false}]
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

  return (
          <View style={styles.body}>
                <NestedList
            topicsData={topicsData} 
            setTopic={setTopic}
            setSubTopic={setSubTopic}
            ></NestedList>
            </View>
  );
};

const styles = StyleSheet.create({

  body: {
    flex:1
  },
});

export default App;
