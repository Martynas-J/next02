const dns = require("dns");
dns.setDefaultResultOrder("ipv4first");

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
        domains: ["images.pexels.com", "www.pexels.com", "placehold.co"]
    },
};

module.exports = nextConfig;
