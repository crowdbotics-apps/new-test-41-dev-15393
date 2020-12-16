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

  state = {
    Switch_5: true,
    DateTimePicker_17: new Date(""),
    CheckBox_18: true,
    CheckBox_19: true
  }

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
      <View style={styles.View_13}>
        <View />
        <View />
      </View>
      <Button title="Press me!" onPress={() => alert("Pressed!")} />
      <Button title="Press me!" onPress={() => alert("Pressed!")} />
      <DateTimePicker
        showIcon={false}
        date={this.state.DateTimePicker_17}
        onDateChange={selectedDate =>
          this.setState({ DateTimePicker_17: selectedDate })
        }
      />
      <CheckBox
        title="Radio button"
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        checked={this.state.CheckBox_18}
        onPress={nextChecked => this.setState({ CheckBox_18: nextChecked })}
      />
      <CheckBox
        title="Checkbox"
        checked={this.state.CheckBox_19}
        onPress={nextChecked => this.setState({ CheckBox_19: nextChecked })}
      />
      <Slider value={50} minimumValue={0} maximumValue={100} disabled={true} />
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {},
  Image_3: {},
  Switch_5: { alignSelf: "flex-start" },
  View_9: { width: 400, flexDirection: "row" },
  View_10: { width: 69 },
  View_11: { width: 51 },
  View_13: { flexDirection: "row" },
  View_14: {},
  View_15: {},
  Button_12: {},
  Button_16: {},
  DateTimePicker_17: {},
  CheckBox_18: {},
  CheckBox_19: {},
  Slider_20: {}
})
