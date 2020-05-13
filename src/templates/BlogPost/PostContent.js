import React from "react";
import PropTypes from "prop-types";

import { MDXRenderer } from "gatsby-plugin-mdx";

const WrappedComponent = React.forwardRef(function BlogPostContent(
  { data },
  ref
) {
  const post = data.mdx;

  return (
    <main ref={ref}>
      <article>
        <MDXRenderer>{post.body}</MDXRenderer>
      </article>
    </main>
  );
});

WrappedComponent.propTypes = {
  data: PropTypes.object,
};

export default WrappedComponent;
