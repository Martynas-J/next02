const dns = require("dns");
dns.setDefaultResultOrder("ipv4first");

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
        domains: ["*"]
    },
};

module.exports = nextConfig;
