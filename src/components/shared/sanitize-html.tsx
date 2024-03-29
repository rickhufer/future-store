import { createElement, HTMLAttributes } from "react";
import sanitize from "sanitize-html";

type SanitizeHTMLProps = {
  children: string;
  tag: string;
} & HTMLAttributes<HTMLElement>;

export function SanitizeHTML({ children, tag, ...rest }: SanitizeHTMLProps) {
  const sanitizeHTML = sanitize(children, {
    allowedTags: [],
  });

  return createElement(
    tag,
    {
      ...rest,
    },
    sanitizeHTML
  );
}
