function createMathsModel (maths) {
    return {
        maths,
        update: function (maths) {
            this.maths = maths;
        },
        add: function (task) {
            this.maths.push(task);
        },
        get: function () {
            return this.maths;
        },
        clear: function () {
            this.maths = [];
        }
    };
} 