import React, {useEffect} from 'react';

import './style.scss';

declare global {
    interface Window {
        onYouTubeIframeAPIReady: any;
        YT: any;
    }
}

interface iProps {
    videoId: string;
}

const Player: React.FC<iProps> = ({videoId}) => {
    useEffect(() => {
        let player: any = null;
        if (videoId) {
            player = new window.YT.Player('player', {
                height: '100%',
                width: '100%',
                videoId,
                events: {
                    onReady: (e: any) => e.target.playVideo(),
                },
            });

            return () => {
                if (player) {
                    player.destroy();
                }
            };
        }
    }, [videoId]);

    return (
        <div id="player" className="player">
            Enter a name of video...
        </div>
    );
};

export default Player;
