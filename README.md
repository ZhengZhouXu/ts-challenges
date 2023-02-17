# 待解决  
296  
Equal

# 进度
-13

# 知识点
* 递归不能返回never，否则整个返回值都是never
* 949: {} 用 Record<string, never> extends
* 1042: [T] extends [never] 判断是否为null，[T] 会使联合类型不可分配
* 1097: 判断联合类型
* 1367: 判断索引列
* 1978: 文本匹配，T extends `${infer Pre}${infer Mid}` 只能infer两个，三个中间会有问题