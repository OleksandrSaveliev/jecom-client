import Image from "next/image";
import { useState } from "react";

type ProductImageProps = {
  src: string;
  alt?: string;
  style?: string;
};

export default function ImageWithFallback({
  src,
  alt = "",
  style,
}: ProductImageProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <Image
      src={hasError ? "/placeholder.svg" : src}
      alt={alt}
      height={450}
      width={200}
      onError={() => setHasError(true)}
      className={style}
    />
  );
}
