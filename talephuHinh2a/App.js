import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { useState ,useEffect } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState({username:"",password:""})

  const handleUserNameChange = (text) => {
    setUsername(text);
  };

  const handlePassWordChange = (text) => {
    setPassword(text);
  };

  const handleLogin = ()=>{
    if(username && password){
      setData({username,password});
    }else{
      alert("Vui lòng nhập tên người dùng và mật khẩu");
    };    
  }

  useEffect(() => {
    console.log(data); 
  }, [data]);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#FBCB00", "#BF9A00"]}
        locations={[0, 0.85, 1]}
        style={{ flex: 1 }}
      >
        <View style={styles.view1}>
          <Text style={styles.textView1}>LOGIN</Text>
        </View>

        <View style={styles.view2}>
          <View style={styles.view2Input}>
            <View style={styles.view1Input}>
              <Image
                source={{
                  uri: "https://cdn.pixabay.com/photo/2016/04/01/10/11/avatar-1299805_640.png",
                }}
                style={{ marginLeft: 5, width: 30, height: 40 }}
              ></Image>
              <TextInput
                style={styles.input1}
                placeholder="Name"
                value={username}
                onChangeText={handleUserNameChange}
              />
            </View>

            <View style={styles.viewInput2}>
              <Image
                source={{
                  uri: "https://cdn.pixabay.com/photo/2023/06/05/09/12/security-8041759_640.png",
                }}
                style={{ marginLeft: 5, width: 30, height: 43 }}
              ></Image>
              <TextInput
                style={styles.input2}
                placeholder="Password"
                value={password}
                secureTextEntry={true}
                onChangeText={handlePassWordChange}
              />

              <TouchableOpacity style={{ marginRight: 10 }}>
                <FontAwesome name="eye" size={40} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.view3}>
          <TouchableOpacity style={styles.touch} onPress={handleLogin}>
            <View style={styles.viewTouch}>
              <Text style={styles.textTouch}>LOGIN</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.view4}>
          <TouchableOpacity>
            <Text style={{ fontWeight: "bold", fontSize: 15, color: "black" }}>
              FORGOT YOUR PASSWORD
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E0FFFF",
  },
  view1: {
    flex: 4,
    justifyContent: "flex-end",
  },
  view2: {
    flex: 3,
    flexDirection: "column",
    justifyContent: "space-around",
    marginTop: 50,
  },
  view3: {
    flex: 3,
    flexDirection: "column",
    alignItems: "center",
  },
  view4: {
    flex: 3,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "flex-start",
    marginBottom: 60,
    marginTop: 20,
  },
  textView1: {
    fontWeight: "bold",
    fontSize: 40,
  },
  view2Input: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input1: {
    width: 320,
    height: 50,
    marginLeft: 10,
  },
  view1Input: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E5DB53",
    width: 320,
    height: 50,
    borderWidth: 1,
    borderColor: "white",
  },
  input2: {
    marginLeft: 10,
    width: 270,
    height: 50,
  },
  viewInput2: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E5DB53",
    width: 320,
    height: 50,
    borderWidth: 1,
    borderColor: "white",
  },
  touch: {
    marginTop: 80,
    width: 320,
    height: 45,
    backgroundColor: "black",
    borderRadius: 5,
  },
  viewTouch: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textTouch: {
    fontWeight: "bold",
    color: "white",
  },
});
