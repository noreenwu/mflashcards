
import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native';
import DeckListItem from './DeckListItem'
import { initDecks, getDecks } from '../utils/api'
import { saveDeckTitle, saveDeck, getDeck, saveCardToDeck, deleteDeck, setLocalNotification } from '../utils/helpers'
import { styles } from './styles'

class AllDecks extends Component {

   componentDidMount() {
    setLocalNotification()

    initDecks()                // to test AsyncStorage persistence, change initDecks to getDecks and reload the app
      .then(getDecks()
        .then((decks) => {
          this.setState(() => ({
            decks
          }))
      }
    ))}

  state = {
    decks: {}                 // initial state

  }

  deleteDeck(title) {
     console.log("AllDecks: deleteDeck", title )
     if (title) {
        // delete deck from AsyncStorage
        deleteDeck(title)
          .then((res) => {
              console.log("deleted the deck from Storage")
          })


        // delete deck from this component's state
        let decksCopy = Object.assign(this.state.decks, {})

        delete decksCopy[title]

        this.setState({ decks: decksCopy })

     }
  }


  createNewDeck(title){
    // This is used to add a new deck. This component maintains state for all decks.

        if (title) {
          let newDeck = saveDeckTitle(title)        // helper function

          // update this component's state
          let origDecks = this.state.decks

          let mergedDecks = Object.assign(origDecks, newDeck)

          this.setState({ decks: mergedDecks })
         }
    }



  updateDeck(deck) {
    // This is used to make changes to decks, i.e. to add a new card or question to a deck.

      if (! deck) {
          console.log("updateDeck: no data ")
          return
      }


      let formattedDeck = saveDeck(deck)     // calls fxn in helpers
      let origDecks = this.state.decks

      let mergedDecks = Object.assign(origDecks, formattedDeck)

      this.setState({ decks: mergedDecks })

  }

  render() {
        const deckNames = Object.keys(this.state.decks)
        const deckValues = Object.values(this.state.decks)

        console.log("AllDecks state ", this.state)
        if (deckValues.length === 0) {
          return (
            <View>
               <Text style={styles.titleLarge}>Flashcards!</Text>
               <Text style={styles.center}>There aren't any decks. Create one!</Text>
               <TouchableOpacity
                 style={styles.button}
                 title="New Deck"
                 onPress={() => this.props.navigation.navigate('NewDeck',
                                                              { deleteDeck: this.deleteDeck.bind(this),
                                                                updateDeck: this.updateDeck.bind(this),
                                                                createNewDeck: this.createNewDeck.bind(this) })}
               ><Text style={styles.buttonText}>New Deck</Text>
               </TouchableOpacity>
            </View>
          )
        }
        return (
            <View style={styles.container}>

                  <Text style={styles.titleLarge}>Flashcards!</Text>
                      <View>
                      { deckValues.map(val => (

                        <DeckListItem
                            key={val.title}
                            name={val.title}
                            deck={this.state.decks[`${val.title}`]}
                            deleteDeck={this.deleteDeck.bind(this)}
                            updateDeck={this.updateDeck.bind(this)}
                            navigate={this.props.navigation.navigate}
                        />

                      ))
                      }
                  </View>
                  <TouchableOpacity
                    style={styles.button}
                    title="New Deck"
                    onPress={() => this.props.navigation.navigate('NewDeck',
                                                                 { deleteDeck: this.deleteDeck.bind(this),
                                                                   updateDeck: this.updateDeck.bind(this),
                                                                   createNewDeck: this.createNewDeck.bind(this) })}
                  ><Text style={styles.buttonText}>New Deck</Text></TouchableOpacity>

            </View>
    )
  }
}



export default AllDecks
