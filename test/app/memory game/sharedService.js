"use strict";
var SharedService = (function () {
    function SharedService() {
        this.letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q",
            "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    }
    SharedService.prototype.shuffle = function (array) {
        var m = array.length;
        var i, t;
        // While there remain elements to shuffle…
        while (m) {
            // Pick a remaining element…
            i = Math.floor(Math.random() * m--);
            // And swap it with the current element.
            t = array[m];
            array[m] = array[i];
            array[i] = t;
        }
        return array;
    };
    SharedService.prototype.getCardSymbols = function (gameProps) {
        var _this = this;
        var dimension = this.getGameDimension(gameProps);
        var arr = Array.apply(null, Array(dimension));
        if (gameProps.type == 2) {
            var orderedArray = arr.map(function (x, i) {
                var index = ((i) % (arr.length / 2));
                return _this.letters[index];
            });
        }
        else {
            var orderedArray = arr.map(function (x, i) { return ((i) % (arr.length / 2)) + 1; });
        }
        var shuffledArray = this.shuffle(orderedArray);
        return shuffledArray;
    };
    SharedService.prototype.getGameDimension = function (gameProps) {
        var res;
        switch (Number(gameProps.dimension)) {
            case 1:
                res = 12;
                break;
            case 2:
                res = 20;
                break;
        }
        return res;
    };
    return SharedService;
}());
exports.SharedService = SharedService;
//# sourceMappingURL=sharedService.js.map