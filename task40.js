// https://www.codewars.com/kata/5ae62fcf252e66d44d00008e/train/javascript

function expressionMatter(a, b, c) {
    let var1 = a + b + c
    let var2 = a * b * c
    let var3 = a + b * c
    let var4 = a * b + c
    let var5 = (a * b) * c
    let var6 = a * (b * c)
    let var7 = (a + b) * c
    let var8 = a * (b + c)
    let var9 = a + (b + c)
    let var10 = (a + b) + c
    let arr = [var1, var2, var3, var4, var5, var6, var7, var8, var9, var10]
    return Math.max.apply(null, arr)
}