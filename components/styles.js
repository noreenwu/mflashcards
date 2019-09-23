import { StyleSheet } from 'react-native'

export const blue = '#1d51a2'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',

  },
  titleLarge: {
    color: blue,
    fontWeight: 'bold',
    fontSize: 40,
    marginLeft: 20,
    marginTop: 15,
    textAlign: 'center'
  },
  subtitleMedium: {
    color: blue,
    fontWeight: 'bold',
    fontSize: 20,
    margin: 20,
    textAlign: 'center'
  },
  subtitleMediumPartialTop: {
    color: blue,
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 5,
    textAlign: 'center'
  },
  subtitleMediumPartialBottom: {
    color: blue,
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 0,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    textAlign: 'center'
  },
  listItem: {
    marginTop: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: '#cbd2d9',
    borderBottomColor: '#cbd2d9'
  },
  clickable: {
    color: blue,
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10
  },
  questionAnswer: {
    color: blue,
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 18,
    margin: 20,
    textAlign: 'center'
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    textAlign: 'center'
  },
  center: {
    textAlign: 'center',
    margin: 20
  },
  centerNoMargin: {
    textAlign: 'center',
  },
  centerBottomMargin: {
    textAlign: 'center',
    marginBottom: 10
  },
  button: {
    alignItems: 'center',
    backgroundColor: blue,
    margin: 10,
    padding: 10,
    opacity: 10,
    borderRadius: 15
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  },
  smallButton: {
    alignItems: 'center',
    margin: 10,
    padding: 10,
    width: 120,
    borderRadius: 15,
    alignSelf: 'center'
  }
})
