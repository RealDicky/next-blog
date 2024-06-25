/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['next-mdx-remote'],

  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: [
        {
          loader: 'html-loader'
        },
        {
          loader: 'markdown-loader',
          options: {
            // Pass options to marked
            // See https://marked.js.org/using_advanced#options
          }
        }
      ]
    }, {
      test: /\.docx$/,
      use: [
        {
          loader: 'docx-loader',
          options: {
            removeLinks: true
          }
        }
      ]
    })
    return config
  }
}

export default nextConfig
