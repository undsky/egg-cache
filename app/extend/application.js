/*
 * @Author: 姜彦汐
 * @Date: 2020-11-23 13:13:38
 * @LastEditors: 姜彦汐
 * @LastEditTime: 2021-12-02 14:18:48
 * @Description: 缓存
 * @Site: https://www.undsky.com
 */
const cacheManager = require('cache-manager')
const fsStore = require('cache-manager-fs-hash')
const redisStore = require('cache-manager-ioredis')

const CACHE = Symbol('cache#manager')

module.exports = {
    get cache() {
        if (!this[CACHE]) {
            const {
                ttl,
                fs: _fs,
                redis: _redis
            } = this.config.cache

            const _ttl = 'prod' == this.config.env ? ttl : 0

            const memory = cacheManager.caching({
                store: 'memory',
                ttl: _ttl
            })
            const fs = cacheManager.caching({
                store: fsStore,
                options: Object.assign({
                    ttl: _ttl
                }, _fs)
            })
            let redis
            if (_redis)
                redis = cacheManager.caching(Object.assign({
                    store: redisStore,
                    ttl: _ttl
                }, _redis))

            this[CACHE] = {
                memory,
                fs,
                redis
            }
        }
        return this[CACHE]
    }
}