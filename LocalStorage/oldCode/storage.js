function createStorage(key) {
    return {
        key,
        pull: function () {
            const data = localStorage.getItem(this.key);

            if (!data) {
                return null;
            }

            return JSON.parse(data);
        },
        push: function (data) {
            const preparedData = JSON.stringify(data);
            localStorage.setItem(this.key, preparedData)
        }
    }
}