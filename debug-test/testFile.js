module.exports = {
    setSomethingInWindow() {
        window.something = true;
        debugger;
    },

    getSomethingFromWindow() {
        return window.something;
    }
};
