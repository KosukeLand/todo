/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  AsyncStorage,
} from 'react-native';



export default class App extends Component<Props> {
  state = {
    date: '',
    newTodo: '',
    todos: [],
  }

  constructor(props){
    super(props);
    this.loadTodos();
  }
  onChangeDate(date){
    this.setState({date});
  }
  onChangeText(newTodo){
    this.setState({newTodo});
  }
  onPressAdd(){
    /* const {newTodo} = this.state.newTodo; */
    const newTodo = this.state.newTodo;
    const date = this.state.date;
    if(newTodo !== "" && date !== ""){
    this.setState({
      date: '',
      newTodo: '',
      todos:[date+":  "+newTodo, ...this.state.todos],
    },() => this.storeTodos())
    }
  }
  onPressDelete(index){
    this.setState({
      todos: this.state.todos.filter((t, i) => i !== index),
      },() => this.storeTodos())
  }
  onPressAllDelete(){
     this.setState({
       todos: [],
     },() => this.storeTodos())
  }
  storeTodos(){
    const str = JSON.stringify(this.state.todos);
    AsyncStorage.setItem('todos',str);
  }
  loadTodos(){
    AsyncStorage.getItem('todos').then((str)=>{
      const todos = str ? JSON.parse(str):[];
      this.setState({todos});
    });
  }


  render() {
    return (
      <View style={styles.container}>

        <View style={styles.title}>
          <Text style={styles.titleText}>Date:</Text>
          <TextInput
            value={this.state.date}
            style={styles.textForm}
            onChangeText={date => this.onChangeDate(date)}
            />
        </View>

        <View style={styles.title}>
          <Text style={styles.titleText}>Todo:</Text>
          <TextInput
            value={this.state.newTodo}
            style={styles.textForm}
            onChangeText={text => this.onChangeText(text)}
            />
        </View>

        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => this.onPressAdd()}
          >
          <Text style={styles.addButtonText}>ADD</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => this.onPressAllDelete()}
          >
          <Text style={styles.addButtonText}>ALL Delete</Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.scrollView}>
         {
          this.state.todos.map((todo,index) => (
            <View key={todo+index} style={styles.todoContainer}>
              <Text>{todo}</Text>
              <TouchableOpacity
                onPress = {() => this.onPressDelete(index)}
              >
              <Text>Delete</Text>
              </TouchableOpacity>
            </View>
           ))
          }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  title:{
    flexDirection: 'row',
    padding:5,
  },
  titleText:{
    fontSize: 15,
  },
  textForm:{
    flex:1,
    backgroundColor: '#EEE',
    padding: 5,
  },
  buttons:{
    flexDirection: 'row',
  },
  addButton:{
    flex:1,
    backgroundColor: '#333',
    padding: 14,
    borderRadius:10,
    marginTop:10,
  },
  addButtonText:{
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  scrollView:{
   backgroundColor: '#DDD',
  },
  todoContainer:{
   backgroundColor: '#FFF',
   padding: 10,
   flexDirection: 'row',
   justifyContent: 'space-between',
  },
});
