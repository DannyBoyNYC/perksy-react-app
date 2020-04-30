module.exports = {
  publicRuntimeConfig: {
    description:
      'Market research for the mobile generation. Perksy powers real-time research with Millennial & Gen-Z audiences through mobile.',
    domain:
      process.env.NODE_ENV === 'production'
        ? 'https://app.getperksy.com'
        : 'https://staging.getperksy.com',
    keywords: 'market research, mobile, gen-z, millennial'
  }
};
