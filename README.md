## webpack custom


#### babelrc
> .babelrc配置 主要有 对 预设presets 和插件 plugins 进行配置 

* presets 创建预设 早起有很多插件  
check-es2015-constants","es2015-arrow-functions","es2015-block-scoped-functions  
为了简化配置 用 babel-preset-env 代替缩写为 es2015
* babel 还需要 转义器 stage 这里就用 stage-2  用它无需要很多插件 同样支持动态引入  

```json
"presets": [
    "es2015",
    "stage-2"
  ]
```
* 如果想指定浏览器限制 amd commonjs规范 可以用target  
* modules 默认false commonjs规范  就是 module.exports
* targets 内 borwsers 内部写的是搜索语句 指定浏览器兼容版本 详情可看 http://browserl.ist/

```json
["env", {
      "modules": false,
      "targets": {
        "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
      }
}]

```

* comments 在生成的文件中，不产生注释，boolean类型，webpack插件中的UglifyJsPlugin也同样集成了这个功能


