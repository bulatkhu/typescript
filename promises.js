const myPromises = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('I completed successfully')
        reject('I failed!');
    }, 500);
});
myPromises
    .then(done => {
    console.log(done);
})
    .catch(err => {
    console.log(err);
});
//# sourceMappingURL=promises.js.map