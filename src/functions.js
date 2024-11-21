export const dataFetch = (URL, init) => new Promise((resolve, reject) => {
    init ? 
        fetch(URL, init)
            .then(r=>r.json())
            .then(r=> resolve(r))
    :
        fetch(URL)
            .then(r=>r.json())
            .then(r=> resolve(r))
})