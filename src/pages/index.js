import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;

    const posts = data.posts.edges;

    return (
      <div>
        Home Page
        <div>
          <Link to={"secondpage"}>Go to Page 2</Link>
          <div>
            {posts.map(post => {
              const slug = post.node.fields.slug;
              const title = post.node.frontmatter.title;
              return <Link to={slug}>{title}</Link>;
            })}
          </div>
        </div>
      </div>
    );
  }
}

BlogIndex.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object,
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    posts: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`;
