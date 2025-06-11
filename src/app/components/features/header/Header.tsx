import { wrapOnlyElementSelectors } from "@/lib/utils/convertCSSSelectorsToClasses";
import StaticHeader from "../../content/Header/StaticHeader";

interface HeaderProps {
  html: string;
  isStatic: boolean;
}

export default async function Header({ html, isStatic }: HeaderProps) {
  if(isStatic) return <StaticHeader />  
  const wrappedHtml = await wrapOnlyElementSelectors(html, '#scoped-wrapper');
  return <div id="scoped-wrapper" dangerouslySetInnerHTML={{ __html: wrappedHtml }} />;
}
