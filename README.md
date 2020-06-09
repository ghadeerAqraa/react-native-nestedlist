# react-native-nestedlist
UI component for React Native to create list and sublist views.

#config
Edit ```android/app/build.gradle``` and add the following:

```apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"```


# Usage

npm i react-native-nestedlist

import NestedList from 'react-native-nestedlist'
```
const data = [{title:'Topic 1' , items :[{"sub_topic_id":1,"sub_topic_name":"Subtopic 1","is_selected":false},{"sub_topic_id":2,"sub_topic_name":"Subtopic 2","is_selected":false},{"sub_topic_id":3,"sub_topic_name":"Subtopic 3","is_selected":false}],opened:false},
{title:'Topic 2' , items :[{"sub_topic_id":1,"sub_topic_name":"Subtopic 1","is_selected":false},{"sub_topic_id":2,"sub_topic_name":"Subtopic 2","is_selected":false},{"sub_topic_id":3,"sub_topic_name":"Subtopic 3","is_selected":false}],opened:false}]
```
```
<NestedList
            topicsData={topicsData} 
            setTopic={setTopic}
            setSubTopic={setSubTopic}
            >
</NestedList>
```

# Props

* data : Array of nested itesms

* setTopic : open/close topic items

* setSubTopic : check/uncheck suptopic items for each topic

* select/deselect all subtopics 

* topic title style 

* subTopic title style

* select/deseletc button title style
