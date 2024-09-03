import React from "react";
import { TextInput } from "react-native-paper";
import { primaryColor } from "../config/colors";
const Input = (props) => {
  const { label, value, onChange, icon, secureTextEntry, onIconPress } = props;

  return (
    <TextInput
      label={label}
      value={value}
      onChangeText={(text) => onChange(text)}
      mode="outlined"
      textColor="black"
      activeOutlineColor={primaryColor}
      style={{ marginVertical: 5 }}
      right={icon ? <TextInput.Icon icon={icon} onPress={onIconPress} /> : null}
    />
  );
};

export default Input;
