import React from 'react'
import { cardOrCards } from '../utils/helpers'
import { Text } from 'react-native'
import { styles } from './styles'
import PropTypes from 'prop-types'


function CardsInDeck( props ) {
  const { numQuestions } = props
  const cardPlur = cardOrCards(numQuestions)

  return(
     <Text style={styles.center}>This deck contains {numQuestions} {cardPlur}.</Text>
  )
}

CardsInDeck.propTypes = {
  numQuestions: PropTypes.number.isRequired,
}

export default CardsInDeck
