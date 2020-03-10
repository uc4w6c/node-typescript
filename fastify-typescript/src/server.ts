import * as fastify from 'fastify';
import * as cors from 'cors';

const server = fastify();

class REST {
  constructor() {
    this.init();
  }

  init() {
    server.use(cors());
    server.get('/', this.getHelloHandler);

    /*
    return this.registerWithPrefix(
        async (instance) => {
          instance.setNotFoundHandler(handler);
        },
        prefix.charAt(0) !== '/' ? '/' + prefix : prefix,
      );
    server.setNotFoundHandler(function (request, reply) {
        console.log('not found');
        reply
            .code(404)
            .type('text/plain')
            .send('a custom not found');
    });
    */

    server.register(function (instance, options, done) {
        instance.setNotFoundHandler(function (request, reply) {
            console.log('cats not found1');
            reply
                .code(404)
                .type('text/plain')
                .send('cats a custom not found1');
        })
        done()
    }, { prefix: '/' });
    server.register(function (instance, options, done) {
        instance.setNotFoundHandler(function (request, reply) {
            console.log('cats not found2');
            reply
                .code(404)
                .type('text/plain')
                .send('cats a custom not found2');
        })
        done()
    }, { prefix: '/' });

    server.register(function (instance, options, done) {
        instance.setNotFoundHandler(function (request, reply) {
            console.log('not found');
            reply
                .code(404)
                .type('text/plain')
                .send('a custom not found');
        })
        done()
    }, { prefix: '/v1' });

    server.listen(3000, err => {
      if (err) throw err;
      console.log(`server listening on ${server.server.address().port}`);
    });
  }

  getHelloHandler (req: any, reply: any) {
    console.log("get success:)");
    reply.header('Content-Type', 'application/json').code(200);
    reply.send({ hello: 'world' });
  }
}

new REST();
