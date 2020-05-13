import React from "react";
import PropTypes from "prop-types";
import Highlight, { defaultProps } from "prism-react-renderer";

const Code = ({ codeString, language }) => {
  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={undefined}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div>
          <pre className={className} style={{ position: "relative", ...style }}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })} key={i}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} key={key} />
                ))}
              </div>
            ))}
          </pre>
        </div>
      )}
    </Highlight>
  );
};

Code.propTypes = {
  codeString: PropTypes.string,
  language: PropTypes.string,
  title: PropTypes.string,
};

export default Code;
