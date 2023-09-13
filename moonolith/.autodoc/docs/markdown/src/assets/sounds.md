[View code on GitHub](https://github.com/LaGuerrePiece/moonolith/src/assets/sounds.js)

The code provided is a module that handles audio playback for the Moonolith project. It includes functions for toggling mute, playing sounds, toggling music, playing music, stopping sounds, and toggling rumble. 

The code begins by creating two instances of the `Audio` class, `music` and `rumble`, which are assigned to the respective audio files "/audio/theEndOfTheWorld.mp3" and "/audio/rumble.mp3". The `music` audio is set to loop continuously using the `loop` property.

The module also defines two variables, `muteState` and `lastPlayedSound`, which are used to keep track of the mute state and the last time a sound was played, respectively. Both variables are initially set to `false` and the current timestamp.

The `toggleMute` function is exported and allows the user to toggle the mute state. If `muteState` is `true`, it plays the `music` audio and sets `muteState` to `false`. Otherwise, it pauses both the `music` and `rumble` audio and sets `muteState` to `true`.

The `playSound` function is also exported and is used to play a sound. It takes two parameters, `name` and `limit`. If `muteState` is `true`, the function returns early and does not play the sound. If the difference between the current timestamp and `lastPlayedSound` is less than `limit`, the function also returns early and does not play the sound. Otherwise, it creates a new instance of the `Audio` class with the provided `name` and plays the audio. Finally, it updates `lastPlayedSound` to the current timestamp.

The `toggleMusic` function is exported and toggles the playback of the `music` audio. If the `music` audio is paused, it plays it. Otherwise, it pauses it.

The `playMusic` function is exported and simply plays the `music` audio.

The `stopSound` function is exported and stops the playback of a sound. It takes a `name` parameter, creates a new instance of the `Audio` class with the provided `name`, and pauses the audio.

The `toggleRumble` function is exported and toggles the playback of the `rumble` audio. If `muteState` is `true`, the function returns early and does not play the audio. If the `rumble` audio is paused, it plays it. Otherwise, it calls the `fadeAudio` function.

The `fadeAudio` function is a helper function that gradually reduces the volume of an audio until it reaches 0. It takes an `audio` parameter and sets an interval that runs every 200 milliseconds. Within the interval, it checks if the current time of the audio is within 5 seconds of the end and if the volume is not already 0. If so, it reduces the volume by 0.1. If the volume becomes less than 0.003, it sets the volume to 0, clears the interval, and pauses the audio.

Overall, this module provides a set of functions to control audio playback in the Moonolith project, including playing sounds, music, and rumble, toggling mute, and stopping sounds.
## Questions: 
 1. What is the purpose of the `toggleMute` function?
- The `toggleMute` function is responsible for toggling the mute state of the audio. If the `muteState` is true, it will play the music and set `muteState` to false. Otherwise, it will pause the music and rumble and set `muteState` to true.

2. What does the `playSound` function do?
- The `playSound` function plays a sound with the given name if the `muteState` is false and if the time since the last played sound plus the limit is greater than the current time. It sets the `lastPlayedSound` to the current time after playing the sound.

3. What is the purpose of the `fadeAudio` function?
- The `fadeAudio` function gradually reduces the volume of the given sound until it reaches 0. It uses an interval to continuously check the current time of the sound and reduce the volume by 0.1 until it reaches a very low value. Once the volume is close to 0, it sets the volume to 0, clears the interval, and pauses the sound.