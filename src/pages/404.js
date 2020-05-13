import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <>
        <h1>Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist.</p>
      </>
    );
  }
}

NotFoundPage.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object,
};

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
