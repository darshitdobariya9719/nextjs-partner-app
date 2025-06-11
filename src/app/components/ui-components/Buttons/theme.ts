import { defineRecipe } from "@chakra-ui/react";

const baseStyle = {
  fontWeight: "500",
  textTransform: "capitalize",
  borderRadius: "4px",
  border: "1px solid",
};

const sm = {
  fontSize: "12px",
  px: "15px", // <-- px is short for paddingLeft and paddingRight
  py: "3px", // <-- py is short for paddingTop and paddingBottom
  lineHeight: "24px",
};

const md = {
  fontSize: "14px",
  px: "15px", // <-- these values are tokens from the design system
  py: "7px", // <-- these values are tokens from the design system
  lineHeight: "24px",
};

const brandPrimary = {
      
  borderColor: "brand.50",
  color: "var(--chakra-colors-white)",
  bg: "brand.50",
};

const discard = {
      
  border: "none",
  bg: "transparent",
  color: "brandGray.500",
};

const danger = {
      
  borderColor: "brand.10",
  color: "brandGray.100",
  height: "2.5rem",
  lineHeight: "1",
  bg: "red.500",
  border: 0,
};

const modal = {
      
  lineHeight: "1",
  fontSize: "14px",
  border: "2px solid",
  borderColor: "brand.100",
  height: "2rem",
  position: "absolute",
  right: "20px",
  top: "14px",
  color: "brand.100",
  _hover: {
    bg: `brandGray.20`,
  },
};

const imgDeleteBtn = {
      
  bg: "brandGray.20",
  position: "relative",
  left: "240px",
  top: "20px",
  borderRadius: "20px",
  color: "white",
  height: "20px",
  width: "20px",
};

const specializationButton = {
      
  border: "2px solid",
  borderColor: "brand.50",
  bg: "#FFFFFF",
  w: "74px",
  h: "30px",
  borderRadius: "40px",
  fontSize: "14px",
  fontWeight: "600",
  color: "brand.50",
  p: "0px",
};

const serviceButton = {
      
  border: "2px solid",
  borderColor: "brand.50",
  w: "74px",
  h: "30px",
  borderRadius: "40px",
  fontSize: "14px",
  fontWeight: "600",
  p: "0px",
  bgColor: "brand.50",
  color: "white",
};

const newThemePrimary = {
      
  bg: "#0C94AC",
  border: "none",
  fontSize: "14px",
  p: "8px 16px",
  fontWeight: 500,
  rounded: "8px",
  bgColor: "cyprus.500",
  color: "white",
  _hover: { bg: "cyprus.600" },
};

const sunsetFill = {
      
  bg: "sunset.500",
  border: "none",
  fontSize: "14px",
  p: "8px 16px",
  fontWeight: 500,
  rounded: "8px",
  color: "white",
  _hover: { bg: "sunset.600 " },
};

const newThemePrimaryOutline = {
      
  border: "1px solid",
  borderColor: "brand.500",
  fontSize: "14px",
  p: "8px 16px",
  fontWeight: 500,
  rounded: "8px",
  bgColor: "transparent",
  color: "brand.500",
  _hover: { color: "cyprus.600", borderColor: "cyprus.600" },
};

const newThemePrimaryRounded = {
      
  bg: "cyprus.500",
  border: "none",
  fontSize: "14px",
  p: "8px 16px",
  fontWeight: 500,
  rounded: "19px",
  color: "white",
  _hover: { bg: "cyprus.600" },
};

const newThemePrimaryRoundedGrey = {
      
  bg: "#fff",
  p: "8px 16px",
  fontSize: "14px",
  fontWeight: 500,
  rounded: "19px",
  color: "#5E6977",
  border: "1px solid rgba(191, 195, 201, 0.50)",
  _hover: { color: "#0C94AC", borderColor: "#0C94AC" },
};

const newThemePrimaryRoundedRed = {
      
  bg: "#FDF2F2",
  p: "8px 16px",
  fontSize: "14px",
  fontWeight: 500,
  rounded: "19px",
  color: "#C81E1E",
  border: "1px solid #FDE8E8",
  _hover: { borderColor: "#C81E1E" },
};

const appStackLinkPrimary = {
      
  color: "#03CA9D",
  fontSize: "14px",
  fontWeight: "700",
  lineHeight: "20px",
  backgroundColor: "transparent",
  border: "none",
};

const appStackPrimaryFilled = {
      
  color: "#FFF",
  fontSize: "14px",
  fontWeight: 700,
  lineHeight: "20px",
  letterSpacing: "0.14px",
  padding: "16px",
  borderRadius: "24px",
  background: "linear-gradient(90deg, #0C94AC 0.9%, #04FCC4 130.75%)",
  border: "none",
};

const plainBrandPrimaryFilled = {
      
  color: "#fff",
  border: "none",
  lineHeight: "16px",
  borderRadius: "6px",
  fontWeight: 500,
  fontFamily: "Inter",
  background: "var(--chakra-colors-cyprus-500)",
};

const newColorThemePrimary = newThemePrimary;

const spThemeOutline = {
  border: "1px solid",
  borderColor: "brand.500",
  fontSize: "14px",
  p: "8px 16px",
  fontWeight: 500,
  rounded: "8px",
  bgColor: "transparent",
  color: "brand.500",
  _hover: { color: "cyprus.600", borderColor: "cyprus.600" },
};

const cyprus50OutlineTheme = {
      
  border: "1px solid",
  borderColor: "cyprus.100",
  fontSize: "14px",
  p: "8px 16px",
  fontWeight: 500,
  rounded: "8px",
  bgColor: "cyprus.50",
  color: "brand.500",
  _hover: { color: "cyprus.600", borderColor: "cyprus.600" },
};

