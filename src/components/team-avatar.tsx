export type TeamVariant = "ana" | "leo" | "sofi" | "marco";

/**
 * Avatar ilustrado (marcador de posición) para "Tu equipo de IA" — silueta
 * en los tonos de marca, sin foto real, hasta tener las fotos generadas por
 * IA que reemplazarán este bloque (ver claude/estrategia-web-asiste360.md).
 * Se usa tanto en las tarjetas del Home como en el perfil de cada empleado.
 */
export function TeamAvatarBust({ variant }: { variant: TeamVariant }) {
  return (
    <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
      {variant === "ana" && (
        <>
          <path d="M20,100 C20,72 33,62 50,62 C67,62 80,72 80,100 Z" fill="#fff" fillOpacity="0.95" />
          <ellipse cx="50" cy="40" rx="17" ry="19" fill="#fff" fillOpacity="0.95" />
          <path
            d="M31,44 C29,28 37,16 50,16 C63,16 71,28 69,44 C68,34 65,28 60,26 C57,32 43,32 40,26 C35,28 32,34 31,44 Z"
            fill="#161b33"
          />
        </>
      )}
      {variant === "leo" && (
        <>
          <path d="M20,100 C20,72 33,62 50,62 C67,62 80,72 80,100 Z" fill="#fff" fillOpacity="0.95" />
          <ellipse cx="50" cy="40" rx="17" ry="19" fill="#fff" fillOpacity="0.95" />
          <path
            d="M32,35 C29,22 38,14 50,14 C60,14 66,20 66,27 C63,24 60,26 61,30 C58,25 53,28 54,32 C50,27 45,29 46,33 C42,28 38,30 39,34 C35,30 33,32 32,35 Z"
            fill="#161b33"
          />
        </>
      )}
      {variant === "sofi" && (
        <>
          <path d="M18,100 C18,72 33,62 50,62 C67,62 82,72 82,100 Z" fill="#fff" fillOpacity="0.95" />
          <ellipse cx="50" cy="40" rx="17" ry="19" fill="#fff" fillOpacity="0.95" />
          <path d="M31,46 C25,44 22,60 24,72 L30,70 C29,58 30,48 33,44 Z" fill="#161b33" />
          <path d="M69,46 C75,44 78,60 76,72 L70,70 C71,58 70,48 67,44 Z" fill="#161b33" />
          <path
            d="M32,30 C32,17 40,13 50,13 C61,13 69,18 68,31 C67,25 63,20 58,19 C57,24 51,27 44,26 C38,25 34,22 33,19 C30,22 32,27 32,30 Z"
            fill="#161b33"
          />
        </>
      )}
      {variant === "marco" && (
        <>
          <path d="M20,100 C20,72 33,62 50,62 C67,62 80,72 80,100 Z" fill="#fff" fillOpacity="0.95" />
          <ellipse cx="50" cy="41" rx="16" ry="18" fill="#fff" fillOpacity="0.95" />
          <path
            d="M33,36 C31,24 39,16 50,16 C61,16 69,24 67,36 C66,30 63,26 58,25 L58,29 C54,27 46,27 42,29 L42,25 C37,26 34,30 33,36 Z"
            fill="#161b33"
          />
        </>
      )}
    </svg>
  );
}
