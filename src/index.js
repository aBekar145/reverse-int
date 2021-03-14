module.exports = function reverse (n) {
if (n < 0) {
    let plus = Math.abs(n);
    let str = plus.toString().split('').reverse().join('');
        let num = Number(str);
        return num
    } else {
            let str = n.toString().split('').reverse().join('');
        let num = Number(str);
        return num;
    }
}
