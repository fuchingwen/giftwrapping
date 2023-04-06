const Koa = require('koa');
const koaBody = require('koa-body');
const Router = require('koa-router');

(async () => {
  const app = new Koa();
  const router = new Router();

  app.use(koaBody.koaBody());

  router.post('/testAPI', (ctx) => {
    ctx.set('Access-Control-Allow-Origin', 'http://127.0.0.1:8080');
    ctx.set('Access-Control-Allow-Credentials', 'true');
    ctx.body = {
      test: 'this msg from server',
    };
  });
  router.get('/product/:id', (ctx) => {
    ctx.set('Access-Control-Allow-Origin', 'http://127.0.0.1:8080');
    ctx.set('Access-Control-Allow-Credentials', 'true');
    ctx.body = {
      name: 'important',
      detail: {
        content: 'content',
        cost: 23,
        size: 'large',
        remark: 'remark',
      },
      category: ['category'],
    };
  });
  router.post('/product', (ctx) => {
    ctx.set('Access-Control-Allow-Origin', 'http://127.0.0.1:8080');
    ctx.set('Access-Control-Allow-Credentials', 'true');
    ctx.body = [
      {
        id: '1',
        name: '抽屜紙盒',
        detail: {
          content:
            '身為盒子的驕傲身為盒子的驕傲身為盒子的驕傲身為盒子的驕傲身為盒子的驕傲身為盒子的驕傲身為盒子的驕傲',
          cost: '32',
          size: '10cmx10cmx10cm',
          remark: '我很好用',
          subtitle: '我是副標我是副標我是副標',
        },
        category: ['上下蓋', '精裝紙盒'],
        images: [
          'https://images.unsplash.com/photo-1496979551903-46e46589a88b?ixlib=rb-0.3.5&ixid=eyjhchbfawqiojeymdd9&s=cda12b505afa1beb06e49d89014cbd65&auto=format&fit=crop&w=634&q=80',
        ],
      },
      {
        id: '2',
        name: '一般紙盒',
        detail: {
          content:
            '身為盒子的驕傲身為盒子的驕傲身為盒子的驕傲身為盒子的驕傲身為盒子的驕傲身為盒子的驕傲身為盒子的驕傲',
          cost: '35',
          size: '10cmx10cmx10cm',
          remark: '我很好用',
          subtitle: '我是副標我是副標我是副標',
        },
        category: ['上下蓋'],
        images: [
          'https://images.unsplash.com/photo-1496979551903-46e46589a88b?ixlib=rb-0.3.5&ixid=eyjhchbfawqiojeymdd9&s=cda12b505afa1beb06e49d89014cbd65&auto=format&fit=crop&w=634&q=80',
        ],
      },
      {
        id: '3',
        name: '絕對好評紙盒',
        detail: {
          content:
            '身為盒子的驕傲身為盒子的驕傲身為盒子的驕傲身為盒子的驕傲身為盒子的驕傲身為盒子的驕傲身為盒子的驕傲',
          cost: '10',
          size: '10cmx10cmx10cm',
          remark: '我很好用',
          subtitle: '我是副標我是副標我是副標',
        },
        category: ['精裝紙盒'],
        images: [
          'https://images.unsplash.com/photo-1496979551903-46e46589a88b?ixlib=rb-0.3.5&ixid=eyjhchbfawqiojeymdd9&s=cda12b505afa1beb06e49d89014cbd65&auto=format&fit=crop&w=634&q=80',
        ],
      },
      {
        id: '4',
        name: '絕盒sss',
        detail: {
          content:
            '身為盒子的驕傲身為盒子的驕傲身為盒子的驕傲身為盒子的驕傲身為盒子的驕傲身為盒子的驕傲身為盒子的驕傲',
          cost: '10',
          size: '10cmx10cmx10cm',
          remark: '我很好用',
          subtitle: '我是副標我是副標我是副標',
        },
        category: ['精裝紙盒'],
        images: [
          'https://images.unsplash.com/photo-1496979551903-46e46589a88b?ixlib=rb-0.3.5&ixid=eyjhchbfawqiojeymdd9&s=cda12b505afa1beb06e49d89014cbd65&auto=format&fit=crop&w=634&q=80',
        ],
      },
    ];
  });
  // .put("/article/:id", (ctx) => {
  //   /* ... */
  // })
  // .get("/article/:id", (ctx) => {
  //   /* ... */
  // })
  // .delete("/article/:id", (ctx) => {
  //   /* ... */
  // });

  app.use(router.routes());

  let webPort = 3000;
  app.listen(webPort);
  console.log('start port of ' + webPort);
})();
