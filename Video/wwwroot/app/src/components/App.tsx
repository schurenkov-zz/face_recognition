import React, {useEffect} from "react";
import axios from 'axios';

const App = () => {

    useEffect(() => {
        axios.get(window['labelsUrl']).then(r => console.log(r))
        axios.get(window['personsUrl']).then(r => console.log(r))
    }, [])

    return (
        <div>
            <div>
                <video src={window['videoURL']} />
            </div>
            <div></div>
        </div>
    )
}

export default App;
