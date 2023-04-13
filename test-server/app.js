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

  // router.get('/product/:id', (ctx) => {
  //   ctx.set('Access-Control-Allow-Origin', 'http://127.0.0.1:8080');
  //   ctx.set('Access-Control-Allow-Credentials', 'true');
  //   ctx.body = {
  //     name: 'important',
  //     detail: {
  //       content: 'content',
  //       cost: 23,
  //       size: 'large',
  //       remark: 'remark',
  //     },
  //     category: ['category'],
  //   };
  // });

  router.get('/category', (ctx) => {
    ctx.set('Access-Control-Allow-Origin', 'http://127.0.0.1:8080');
    ctx.set('Access-Control-Allow-Credentials', 'true');
    ctx.body = {
      code: 0,
      list: [
        {
          sort: 0, //左側分類由上往下先後順序，數字越小越前面，【目前暫定寫死】
          categoryID: 0, //分類項目ID，【目前暫定寫死】
          categoryTitle: '產業',
          type: 1, //單選為0，複選為1，【目前暫定寫死】
          content: ['物流業', '餐飲業', '建築業'],
        },
        {
          sort: 1,
          categoryID: 1,
          categoryTitle: '形狀',
          type: 1,
          content: ['立方體', '長方體', '圓錐體'],
        },
      ],
    };
  });

  router.post('/product', async (ctx) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Headers', 'Content-Type');
    ctx.set('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');

    const requestBody = ctx.request.body;
    console.log(JSON.stringify(requestBody));
    ctx.body = {
      list: [],
      /*
      list: [
        {
          name: '衛生紙',
          subtitle: '衛生紙一生愛你',
          detail: {
            content:
              '胡說八道中胡說八道中胡說八道中胡說八道中胡說八道中胡說八道中',
          },
          image:
            'https://www.haoli-art.com/Uploads/Album/365786_439343205273.jpg',
        },
        {
          name: '衛生紙',
          subtitle: '衛生紙一生愛你',
          detail: {
            content:
              '胡說八道中胡說八道中胡說八道中胡說八道中胡說八道中胡說八道中',
          },
          image:
            'https://www.haoli-art.com/Uploads/Album/365786_439343205273.jpg',
        },
        {
          name: '衛生紙',
          subtitle: '衛生紙一生愛你',
          detail: {
            content:
              '胡說八道中胡說八道中胡說八道中胡說八道中胡說八道中胡說八道中nt":["立方體","長方體","圓nt":["立方體","長方體","圓nt":["立方體","長方體","圓nt":["立方體","長方體","圓nt":["立方體","長方體","圓',
          },
          image:
            'https://www.haoli-art.com/Uploads/Album/365786_439343205273.jpg',
        },
        {
          name: '衛生紙',
          subtitle: '衛生紙一生愛你',
          detail: {
            content:
              '胡說八道中胡說八道中胡說八道中胡說八道中胡說八道中胡說八道中',
          },
          image:
            'https://www.haoli-art.com/Uploads/Album/365786_439343205273.jpg',
        },
      ],
      // */
    };
  });

  // router.get('/category', (ctx) => {
  //   ctx.set('Access-Control-Allow-Origin', 'http://127.0.0.1:8080');
  //   ctx.set('Access-Control-Allow-Credentials', 'true');
  //   ctx.body = {
  //     code: 0,
  //     context: {
  //       page: 1,
  //       page_size: 10,
  //       total_rows: 1,
  //     },
  //     list: [
  //       {
  //         id: 1,
  //         name: 'important',
  //         subtitle: 'subtitle',
  //         detail: {
  //           content: 'content',
  //           cost: 23,
  //           size: 'large',
  //           remark: 'remark',
  //         },
  //         category: ['category'],
  //         images: null,
  //       },
  //     ],
  //   };
  // });

  // router.post('/product', (ctx) => {
  //   ctx.set('Access-Control-Allow-Origin', '*');
  //   ctx.set(
  //     'Access-Control-Allow-Headers',
  //     'Origin, X-Requested-With, Content-Type, Accept'
  //   );
  //   console.log(ctx.request.body);
  //   ctx.body = {
  //     list: [
  //       {
  //         name: 'important',
  //         subtitle: 'subtitle',
  //         detail: {
  //           content: 'content',
  //         },
  //         image:
  //           'https://www.haoli-art.com/Uploads/Album/365786_439343205273.jpg',
  //       },
  //     ],
  //   };
  // });
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
