### router.beforeResolve
路由注册和卸载期间会触发

- 浏览器后退、刷新会触发, 使用`return false`无法拦截
- 正常单页面跳转也会触发, 使用`return false`可以拦截

### window.addEventListener('hashchange', callback)
`hashchange`时触发

- 浏览器后退会触发, 使用`return`会拦截
- 正常单页面跳转会触发, 使用`return`会拦截


> `hashchange`拦截的现象: A -> B, 先跳到B页面, 此时若有路由钩子, 会触发路由钩子, 如果`return`拦截, 则再从B跳回A, 此时若有路由钩子, 会再次触发路由钩子

### window.addEventListener('beforeunload', callback)
在页面刷新或关闭会触发`beforeunload`事件, 可以阻断页面刷新关闭, 也可以点击确定刷新关闭. 


```js
window.addEventListener('beforeunload', event => {
  event.preventDefault()
  // 触发
  event.returnValue = ''
})
```

- 需要页面已经有交互(表单、按钮点击之类的)才会生效
- 需要调用`preventDefault()`