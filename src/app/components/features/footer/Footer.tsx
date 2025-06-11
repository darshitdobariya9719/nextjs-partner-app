import StaticFooter from "../../content/Footer/StaticFooter";

interface FooterProps {
  html: string;
  isStatic: boolean;
}

export default function Footer({ html,isStatic }: FooterProps) {
  if(isStatic) return <StaticFooter />
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
