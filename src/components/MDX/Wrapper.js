import { MDXProvider } from "@mdx-js/react";
import PropTypes from "prop-types";
import React from "react";
import Code from "./Code";

const components = {
  // eslint-disable-next-line react/display-name
  "p.inlineCode": props => <span>{props.children}</span>,
  pre: ({ children: { props } }) => {
    if (props.mdxType === "code") {
      return (
        <Code
          codeString={props.children.trim()}
          language={props.className && props.className.replace("language-", "")}
          {...props}
          theme={undefined}
        />
      );
    }
  },
};

export const Wrapper = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
);

Wrapper.propTypes = {
  element: PropTypes.node,
};
