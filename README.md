<!--
 * @Author: 姜彦汐
 * @Date: 2020-12-24 10:54:22
 * @LastEditors: 姜彦汐
 * @LastEditTime: 2021-01-05 11:09:05
 * @Description: 
 * @Contact: jiangyanxi@live.com
 * @FilePath: /egg-cache/README.md
-->
# egg-cache
## 安装

```bash
$ npm i egg-cache --save
# or
$ yarn add egg-cache
```

## 依赖说明

### 依赖的 egg 版本

egg-cache 版本 | egg 2.x | egg 1.x
--- | --- | ---
1.x | 😁 | ❌

### 依赖的插件

## 使用

```js
// {app_root}/config/plugin.js
exports.cache = {
  enable: true,
  package: 'egg-cache',
};
```

## 配置

```js
// {app_root}/config/config.default.js
config.cache = {
   ttl: 60, // 缓存时长（秒）
   fs: {
       path: path.join(appInfo.baseDir, 'cache'), // 缓存路径
       maxsize: 10 * 1024 * 1024 // 10M
   },
   redis: null
};
```

## 示例

```js
await app.cache.fs.wrap('key', async () => {
   return data
})
```
## License

[MIT](LICENSE)