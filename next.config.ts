import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "527s5k98ud.ufs.sh",
        port: "",
        
      },
      {
        protocol: "https",
        hostname: "utfs.io",
        port: "",
        
      },
    ]
  }
};


export default nextConfig;
