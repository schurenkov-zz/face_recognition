import React, {useEffect, useState} from "react";
import Video from "../Video";
import Panel from "../Panel";
import './style.scss';
import axios from "axios";

const App = () => {
    const [personsUrl, usePersonsUrl] = useState({});
    useEffect(() => {
        axios.get(window['personsUrl']).then(r => {
            console.log(r.data)
            usePersonsUrl(r.data)
        })
    }, [])
    return (
        <div className="wrap">
            <Video personsUrl={personsUrl} />
            <Panel />
        </div>
    )
};

export default App;
