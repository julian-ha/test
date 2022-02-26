module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '422cfb988b1abb789c3417acb8718c11'),
  },
});
