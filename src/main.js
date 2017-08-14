requirejs.config({
//    baseUrl: '/',
    paths: {
        lodash: '//cdnjs.cloudflare.com/ajax/libs/lodash.js/2.4.1/lodash.min',
        react: '//cdnjs.cloudflare.com/ajax/libs/react/15.5.4/react-with-addons',
        reactDOM: '//cdnjs.cloudflare.com/ajax/libs/react/15.5.4/react-dom.min'
    },
    shim: {
        lodash: {exports: '_'},
        react: {exports: 'React'}
    },
    map: {
        '*': {
            'react/addons': 'react'
        }
    }
});

requirejs(['react', 'reactDOM', './Components/sliderPanel/sliderPanel'], function (React, ReactDOM, comp) {
    'use strict';
    ReactDOM.render(React.createElement(comp), document.getElementById('container'));
});
