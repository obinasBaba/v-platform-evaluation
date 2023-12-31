import { useEffect, useRef } from 'react';
import Plyr from 'plyr';
import 'plyr/dist/plyr.css';
import VideoThumbnail from '@/public/assets/video-default.jpeg';

interface IVVersePlayer {
  classname?: string;
  src?: string;
  poster?: string;
}

function VVersePlayer({ classname, src, poster }: IVVersePlayer) {
  const playerRef = useRef<any>(null);

  useEffect(() => {
    const player = new Plyr(playerRef.current, {
      controls: [
        'play-large',
        'play',
        'progress',
        'current-time',
        'mute',
        'volume',
        'fullscreen',
      ],
    });

    console.log('player : ', player);

    if (!player) {
      return;
    }

    // You can customize the controls further if needed
    // player.toggleControls(false); // Hide controls initially
    player.on('play', () => {
      console.log('on play ----');

      player.toggleControls(true);
    }); // Show controls when playing

    return () => {
      if (player) {
        // player();
      }
    };
  }, []);

  return (
    <div className={`${classname}`}>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video
        ref={playerRef}
        controls
        width="100%"
        height="100%"
        poster={poster ?? VideoThumbnail.src}
        // crossorigin
        // playsinline
      >
        <source
          src={
            src ??
            'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4'
          }
          type="video/mp4"
          // size="576"
        />
      </video>
    </div>
  );
}

export default VVersePlayer;
