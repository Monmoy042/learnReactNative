import React, { useState } from "react";
import CheckBox from "expo-checkbox";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

const Contact = () => {
  // Hook
  const [agree, setAgree] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  //   console.table(userName, password);

  const submit = () => {
    // return alert(userName, password);
    if (userName === "Monmoy" && password === "kms") {
      alert(`Thank you ${userName}`);
    } else {
      alert(`Username and Password are not correct`);
    }
  };
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>Login Here</Text>
      <Text style={styles.description}>
        You can reach us anytime sample@xyz.com
      </Text>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabels}>Enter Your Name</Text>
        <TextInput
          style={styles.inputStyle}
          autoCapitalize="none"
          autoCorrect={false}
          value={userName}
          onChangeText={(actualData) => {
            setUserName(actualData);
          }}
        />
        <Text style={styles.inputLabels}>Enter Your Password</Text>
        <TextInput
          style={styles.inputStyle}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          value={password}
          onChangeText={(actualPassword) => {
            setPassword(actualPassword);
          }}
        />
      </View>
      <View style={styles.wrapper}>
        <View style={styles.wrapperCheckBox}>
          <CheckBox
            value={agree}
            onValueChange={() => {
              setAgree(!agree);
            }}
            color={agree ? "#4630EB" : undefined}
          />
          <Text style={styles.wrapperText}>
            I have read and agreed with the TC
          </Text>
        </View>
        <TouchableOpacity
          style={[
            styles.buttonStyle,
            { backgroundColor: agree ? "#4630EB" : "grey" },
          ]}
          disabled={!agree}
          onPress={() => {
            submit();
          }}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    paddingHorizontal: 30,
    paddingTop: 30,
    backgroundColor: "#fff",
  },
  mainHeader: {
    fontSize: 25,
    color: "#344055",
    fontWeight: "500",
    paddingTop: 20,
    paddingBottom: 15,
  },
  description: {
    fontSize: 20,
    color: "#7d7d7d",
    paddingBottom: 20,
    lineHeight: 25,
    // fontFamily: "sans serif",
  },
  inputContainer: {
    marginTop: 20,
  },
  inputLabels: {
    fontSize: 18,
    color: "7d7d7d7d",
    marginTop: 10,
    marginBottom: 5,
    lineHeight: 25,
    // fontFamily: "sans serif",
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.3)",
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 3,
    // fontFamily: "sans serif",
    fontSize: 18,
  },
  wrapper: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    paddingBottom: 30,
    marginTop: 15,
  },
  wrapperCheckBox: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  wrapperText: {
    // paddingLeft: 30
    marginTop: 0,
    paddingBottom: 15,
  },
  buttonStyle: {
    borderRadius: 2,
    height: 50,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    justifyContent: "center",
    alignContent: "center",
    fontWeight: "600",
  },
});

export default Contact;
