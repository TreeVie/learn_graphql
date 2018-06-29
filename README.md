## node使用import的方式

1. 预先加载`babel-polyfill`

    ```javascript
    require('babel-core/register')({
        presets: ['stage-3', ['latest-node', { target: 'current' }]]
    });
    // 引入babel-polyfill
    require('babel-polyfill');
    // 引用自己的入口文件
    require('../server');
    ```

2. 使用`.mjs`,node开启`experimental-modules`

    ```json
    {"start": "node --experimental-modules server.mjs"}
    ```
    **不能使用** `__dirname`,`require`

---

>使用第一种方案，这样所有文件可以统一使用ES6的风格

---

