import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ChartBar from './components/vitory/ChartBar'
//import ChartBar from './components/chartjs/ChartBar'
//import ChartBar from './components/pathjs/ChartBar'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <ChartBar />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
