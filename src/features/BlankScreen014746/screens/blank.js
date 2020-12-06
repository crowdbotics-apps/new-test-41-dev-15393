import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = { Switch_5: true }

  render = () => (
    <View>
      <Image
        source={{
          uri:
            "https://crowdbotics-slack-dev.s3.amazonaws.com/media/project_component_resources/1391201524_yTU6ZB42AjY_wkdyktl.jpg"
        }}
      />
      <Switch
        trackColor={{ true: "#409EFF", false: "#C0CCDA" }}
        style={styles.Switch_5}
        value={this.state.Switch_5}
        onValueChange={nextChecked => this.setState({ Switch_5: nextChecked })}
      />
      <View style={styles.View_9}>
        <View style={styles.View_10} />
        <View style={styles.View_11} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {},
  Image_3: {},
  Switch_5: { alignSelf: "flex-start" },
  View_9: { width: 400, flexDirection: "row" },
  View_10: { width: 69 },
  View_11: { width: 51 }
})
