/** @type {import('next').NextConfig} */
const baseHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=()' },
]

const productionHeaders = [
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      // Next injects inline bootstrap scripts; there is no dangerouslySetInnerHTML in the app.
      "script-src 'self' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob:",
      "font-src 'self' data:",
      "connect-src 'self' https://vitals.vercel-insights.com",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "object-src 'none'",
    ].join('; '),
  },
]

const nextConfig = {
  poweredByHeader: false,
  async redirects() {
    // Temporary (307) while the canonical URLs settle; switch to permanent at launch.
    return [
      { source: '/dashboard/reading', destination: '/dashboard', permanent: false },
      { source: '/dashboard/more', destination: '/settings', permanent: false },
      { source: '/dashboard/topics', destination: '/dashboard', permanent: false },
      { source: '/dashboard/topics/:specialty', destination: '/dashboard/reading/:specialty', permanent: false },
      { source: '/dashboard/reading/lectura', destination: '/dashboard', permanent: false },
      {
        source: '/dashboard/reading/lectura/:specialty/:chapter',
        destination: '/dashboard/reading/:specialty/:chapter',
        permanent: false,
      },
      {
        source: '/dashboard/reading/lectura/:specialty',
        destination: '/dashboard/reading/:specialty',
        permanent: false,
      },
      {
        source: '/dashboard/reading/resumen/:specialty/:chapter',
        destination: '/dashboard/reading/summary/:specialty/:chapter',
        permanent: false,
      },
      {
        source: '/dashboard/reading/resumen/:specialty',
        destination: '/dashboard/reading/summary/:specialty',
        permanent: false,
      },
      { source: '/dashboard/reading/resumen', destination: '/dashboard/reading/summary', permanent: false },
      {
        source: '/dashboard/reading/repaso/:chapter',
        destination: '/dashboard/reading/review/:chapter',
        permanent: false,
      },
      { source: '/dashboard/reading/repaso', destination: '/dashboard/reading/review', permanent: false },
    ]
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: process.env.NODE_ENV === 'production' ? [...baseHeaders, ...productionHeaders] : baseHeaders,
      },
    ]
  },
}

export default nextConfig
