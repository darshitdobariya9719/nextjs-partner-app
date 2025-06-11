'use client';

import { Button, ButtonProps } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import React from 'react';

interface CustomButtonProps extends ButtonProps {
  title?: string;
  href?: string;
  isnavlink?: boolean;
  visual?: string;
  
}

export default function CustomButton({
  title,
  href,
  isnavlink,
  onClick,
  ...rest
}: CustomButtonProps) {
  const router = useRouter();

  const onNavigate = () => {
    if (href) {
      router.push(href);
    }
  };

  return (
    <Button
      _hover={{}} // you can customize this or remove if unnecessary
      onClick={isnavlink ? onNavigate : onClick}
      title={typeof title === 'string' ? title : ''}
      {...rest}
    >
      {title}
    </Button>
  );
}
