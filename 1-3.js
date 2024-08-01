function foo(x, y, z) {
    return (x > y ? x : y) > z ? (x > y ? x : y) : z;

}

function sum_of_squares(x, y) {
    return (x*x) + (y*y)
}

console.log(foo(1,7,3))