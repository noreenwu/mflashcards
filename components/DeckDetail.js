import React, { Component } from 'react'
import { Text, View, Button, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { cardOrCards } from '../utils/helpers'
import PropTypes from 'prop-types'
import CardsInDeck from './CardsInDeck'

class DeckDetail extends Component {

  deleteThisDeck(deleteFxn, deckName, navFxn) {

    deleteFxn(deckName)

    navFxn('AllDecks')    // navigate back to main screen

  }

  render() {
    const { navigation } = this.props   // used for Delete Deck
    const { params } = this.props.navigation.state;

    const { deck } = params
    const numCards = deck.questions.length
    // const cardPlur = cardOrCards(deck.questions.length)

    return (
        <View>
           <Text style={styles.subtitleMedium}>{deck.title}</Text>
           <CardsInDeck numQuestions={numCards}/>

           <TouchableOpacity
              style={styles.button}
              title="Add Card"
              onPress={() => this.props.navigation.navigate('NewCard',
                                                              { deck: deck,
                                                               updateDeck: params.updateDeck,
                                                               deleteDeck: params.deleteDeck })}
            >
            <Text style={styles.buttonText}>Add Card to {deck.title} Deck</Text>
           </TouchableOpacity>

           <TouchableOpacity
             style={styles.button}
             title="Quiz Me"
             onPress={() => this.props.navigation.navigate('Quiz',
                                                          { deck: deck,
                                                            deleteDeck: params.deleteDeck })}

           >
           <Text style={styles.buttonText}>Quiz Me on {deck.title}</Text>
           </TouchableOpacity>

           <TouchableOpacity
              style={styles.button}
              title="Delete Deck"
              onPress={() => { this.deleteThisDeck(params.deleteDeck, deck.title, navigation.navigate)
              }}
           >
           <Text style={styles.buttonText}>Delete the {deck.title} Deck</Text>
           </TouchableOpacity>

        </View>

    );
  }
}

// DeckDetail.propTypes = {
//   name: PropTypes.name.isRequired,
// }

export default DeckDetail
