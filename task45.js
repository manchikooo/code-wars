// https://www.codewars.com/kata/530017aac7c0f49926000084/train/javascript

function pluck(objs, name) {
    let arr = []
    for (let i = 0; i < objs.length; i++) {
        arr.push(objs[i][name])
    }
    return arr
}