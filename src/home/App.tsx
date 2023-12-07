import React, { useState } from 'react';
import IntroLoader from './IntroLoader';
import HomePage from "./HomePage"

const App = () => {
    const [loading, setLoading] = useState(true);

    return (
        <div>
            {loading ? (
                <IntroLoader onLoaded={() => setLoading(false)} />
            ) : (
                <HomePage />
            )}
        </div>
    );
};

export default App;