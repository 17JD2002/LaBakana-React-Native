import React from "react";
import { Image, SafeAreaView, Pressable, Text ,View} from "react-native";
import { Video } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 


const HomeScreen = () => {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    return (
        <SafeAreaView style={{ justifyContent: 'center' }}>
            <Image
                resizeMode="contain"
                style={{ width: 120, height: 151, marginTop: "20%", alignSelf: 'center' }}
                source={{ uri: "http://emisorabakana.com/wp-content/uploads/2021/11/la-bakana.png" }}
            />
            <Video
                style={{display:"none"}}
                ref={video}
                source={{
                    uri: 'http://109.169.23.17:8001/stream',
                }}
                useNativeControls
                resizeMode="contain"
                isLooping
                onPlaybackStatusUpdate={status => setStatus(() => status)}
            />
            <View style={{marginTop:300}}>
                <Text style={{color:"#ed47d4",textAlign:"center",fontSize:40}}>{status.isPlaying ? "¡PAUSAR!":"¡DALE PLAY!"}</Text>
            <Pressable style={{marginTop:10,width:100,height:100,backgroundColor:"#444444",justifyContent:"center", alignSelf: 'center',borderRadius:50}}
            onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
            }>
                {status.isPlaying ? <AntDesign name="pause" size={50} color="white" style={{alignSelf:"center"}}/> 
                : <Ionicons name="play-skip-forward-outline" size={50} color="white" style={{alignSelf:"center"}}/>}   
            </Pressable>
            </View>
            
        </SafeAreaView>
    );
}
export default HomeScreen;

/* <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        /> */