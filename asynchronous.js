function letMeKnowWhenComplete(size, cb) {
    var reducer = 0;
    for (var i = 1; i < size; i++) {
        reducer = Math.sin(reducer * i);
    }
    cb();
}
letMeKnowWhenComplete(100000000, function () {
    console.log('completed');
});
//# sourceMappingURL=asynchronous.js.map