if (process.env.NODE_ENV !== 'production') {
    console.log('Look like we are in development!');
}

function getComponent() {
    return import ( /* webpackChunkName: "lodash" */ 'lodash').then(_ => {
        var element = document.createElement('div');
        var _ = _.default;
        element.innerHTML = _.join(['Hello', 'webpack'], ' ');
        return element;
    }).catch(error => 'An error occurred while loading the component');
}

getComponent().then(component => {
    document.body.appendChild(component);
})

if (module.hot) {
    module.hot.accept('./print.js', function() {
        console.log('Accepting the updated printMe module!');
        document.body.removeChild(element);
        element = component(); // Re-render the "component" to update the click handler
        document.body.appendChild(element);
    })
}