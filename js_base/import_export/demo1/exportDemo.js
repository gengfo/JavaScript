//ref https://www.jianshu.com/p/d9be7c410e10

export var m = 1;
// 等价于
var m = 1;
export { m }

// 导出多个
var a = 1;
var b = 2;
var c = 3;
export { a, b, c }
// 导出对象
export const student = {
  name: 'Megan',
  age: 18
}
// 导出函数
export function add(a, b) {
  return a + b;
}

  