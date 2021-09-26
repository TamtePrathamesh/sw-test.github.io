if(navigator.serviceWorker) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js').
        then((reg) => {
            console.log('Reg Successful ', reg.scope);
        }).catch((err) => console.log('reg failed', err))
    })
}