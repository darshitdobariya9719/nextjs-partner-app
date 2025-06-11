import { Box, Icon } from "@chakra-ui/react";
import React from "react";

const totalStars = 5;

const StarFullIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 20 18" fill="none" {...props}>
    <path
      d="M9.95238 1.76268L11.6684 5.97539C11.8678 6.46487 12.3252 6.81221 12.8651 6.8564L17.3644 7.22472L13.9214 10.2362C13.5204 10.587 13.3517 11.1294 13.4711 11.6407L14.5165 16.1154L10.6989 13.7345C10.2415 13.4493 9.66323 13.4493 9.2059 13.7345L5.38828 16.1154L6.43362 11.6407C6.55308 11.1294 6.38441 10.587 5.98335 10.2362L2.54032 7.22472L7.0397 6.8564C7.57952 6.81221 8.037 6.46486 8.23638 5.97539L9.95238 1.76268Z"
      fill="#F37B20"
    />
  </svg>
);

const StarEmptyIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 20 18" fill="none" {...props}>
    <path
      d="M9.95238 1.76268L11.6684 5.97539C11.8678 6.46487 12.3252 6.81221 12.8651 6.8564L17.3644 7.22472L13.9214 10.2362C13.5204 10.587 13.3517 11.1294 13.4711 11.6407L14.5165 16.1154L10.6989 13.7345C10.2415 13.4493 9.66323 13.4493 9.2059 13.7345L5.38828 16.1154L6.43362 11.6407C6.55308 11.1294 6.38441 10.587 5.98335 10.2362L2.54032 7.22472L7.0397 6.8564C7.57952 6.81221 8.037 6.46486 8.23638 5.97539L9.95238 1.76268Z"
      stroke="#F37B20"
      fill="none"
    />
  </svg>
);

const Rating = ({
  rating = 0,
  starSize = "16px",
}: {
  rating?:string | number;
  starSize?: string;
}) => {
  const fullStars = Math.floor(Number(rating));
  const hasHalfStar = Number(rating) % 1 >= 0.5;

  return (
    <Box display="flex" gap="1px">
      {[...Array(totalStars)].map((_, i) => {
        if (i < fullStars) {
          return <Icon key={i} as={StarFullIcon} boxSize={starSize} />;
        } else if (i === fullStars && hasHalfStar) {
          return <Icon key={i} as={StarFullIcon} boxSize={starSize} opacity={0.5} />;
        } else {
          return <Icon key={i} as={StarEmptyIcon} boxSize={starSize} />;
        }
      })}
    </Box>
  );
};

export default Rating;
