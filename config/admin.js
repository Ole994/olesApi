module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7b79b3afaf5ea8f00777d2335c3a4327'),
  },
});
