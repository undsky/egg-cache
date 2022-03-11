/*
 * @Author: 姜彦汐
 * @Date: 2020-12-24 11:23:12
 * @LastEditors: 姜彦汐
 * @LastEditTime: 2022-03-11 14:58:48
 * @Description: 
 * @Site: https://www.undsky.com
 */
const path = require('path')

module.exports = appInfo => ({
    cache: {
        default: 'redis', // 默认缓存方式
        ttl: 600, // 缓存时长（秒）
        fs: {
            path: path.join(appInfo.baseDir, 'cache'),
            subdirs: false,
            zip: false
        },
        redis: null
    }
});