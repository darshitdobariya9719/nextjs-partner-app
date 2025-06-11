import Image, { ImageProps } from 'next/image';
import { StaticImageData } from 'next/image';

interface ServerImageWithFallbackProps extends Omit<ImageProps, 'src'> {
  src?: string | StaticImageData;
  fallback: string | StaticImageData;
}

export const ServerImageWithFallback = ({
  src,
  fallback,
  alt,
  ...props
}: ServerImageWithFallbackProps) => {
  const finalSrc = src ?? fallback;
  return <Image src={finalSrc} {...props}  alt={alt}/>;
};
