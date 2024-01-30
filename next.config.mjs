/** @type {import('next').NextConfig} */
const nextConfig = {
    images:  {
        domains: ['https://utfs.io'],
        remotePatterns: [ 
            {
                protocol:'https',
                hostname: 'utfs.io',
                port: ''
            }
        ]
    }
};

export default nextConfig;
