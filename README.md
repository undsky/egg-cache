# egg-cache

> Egg.js 缓存插件，支持内存、文件、Redis 缓存
## 安装

```bash
$ npm i egg-cache-manage --save
# or
$ yarn add egg-cache-manage
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
      ttl: 600, // 缓存时长（秒）
      fs: {
          path: path.join(appInfo.baseDir, 'cache'),
          subdirs: false,
          zip: false
      },
      redis: null
};
```

## 示例

## [点击查看更多开源项目 https://undsky.com/](https://undsky.com/)

## License

[MIT](LICENSE)