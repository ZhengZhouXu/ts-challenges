# 待解决  
296  
Equal  
2257(跳过)

# 进度
-18

# 知识点
* 递归不能返回never，否则整个返回值都是never
* 949: {} 用 Record<string, never> extends
* 1042: [T] extends [never] 判断是否为null，[T] 会使联合类型不可分配
* 1097: 判断联合类型
* 1367: 判断索引列
* 1978: 文本匹配，T extends `${infer Pre}${infer Mid}` 只能infer两个，三个中间会有问题
* 2688: `${U}${string}`, ${string} 指代剩余string
* 13298: 任何值都可以继承自{}，使用Merge，将交叉类型组合成一个对象
* 10443: -?, 将可选属性改为不可选
* 2793: -readonly, 去掉属性readonly
* 3188: 可以对infer的类型做 extends，如：infer First extends string
