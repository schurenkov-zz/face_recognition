import React, { FC, useState } from 'react';
import cn from 'classnames';
import IProps from './type';
import { IPersonTimeSpans } from '../App/type';

const Faces: FC<IProps> = ({ persons, handlerShowMarks }) => {
  const [active, useActive] = useState<number | null>(null);
  const handlerClick = ({ TimeSpans, PersonIndex }: IPersonTimeSpans) => {
    handlerShowMarks(TimeSpans);
    useActive(PersonIndex);
  };
  return (
    <div className="wrap__panel-faces">
      {persons ? (
        persons.map(p => (
          <div key={p.PersonIndex} onClick={() => handlerClick(p)}>
            <img
              src={window['faceImageUrlPrefix'] + [p.PersonIndex]}
              alt=""
              className={cn({ 'wrap__panel-faces_active': active === p.PersonIndex })}
            />
            <p>{p.PersonIndex}</p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Faces;
