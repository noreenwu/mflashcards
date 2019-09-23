// import { AsyncStorage } from '@react-native-community/async-storage';
import { AsyncStorage } from 'react-native'


const DECKS_STORAGE_KEY = 'Flashcards:decks';

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




// export function submitEntry ({ entry, key }) {
//   return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
//     [key]: entry
//   }), () => {
//     AsyncStorage.getItem(DECKS_STORAGE_KEY, (err, result) => {
//       console.log(result)
//     });
//   })
// }

// export function removeEntry (key) {
//   return AsyncStorage.getItem(DECKS_STORAGE_KEY)
//     .then((results) => {
//       const data = JSON.parse(results)
//       data[key] = undefined
//       delete data[key]
//       AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data))
//     })
// }

// export function removeEntry (key) {
//   return AsyncStorage.getItem(DECKS_STORAGE_KEY)
//     .then((results) => {
//       const data = JSON.parse(results)
//       data[key] = undefined
//       delete data[key]
//       AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data), () => {
//         AsyncStorage.getItem(DECKS_STORAGE_KEY, (err, result) => {
//           console.log(result)
//       })
//     })
// })}



export function getDecks() {
  console.log("getDecks")
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(results => JSON.parse(results))
}

export function _getDeck(id) {

  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results)
      console.log("AsyncStorage.getItem", data[id])
      return data[id]
    })

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




export function initDecks() {
    console.log("initDecks")
    return AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks), () => {
      AsyncStorage.getItem(DECKS_STORAGE_KEY)
        .then(results => JSON.stringify(results))
        .then(results => console.log("results of initDecks", results))
      });
}
