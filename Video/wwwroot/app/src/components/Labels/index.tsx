import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import cn from 'classnames';
import IProps from './type';
import { ILabel } from '../App/type';

const Labels: FC<IProps> = ({ handlerShowMarks }) => {
  const [labels, useLabels] = useState<ILabel[]>([]);
  const [load, useLoad] = useState<boolean>(true);
  const [active, useActive] = useState<null | string>(null);

  useEffect(() => {
    axios.get(window.labelsUrl).then(res => {
      useLabels(res.data);
      useLoad(false);
    });
  }, []);

  const handlerClick = (label: ILabel) => {
    handlerShowMarks(label.TimeSpans);
    useActive(label.Name);
  };

  return (
    <div className="wrap__panel-labels">
      <p className="wrap__panel-labels_text">Detected labels:</p>
      {!load ? (
        labels.map(l => (
          <p
            key={l.Name}
            className={cn('wrap__panel-labels_label', { 'wrap__panel-labels_label-active': active === l.Name })}
            onClick={() => handlerClick(l)}
          >
            {l.Name}
          </p>
        ))
      ) : (
        <p className="wrap__panel-labels_text">Loading...</p>
      )}
    </div>
  );
};

export default Labels;
