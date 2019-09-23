
import React, { Component } from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'
import { ListItem } from 'react-native-elements'
import PropTypes from 'prop-types'
import { cardOrCards } from '../utils/helpers'
import { Feather } from '@expo/vector-icons'
import { styles } from './styles'

class DeckListItem extends Component {


  render() {

    const { name, deck, deleteDeck, updateDeck } = this.props

    return (
        <View>

            <ListItem style={styles.listItem}
               key={name}
               title={name}
               subtitle={`${deck.questions.length} ${cardOrCards(deck.questions.length)}`}
               leftIcon={{ name: 'layers', color: '#1d51a2'}}
               onPress={() => this.props.navigate('DeckDetail',
                                                   { deleteDeck: this.props.deleteDeck,
                                                     updateDeck: this.props.updateDeck,
                                                     deck: this.props.deck }
                                                   )}
            />

        </View>

    );
  }
}

DeckListItem.propTypes = {
  deck: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  deleteDeck: PropTypes.func.isRequired,
  updateDeck: PropTypes.func.isRequired
}

export default DeckListItem
