import React, { useEffect, useState } from 'react';
import Video from '../Video';
import Panel from '../Panel';
import './style.scss';
import axios from 'axios';
import { IPersonsUrl } from './type';

const App = () => {
  const [personsUrl, usePersonsUrl] = useState<IPersonsUrl>({ PersonTimeSpans: [], FrameStep: 0, Timestamps: {} });
  const [marks, useMarks] = useState<number[]>([]);
  useEffect(() => {
    axios.get(window['personsUrl']).then(r => {
      usePersonsUrl(r.data);
    });
  }, []);
  return (
    <div className="wrap">
      <Video personsUrl={personsUrl} marks={marks} />
      <Panel persons={personsUrl.PersonTimeSpans} handlerShowMarks={(t: number[]) => useMarks(t)} />
    </div>
  );
};

export default App;
