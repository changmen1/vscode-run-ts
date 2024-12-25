/**-------------基本用法--------------- */

/**定义函数返回值类型 函数返回值的类型通常是省略不写的 */
const test = (name: string):number => {
    console.log(name)
    return 1
}

test("李瑶")