const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline';
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
`; // TODO: verify this makes sense

const output = process.env.NEXTEXPORT
  ? 'export' // docs say this gets a static site?
  : 'standalone'; // Ensure we get a static website dir

module.exports = {
  output: output,
  images: {
    unoptimized: true,
    domains: [
      'res.cloudinary.com',
      'avatars.githubusercontent.com',
      'imgur.com',
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: cspHeader.replace(/\n/g, ''),
          },
        ],
      },
    ]
  },
};
