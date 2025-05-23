// next.config.js
module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
          port: '',
          pathname: '**/*',
        },
        {
            protocol: 'https',
            hostname: 'via.placeholder.com',
            port: '',
            pathname: '**/*',
          },
      ],
    },
  };