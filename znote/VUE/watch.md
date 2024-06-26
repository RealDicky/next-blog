### watch
1. 初始化getter、scheduler（主要是根据flush值为sync、post、pre的方式来决定job的触发时机）
2. 初始化effect
```js
const effect = new ReactiveEffect(getter, NOOP, scheduler)
```
3. 初始化run一下（如果flush为post，则为queuePostRenderEffect）, 赋值activeEffect
> job 和 effect.run 是不一样的；job 是watch定义的回调cb，effect.run是触发getter，job的触发形式是包装成scheduler，然后插入队列，然后从队列中依次触发
4. unwatch，调用effect.stop，主要是设置active为false，并删除dep中的effect，阻止后续触发回调
5. flush 指effect针对dom渲染触发的时机，源码级别的差别是包装成不同的scheduler
  - pre 在dom渲染之前触发，scheduler: () => queueJob(job)，触发时机: 通过标识位isFlushing/isFlushingPending来判断是否执行（当所有的job都进入队列后才开始执行），且放在promise.then执行
  - sync 同步触发，scheduler: job，触发时机: ref set导致effect循环时直接触发
  - post 插入postEffectQueue，scheduler: () => queuePostRenderEffect(job)，触发时机: 在pre后，pre在promise.then后，这个还在pre后，事实上是通过try finally
  ```js
  Promise.then(() => {
    try {
      triggerPre()
    } finally {
      triggerPost()
    }
  })
  ```

### ref
1. 如果ref在watchApi中使用时，会调一下run，即触发getter，则会有activeEffect，会触发trackRefValue方法，初始化ref.dep，值为当前上下文中的activeEffect，如果有多个effect，则会在每个effect定义的时候以此加入到ref.dep中
2. 更新时会把ref.dep里的effect循环触发，即把watch的job包装成scheduler，插入队列，然后从队列中以此触发
