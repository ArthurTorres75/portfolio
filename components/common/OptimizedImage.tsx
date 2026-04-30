import type React from "react";
import Image from "next/image";

interface ProjectImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function ProjectImage({
  src,
  alt,
  className = "",
}: ProjectImageProps): React.JSX.Element {
  return (
    <div className={`relative w-full h-40 rounded-md overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        placeholder="blur"
        blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjE2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMGYxNzJhIi8+PC9zdmc+"
      />
    </div>
  );
}

interface AvatarImageProps {
  src: string;
  alt: string;
  size?: number;
  className?: string;
}

export function AvatarImage({
  src,
  alt,
  size = 80,
  className = "",
}: AvatarImageProps): React.JSX.Element {
  return (
    <div
      className={`relative rounded-full overflow-hidden shrink-0 ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={`${size}px`}
        className="object-cover"
      />
    </div>
  );
}
