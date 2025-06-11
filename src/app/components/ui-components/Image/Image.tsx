'use client'

import Image, { ImageProps } from 'next/image'
import { useEffect, useState } from 'react'
import { StaticImageData } from 'next/image'

interface ImageWithFallbackProps extends Omit<ImageProps, 'src'> {
  src: string | StaticImageData
  fallback: string | StaticImageData
}

export const ImageWithFallback = ({
  fallback,
  alt,
  src,
  ...props
}: ImageWithFallbackProps) => {
  const [imgSrc, setImgSrc] = useState<string | StaticImageData>(src)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    setImgSrc(src)
    setHasError(false)
  }, [src])

  return (
    <Image
      {...props}
      alt={alt}
      src={hasError ? fallback : imgSrc}
      onError={() => setHasError(true)}
    />
  )
};
