const CONF = {
    //开启服务的端口
    port: '5757',
    /**
     * MySQL 配置
     */
    mysql: {
        host: 'localhost',
        port: 3306,
        user: 'nodemysql',
        db: 'nodemysql',
        pass: '123456',
        char: 'utf8mb4'
    },
    appid: 'wxf272e71f9a83e118',
    appSecret: 'bde20a9eec4c369cdbb82245f3cbd14a'
}

module.exports = CONF