/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
        serverComponentsExternalPackages: ["mongoose"],
    },
    images: {
        domains: ['lh3.googleusercontent.com', 'uploadthing.com', 'keeble-sample.s3.ap-southeast-1.amazonaws.com'],
    },
    webpack(config) {
        config.experiments = {
        ...config.experiments,
        topLevelAwait: true,
    }
        return config
    }
}
module.exports = nextConfig