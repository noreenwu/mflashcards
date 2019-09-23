import { AsyncStorage } from 'react-native'


const DECKS_STORAGE_KEY = 'Flashcards:decks';

// these are starter decks, so the app loads with some data. 
let decks = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}



export function initDecks() {
    return AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks), () => {
      AsyncStorage.getItem(DECKS_STORAGE_KEY)
        .then(results => JSON.stringify(results))
        .then(results => console.log("results of initDecks", results))
      });
}

export function getDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(results => JSON.parse(results))
}


export function _deleteDeck(deckTitle) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results)
      data[deckTitle] = undefined

      AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data), () => {
        AsyncStorage.getItem(DECKS_STORAGE_KEY, (err, result) => {
          console.log(result)
        })
      })
  })
}


export function _saveDeck(deck) {
  console.log("_saveDeck")

  AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(deck), () => {
    AsyncStorage.getItem(DECKS_STORAGE_KEY, (err, result) => {
      console.log(result);
    });
  });
}
