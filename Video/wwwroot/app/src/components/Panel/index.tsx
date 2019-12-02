import React, {FC, useState} from "react";
import Faces from "../Faces";
import Labels from "../Labels";
import cn from 'classnames';

const Panel: FC<{}> = () => {
    const [active, useActive] = useState(1);

    return (
        <div className="wrap__panel">
            <div className="wrap__panel-header">
                <div className={cn({'wrap__panel-active': active === 0})}  onClick={() => useActive(0)}>
                    <p>Faces</p>
                </div>
                <div className={cn({'wrap__panel-active': active === 1})} onClick={() => useActive(1)}>
                    <p>Labels</p>
                </div>
            </div>
            <div className="wrap__panel-lists">
                {active === 0 ? <Faces /> : <Labels/>}
            </div>
        </div>
    )
}

export default Panel;