const brandPrimaryOutline = {
      
  borderColor: "brand.50",
  color: "brand.50",
  bg: "var(--chakra-colors-white)",
  fontSize: "14px",
  p: "8px 16px",
  fontWeight: 500,
  rounded: "8px",
};

const brandPrimaryOutlineSecond = {
      
  borderColor: "cyprus.100",
  color: "cyprus.500",
  bg: "cyprus.50",
  fontSize: "14px",
  p: "8px 16px",
  fontWeight: 500,
  rounded: "8px",
};

const brandPrimaryLinkButton = {
      
  borderColor: "transparent",
  color: "brand.50",
  bg: "transparent",
  textDecor: "none",
  fontSize: "14px",
  fontWeight: 500,
};

const brandGhost = {
      
  borderColor: "transparent",
  color: "brand.50",
  bg: "transparent",
  fontSize: "14px",
  fontWeight: 500,
  rounded: "8px",
  _hover: { bg: "cyprus.50" },
};

const greyFill = {
      
  borderColor: "brandGray.600",
  color: "var(--chakra-colors-white)",
  bg: "brandGray.600",
  fontSize: "14px",
  p: "8px 16px",
  fontWeight: 500,
  rounded: "8px",
};

const lightGreyFill = {
      
  borderColor: "brandGray.71",
  color: "brandGray.950",
  bg: "brandGray.71",
  fontSize: "14px",
  p: "8px 16px",
  fontWeight: 500,
  rounded: "8px",
};

const lightAtlanticFill = {
      
  borderColor: "atlantic.100",
  color: "brand.100",
  bg: "atlantic.100",
  fontSize: "14px",
  p: "8px 16px",
  fontWeight: 500,
  rounded: "8px",
};

const lightRedFill = {
      
  borderColor: "cherryRed.100",
  color: "cherryRed.700",
  bg: "cherryRed.100",
  fontSize: "14px",
  p: "8px 16px",
  fontWeight: 500,
  rounded: "8px",
};

const greyOutline = {
      
  borderColor: "brandGray.101",
  color: "brandGray.400",
  bg: "var(--chakra-colors-white)",
  fontSize: "14px",
  p: "8px 16px",
  fontWeight: 500,
  rounded: "8px",
  _hover: { color: "cyprus.600", borderColor: "cyprus.600" },
};

const whiteOutline = {
      
  border: "1px solid #fff",
  color: "#fff",
  bg: "transparent",
  borderRadius: "8px",
  padding: "6px 16px",
  fontSize: "14px",
  fontWeight: "500",
};

const darkGreyOutline = {
      
  borderColor: "brandGray.400",
  color: "brandGray.400",
  bg: "var(--chakra-colors-white)",
  rounded: "8px",
};

const darkerGreyOutline = {
      
  borderColor: "brandGray.600",
  color: "brandGray.600",
  bg: "var(--chakra-colors-white)",
  rounded: "8px",
};

const greyLinkButton = {
      
  borderColor: "transparent",
  color: "brandGray.400",
  bg: "transparent",
  textDecor: "none",
  fontSize: "14px",
  fontWeight: 500,
};

const dangerFill = {
      
  borderColor: "brandDanger.700",
  color: "var(--chakra-colors-white)",
  bg: "brandDanger.700",
  fontSize: "14px",
  p: "8px 16px",
  fontWeight: 500,
  rounded: "8px",
};

const dangerOutline = {
      
  borderColor: "brandDanger.700",
  color: "brandDanger.700",
  bg: "var(--chakra-colors-white)",
  fontSize: "14px",
  p: "8px 16px",
  fontWeight: 500,
  rounded: "8px",
};

const dangerOutlineSecond = {
      
  borderColor: "cherryRed.100",
  color: "cherryRed.700",
  bg: "cherryRed.50",
  fontSize: "14px",
  p: "8px 16px",
  fontWeight: 500,
  rounded: "8px",
};

const dangerLink = {
      
  color: "cherryRed.700",
  borderColor: "transparent",
  bg: "transparent",
  textDecor: "none",
  fontSize: "14px",
  fontWeight: 500,
};

const approveFill = {
      
  border: "1px solid",
  borderColor: "#2C885C",
  fontSize: "14px",
  p: "8px 16px",
  fontWeight: 500,
  rounded: "8px",
  bgColor: "#2C885C",
  color: "#FFFFFF",
};

export const buttonRecipe = defineRecipe({
  //   variants: { outline },
  base: baseStyle,
  // variants list
  variants: {
    variant: {
    discard,
    brandPrimary,
    modal,
    danger,
    imgDeleteBtn,
    specializationButton,
    serviceButton,
    newThemePrimary,
    newThemePrimaryOutline,
    newThemePrimaryRounded,
    newThemePrimaryRoundedGrey,
    newThemePrimaryRoundedRed,
    appStackLinkPrimary,
    appStackPrimaryFilled,
    newColorThemePrimary,
    spThemeOutline,
    brandPrimaryOutline,
    brandPrimaryOutlineSecond,
    brandPrimaryLinkButton,
    plainBrandPrimaryFilled,
    greyOutline,
    greyLinkButton,
    greyFill,
    dangerFill,
    dangerOutline,
    whiteOutline,
    dangerOutlineSecond,
    dangerLink,
    lightGreyFill,
    lightRedFill,
    lightAtlanticFill,
    darkGreyOutline,
    darkerGreyOutline,
    cyprus50OutlineTheme,
    approveFill,
    sunsetFill,
    brandGhost,
  },
  size: {
      sm: sm,
      md: md,
    },
},
defaultVariants: {
    variant: "brandPrimary",
    size: "md",
  },
});