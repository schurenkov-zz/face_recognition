import React, { FC, useEffect, useRef, useState } from 'react';
import IProps from './type';

const Video: FC<IProps> = ({ personsUrl: { Timestamps, FrameStep }, marks }) => {
  const refVideo = useRef(null);
  const refProgressBar = useRef(null);
  const refVideoContainer = useRef(null);
  const timerInterval = useRef(null);
  const [timer, useTimer] = useState<number>(0);

  useEffect(() => {
    const video = refVideo.current;

    video.addEventListener('playing', findTimestampKey);
    video.addEventListener('pause', () => clearInterval(timerInterval.current));
    video.addEventListener('timeupdate', updateProgress);
    video.addEventListener('loadedmetadata', loadVideo);

    return () => {
      video.removeEventListener('playing', findTimestampKey);
      video.removeEventListener('pause', () => clearInterval(timerInterval.current));
      video.removeEventListener('timeupdate', updateProgress);
      video.removeEventListener('loadedmetadata', loadVideo);
    };
  }, [Timestamps]);

  const findTimestampKey = () => {
    clearInterval(timerInterval.current);
    const interval = setInterval(() => {
      const TimestampKey: number = Math.floor((refVideo.current.currentTime * 1000) / FrameStep) * FrameStep;
      if (Object.keys(Timestamps).findIndex(element => Number(element) === TimestampKey)) {
        startSquare(TimestampKey);
        clearInterval(interval);
      }
    }, FrameStep);
  };

  const startSquare = (time: number) => {
    useTimer(time);

    timerInterval.current = setInterval(() => {
      useTimer(prev => prev + FrameStep);
    }, FrameStep);
  };

  const loadVideo = (event: { target: { duration: string } }) => {
    refProgressBar.current.setAttribute('max', event.target.duration);
  };

  const updateProgress = () => {
    refProgressBar.current.value = Math.floor(refVideo.current.currentTime);
  };

  const handlerProgress = event => {
    refVideo.current.currentTime = (event.pageX * event.target.max) / event.target.offsetWidth;
    clearInterval(timerInterval.current);

    useTimer(Math.floor((refVideo.current.currentTime * 1000) / FrameStep) * FrameStep);
  };

  const handlerMarkerClick = (time: number) => {
    refVideo.current.currentTime = time / 1000;
    clearInterval(timerInterval.current);
    useTimer(Math.floor(time / FrameStep) * FrameStep);
  };

  const styles = (
    { Height, Width, Left, Top, X, Y }: any,
    style?: { borderColor?: string; width?: number; height?: number; background?: string; borderRadius?: string }
  ) => {
    const video = refVideo.current;

    const allStyle: any = { ...style };

    if (Height) {
      allStyle.height = Height * video.clientHeight;
    }

    if (Width) {
      allStyle.width = Width * video.clientWidth;
    }

    if (Left) {
      allStyle.left = Left * video.clientWidth;
    }

    if (Top) {
      allStyle.top = Top * video.clientHeight;
    }

    if (X) {
      allStyle.left = X * video.clientWidth;
    }

    if (Y) {
      allStyle.top = Y * video.clientHeight;
    }

    return allStyle;
  };

  const markStyle = (time: number) => {
    const progressBar = refProgressBar.current;
    const second = marks.findIndex(f => f === time);

    const left = (time / 1000 / progressBar.max) * progressBar.offsetWidth;
    const width = ((time + marks[second + 1]) / 1000 / progressBar.max) * progressBar.offsetWidth - left;

    return {
      left,
      width,
    };
  };

  return (
    <div className="wrap__video">
      <div ref={refVideoContainer} className="wrap__video-container">
        <video ref={refVideo} src={window.videoURL} controls={true} />
        {Timestamps &&
          Timestamps[timer] &&
          Timestamps[timer].map(({ BoundingBox, Face, Index }, i) => (
            <div key={Index}>
              {BoundingBox && (
                <div className="wrap__video-square" style={styles(BoundingBox, { borderColor: '#51d2d3' })} />
              )}
              {Face && (
                <>
                  <div className="wrap__video-square" style={styles(Face.BoundingBox, { borderColor: 'red' })} />
                  {Face.Landmarks &&
                    Face.Landmarks.map(l => (
                      <div
                        key={l.Type.Value}
                        className="wrap__video-square"
                        style={styles(l, { width: 2, height: 2, background: '#51d2d3', borderRadius: '50%' })}
                      />
                    ))}
                </>
              )}
              {Index !== null && (
                <div className="wrap__video-persons" style={{ top: `${15 * i}px` }}>
                  <p>Person: {Index}</p>
                </div>
              )}
            </div>
          ))}
      </div>
      <div className="wrap__video-controls">
        <progress ref={refProgressBar} value="0" onClick={handlerProgress} />
        {marks.length > 0 &&
          marks
            .filter((f, i) => i % 2 === 0)
            .map((time, i) => (
              <div
                key={i}
                className="wrap__video-controls-mark"
                style={markStyle(time)}
                onClick={() => handlerMarkerClick(time)}
              />
            ))}
      </div>
    </div>
  );
};

export default Video;
