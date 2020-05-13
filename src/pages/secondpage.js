import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <div>
        Page 2
        <div>
          <Link to={""}>Home Page</Link>
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
