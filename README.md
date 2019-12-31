# increment-string-id

自增的number转换成字符串ID，主要只是为了统一和美观。

## 安装和使用

安装
```
npm install increment-string-id
```

使用
```js
import IncrementStringId from 'increment-string-id'

const seed = 0
const size = 4
const instance = new IncrementStringId(seed, size)
instance.generateId()
```

构造函数参数

|名称|默认值|说明
|-|-|-|
|seed|0|递增的种子
|size|4|字符串id的最小长度

测试

```
npm run test
```

## 应用场景

比如，在问卷系统中，每个选项、每个问题都需要生成唯一ID，又不想用递增数字，那么就可以使用该库。

后台每次记录下 seed 即可，使用的时候，用上一次记录的 seed 实例化，就可以得到永不重复的字符串id。
