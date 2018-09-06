import React, { Component } from "react"
import { StyleSheet, View } from "react-native"
import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native"

const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 }
]

const data2 = [
  { x: 1, y: 2, y0: 1 },
  { x: 2, y: 3, y0: 2 },
  { x: 3, y: 5, y0: 2 },
  { x: 4, y: 4, y0: 3 },
  { x: 5, y: 6, y0: 3 }
]

export default class ChartBar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <VictoryChart width={350} theme={VictoryTheme.material}>
          <VictoryBar
            alignment="start"
            data={data}
            x="quarter"
            y="earnings"
            style={{ labels: { fill: "green" } }}
          />
        </VictoryChart>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5fcff"
  }
})
