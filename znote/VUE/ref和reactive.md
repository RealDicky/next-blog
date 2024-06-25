### `ref` 和 `reactive`

#### same
- 都有进行依赖收集
  - `ref`对于非对象没有使用`proxy`, 对对象使用了`proxy`, 使用了类对`value`属性进行`get`和`set`包裹, 所以使用`isProxy`对`ref.value`进行检测基本类型返回`false`, 对象返回`true`
  - `reactive`使用`proxy`, `handler`根据情况为多重继承的
  - 二者的`get`都有调用`trackEffects`方法, 这个方法主要作用就是进行依赖收集
#### different
- `ref`支持任何类型, `reactive`只支持对象类型(不包括`null`)
- `ref`需要`.value`调用
