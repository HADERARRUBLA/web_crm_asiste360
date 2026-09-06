import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // "standalone" empaqueta solo lo necesario para correr en producción
  // (ideal para el contenedor Docker que despliega EasyPanel).
  output: "standalone",
};

export default nextConfig;
