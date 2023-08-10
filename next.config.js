const dns = require("dns");
dns.setDefaultResultOrder("ipv4first");

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    images: {
        domains: ["images.pexels.com", "www.pexels.com", "placehold.co"]
    },
    experimental: {
        optimizeFonts: true,
        dangerouslyAllowSVG: true, // Leidžia įkelti SVG failus
    },
};

module.exports = nextConfig;
