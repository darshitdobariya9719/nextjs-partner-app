import { JSDOM } from "jsdom";
import css from "css";
// import { writeFile } from "fs/promises";
// import path from "path";

export async function wrapOnlyElementSelectors(
  html: string,
  wrapperSelector: string
): Promise<string> {
  const dom = new JSDOM(html);
  const document = dom.window.document;

  // Collect and remove existing styles
  const styleTags = Array.from(document.querySelectorAll("style"));
  let combinedCSS = "";
  styleTags.forEach((tag) => {
    combinedCSS += tag.textContent || "";
    tag.remove();
  });

  const ast = css.parse(combinedCSS);

  // Helper: should this selector be wrapped?
  function shouldWrap(selector: string): boolean {
    // Break into parts (e.g. 'div[type="button"] .btn' → ['div[type="button"]', '.btn'])
    const parts = selector.split(/\s+/);

    // If **any** part contains a class or ID, skip wrapping
    return parts.every((part) => {
      return !part.includes(".") && !part.includes("#");
    });
  }

  // Prefix selector if needed
  function wrapSelector(selector: string): string {
    return shouldWrap(selector) ? `${wrapperSelector} ${selector}` : selector;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function processRules(rules: any[]): void {
    rules.forEach((rule) => {
      if (rule.type === "rule" && rule.selectors) {
        rule.selectors = rule.selectors.map(wrapSelector);
      } else if (
        (rule.type === "media" || rule.type === "supports") &&
        rule.rules
      ) {
        processRules(rule.rules);
      }
    });
  }

  if (ast.stylesheet?.rules) {
    processRules(ast.stylesheet.rules);
  }

  // Create new scoped <style>
  const newStyle = document.createElement("style");
  newStyle.textContent = css.stringify(ast);
  document.head.appendChild(newStyle);

  // Wrap all body content
  const wrapper = document.createElement("div");
  if (wrapperSelector.startsWith("#")) {
    wrapper.id = wrapperSelector.slice(1);
  } else if (wrapperSelector.startsWith(".")) {
    wrapper.className = wrapperSelector.slice(1);
  }

  while (document.body.firstChild) {
    wrapper.appendChild(document.body.firstChild);
  }
  document.body.appendChild(wrapper);

  //     const outputPath = path.join(process.cwd(), "public", "generated", "wrapped.html");
  //   await writeFile(outputPath, dom.serialize(), "utf8");

  return dom.serialize();
}
