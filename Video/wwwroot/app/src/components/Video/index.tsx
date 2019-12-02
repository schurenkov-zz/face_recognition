import React, {FC, useEffect, useRef} from "react";

const Video: FC<any> = ({personsUrl: {Timestamps, FrameStep}}) => {
    const refVideo = useRef(null);
    const refProgressBar = useRef(null);

    const updateProgress = () => {
        const time = Math.round(refVideo.current.currentTime * 1000);
        if(!refProgressBar.current.getAttribute('max')){
            refProgressBar.current.setAttribute('max', refVideo.current.duration);
        }
        if(Timestamps){
            const test = Object.keys(Timestamps).find((element) => {
                return time <= Number(element) &&  Number(element) >= time + 83;
            })

            if(test){
                console.log(Timestamps[test], test)
            }
        }
        refProgressBar.current.value = Math.floor(refVideo.current.currentTime);
    };

    const initVideo = () => {
        refVideo.current.addEventListener('timeupdate', updateProgress);
    };

    const handlerProgress = (event) => {
        refVideo.current.currentTime = event.pageX * event.target.max / event.target.offsetWidth;
    };

    useEffect(initVideo, [Timestamps]);
    return (
        <div className="wrap__video">
            <video ref={refVideo} src={window['videoURL']} controls/>
            <div className="wrap__video-controls" id="video">
                <progress ref={refProgressBar} value="0" onClick={handlerProgress} />
            </div>
        </div>
    )
};

export default Video;
