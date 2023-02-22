; (() => {
    const ftp = require('ftp')
    const client = new ftp();
    const ftpUtils = require('./utils/ftp')

    /**
     * 1.连接ftp
     * 2.读取路径下的文件
     * 3.删除文件夹
     * 4.新建文件夹
     * 5.cwd新路径
     * 6.拷贝dist路径下的所有文件
     * 7.关闭连接
     */
    client.on('ready', async () => {
        console.log(`----------------------\n1.ftp is onReady\n----------------------`)
        // 1.删除ftp目录下的所有文件
        await ftpUtils.rmPath(ftpUtils.ftpPath, client)
        // 2.拷贝
        await ftpUtils.copyFiles(ftpUtils.distPath, ftpUtils.ftpPath, client)
        client.end()
    });
    client.on('close', () => {
        console.log('ftp client  close')
    });
    client.on('end', () => {
        console.log('ftp client has end')
        console.log('传输完毕，blog地址: http://42.192.230.161/blog')
    });
    client.on('error', (err) => {
        console.log('ftp client has an error : ' + JSON.stringify(err))
    });
    client.connect({
        host: '42.192.230.161',
        port: '21',
        user: 'ftpUser',
        password: 'Wy141644',
        keepalive: 10000
    });

})()