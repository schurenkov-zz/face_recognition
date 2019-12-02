import React, {FC, useEffect, useState} from "react";
import axios from "axios";

const Labels: FC<{}> = () => {
    const [labels, useLabels] = useState([]);
    const [load, useLoad] = useState(true);
    useEffect(() => {
        axios.get(window['labelsUrl']).then(r => {
            useLabels(r.data);
            useLoad(false);
        })
    }, []);

    return (
        <div className="wrap__panel-labels">
            <p className="wrap__panel-title">Detected labels:</p> {!load ? labels.map(l => <p className="wrap__panel-label">{l.Name}</p>) : <p>Loading</p>}
        </div>
    )
};

export default Labels;
