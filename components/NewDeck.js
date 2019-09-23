import React, { Component } from 'react'
import { Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import { styles } from './styles'


class NewDeck extends Component {

  state = {}

  submit(createDeckFxn, navFxn, deleteDeck, updateDeck) {


    if ( Object.keys(this.state).length == 0 ) {
        return
    }
    // use fxn to update AllDecks' state which will also update AsyncStorage
    createDeckFxn(this.state.text)


    const newTitle = this.state.text
    const newDeck = { title: newTitle,
                      questions:[] }

    this.setState( { text: '' })    // this clears the state and field on the screen for Create New Deck
    navFxn('DeckDetail', { deleteDeck: deleteDeck,
                           updateDeck: updateDeck,
                           deck: newDeck } )

  }




  render() {

    const { params} = this.props.navigation.state;
    let createDeckFxn = params.createNewDeck
    let deleteDeck = params.deleteDeck
    let updateDeck = params.updateDeck
    console.log ("NewDeck updateDeck fxn is ", params.updateDeck)

    return (
        <View>
           <Text style={styles.subtitleMedium}>Give your new deck a name: </Text>
           <TextInput
             style={styles.textInput}
             placeholder="Name of your new deck"
             onChangeText={(text) => this.setState({text})}
             value={this.state.text}
           />

           <TouchableOpacity
                   style={styles.button}
                   title='Create New Deck'
                   onPress={() =>{
                     this.submit(createDeckFxn, this.props.navigation.navigate, deleteDeck, updateDeck)
            }} ><Text style={styles.buttonText}>Create New Deck</Text>
            </TouchableOpacity>


        </View>

    );
  }
}


export default NewDeck
