import React, { Component } from 'react'
import { Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import { styles } from './styles'

class NewCard extends Component {

  submit(updateFxn, deleteFxn, deck, navFxn, navigateAway=true) {
    // add card to deck
    if ( (! this.state.question ) || (! this.state.answer) ) {
        return
    }

     const card = { question: this.state.question, answer: this.state.answer }
     // put the card in the deck
     deck.questions.push(card)

     updateFxn(deck)


    // clear the state
    this.clearFields()

    if (navigateAway) {
      //navigate to DeckDetail
      navFxn('DeckDetail',
                  { deleteDeck: deleteFxn,
                    updateDeck: updateFxn,
                    deck: deck })

    }
  }

  clearFields() {
      const question = ''
      const answer = ''

      this.setState({
          question: question,
          answer: answer
      })
  }

  state = {
    question: '',
    answer: ''
  }

  render() {
    const { params } = this.props.navigation.state;

    const { deck, deleteDeck, updateDeck } = params

    return (
        <View>
           <Text style={styles.subtitleMediumPartialTop}>Add a new card to the</Text>
           <Text style={styles.subtitleMediumPartialBottom}> {deck.title} Deck</Text>

           <TextInput
             style={styles.textInput}
             placeholder="Enter your question here"
             onChangeText={(text) => this.setState({ question: text})}
             value={this.state.question}
           />
           <TextInput
             style={styles.textInput}
             placeholder="Enter your answer here"
             onChangeText={(text) => this.setState({ answer: text})}
             value={this.state.answer}
           />
           <TouchableOpacity
              style={styles.button}
              title="Submit"
              onPress={() => this.submit(params.updateDeck, params.deleteDeck, deck, this.props.navigation.navigate, true) }
            ><Text style={styles.buttonText}>Submit</Text>
           </TouchableOpacity>



        </View>

    );
  }
}


export default NewCard
