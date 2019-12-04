import React, { FC, useState } from 'react';
import Faces from '../Faces';
import Labels from '../Labels';
import cn from 'classnames';
import IProps from './type';

const Panel: FC<IProps> = ({ persons, handlerShowMarks }) => {
  const [active, useActive] = useState<number>(1);

  return (
    <div className="wrap__panel">
      <div className="wrap__panel-header">
        <div className={cn({ 'wrap__panel-header_active': active === 0 })} onClick={() => useActive(0)}>
          <p>Faces</p>
        </div>
        <div className={cn({ 'wrap__panel-header_active': active === 1 })} onClick={() => useActive(1)}>
          <p>Labels</p>
        </div>
      </div>
      <div className="wrap__panel-lists">
        {active === 0 ? (
          <Faces persons={persons} handlerShowMarks={handlerShowMarks} />
        ) : (
          <Labels handlerShowMarks={handlerShowMarks} />
        )}
      </div>
    </div>
  );
};

export default Panel;
