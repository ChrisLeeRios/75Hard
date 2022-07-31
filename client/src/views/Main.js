import React, { useEffect, useState } from 'react'
import axios from 'axios';
import SfhardForm from '../components/SfhardForm'; // Change this line
import SfhardList from '../components/SfhardList'; // Change this line

const Main = (props) => {
    const [sfhards, setSfhards] = useState([]); // Change this line
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('/api/sfhards')
            .then(res => {
                setSfhards(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    }, [sfhards]);

    const removeFromDom = _Id => {
        setSfhards(sfhards.filter(sfhard => sfhard._id !== _Id));
    }

    // Change all perpson and peopple to match current project
    return (
        <div>
            {/* <SfhardForm />
            <hr /> */}
            {loaded && <SfhardList sfhards={sfhards}  removeFromDom={removeFromDom} />}
        </div>
    )
}

export default Main;