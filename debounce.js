/**
 * @param {Function} fn
 * @param {number} delay milliseconds
 * @return {Function}
 */

export function debounce(fn, delay) {
    let timerId;
    return function (...args) {
        clearTimeout(timerId);

        timerId = setTimeout(function () {
            return fn.call(this,...args)
        }, delay)
    }
}