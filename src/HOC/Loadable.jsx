import React from 'react';
import ReactLoadable from 'react-loadable'
import ReactLoading from 'react-loading';

function Loadable(opts = {}) {
    return ReactLoadable({
        ...opts,
        loading: () => { return <ReactLoading type={`bubbles`} color="#000" /> },
        delay: 200,
        timeout: 10000,
    })
}

export default Loadable
