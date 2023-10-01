import React, { useState } from 'react';
import Input from './input';

function Search() {
    const [response, setResponse] = useState(null);

    const updateResponse = (responseData) => {
        setResponse(responseData);
    };

    return (
        <div>
            <Input updateResponse={updateResponse} />
            <div>
                {response && (
                    response.length === 0 ? (
                        <div>
                            <h2>No matching labels</h2>
                        </div>
                    ) : (
                        <div>
                            <h2>Shipping Tracking Code:</h2>
                            <p>{response.shipping_tracking_code}</p>
                        </div>)
                )}
            </div>
        </div>
    );
}

export default Search;