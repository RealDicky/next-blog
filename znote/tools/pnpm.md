### pnpm实现monorepo

### pnpm vs npm
1. npm使用平铺的依赖树结构，这会一定程度上减少占用空间，但会导致node_modules目录混乱；pnpm使用硬连接和符号连接来减少占用空间，也同时保证了目录整洁
> pnpm的软硬连接：对于顶级目录，pnpm会使用硬连接，下载并新建真的文件，对于次级目录，pnpm会尝试寻找上级目录是否存在该依赖，如果存在，则建立一个软连接，否则下载
2. npm允许对于denpendencies的不保存安装，则不加`--save`则不会写到package.json，pnpm默认会加入package.json
3. pnpm支持本地依赖，通过在package.json中指定`bar@file:../bar`，则执行`pnpm i`的时候不会去拉取请求bar