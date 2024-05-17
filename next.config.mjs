/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "res.cloudinary.com"
            }
        ]
    },
    experimental: {
        serverActions: {
          allowedOrigins: ["g4ngtx7j-3000.brs.devtunnels.ms/"],
          allowedForwardedHosts: ["g4ngtx7j-3000.brs.devtunnels.ms/"],
          
          // Puedes necesitar usar la propiedad allowedForwardedHosts dependiendo de tu versión exacta.
        }
      }
};

export default nextConfig;
