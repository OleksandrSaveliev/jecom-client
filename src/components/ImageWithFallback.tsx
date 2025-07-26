import { useState } from "react";
import placeholder from "../assets/placeholder.svg"; // adjust path as needed

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
    <img
      src={hasError ? placeholder : src}
      alt={alt}
      height={450}
      width={200}
      onError={() => setHasError(true)}
      className={style}
      loading="lazy"
    />
  );
}
