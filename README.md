<!--
 * @Author: 姜彦汐
 * @Date: 2020-12-24 10:54:22
 * @LastEditors: 姜彦汐
 * @LastEditTime: 2021-04-22 10:23:50
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

egg 2.x | egg 1.x
--- | ---
😁 | ❌

### 依赖的插件

[cache-manager](https://github.com/BryanDonovan/node-cache-manager)

[cache-manager-fs](https://github.com/hotelde/node-cache-manager-fs)

[cache-manager-ioredis](https://github.com/dabroek/node-cache-manager-ioredis)

## 开启插件

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

};
```
## License

[MIT](LICENSE)