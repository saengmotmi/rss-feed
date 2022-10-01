import Image, { ImageProps } from "next/image";
import { useEffect, useState } from "react";

interface Props extends ImageProps {
  fallbackSrc: string;
}

export default function ImageFallback({ src, fallbackSrc, ...rest }: Props) {
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (
    <Image
      {...rest}
      alt=""
      src={imgSrc}
      onLoadingComplete={(result) => {
        if (result.naturalWidth === 0) {
          // Broken image
          setImgSrc(fallbackSrc);
        }
      }}
      onError={() => {
        setImgSrc(fallbackSrc);
      }}
    />
  );
}
