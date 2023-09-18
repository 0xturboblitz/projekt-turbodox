[View code on GitHub](https://github.com/LaGuerrePiece/moonolith/blob/master/src/assets/sounds.js)

This code is responsible for managing the audio functionality in the Moonolith project. It handles the playing, pausing, and muting of two specific audio files, `theEndOfTheWorld.mp3` and `rumble.mp3`, as well as any other audio file specified by name.

The `toggleMute` function switches the mute state. If the audio is currently muted, it will play the music; if not, it will pause both the music and the rumble sound.

The `playSound` function plays a specified sound, but only if the system is not muted and a certain time limit has passed since the last sound was played. This prevents rapid, overlapping sound playback.

The `toggleMusic` function switches the music between playing and paused states, while `playMusic` simply plays the music.

The `stopSound` function pauses a specified sound.

The `toggleRumble` function switches the rumble sound between playing and fading out, unless the system is muted. The fading out is handled by the `fadeAudio` function, which gradually reduces the volume of the sound over a period of 5 seconds before pausing it.

Here's an example of how to use these functions:

```javascript
import { toggleMute, playSound, stopSound } from './audioManager';

// Mute or unmute all sounds
toggleMute();

// Play a sound named 'explosion', but only if at least 1000ms have passed since the last sound was played
playSound('explosion', 1000);

// Stop the 'explosion' sound
stopSound('explosion');
```

This audio management functionality could be used in a variety of ways within the Moonolith project, such as providing background music, sound effects for user actions, or auditory feedback for system events.
