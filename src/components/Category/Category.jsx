import React from "react";
import { Link } from "react-router-dom";
import { Segment, Menu } from "semantic-ui-react";

const Category = ({ param }) => {
  return (
    <div>
      <Link to={`/category/${param}`}>
        <Segment inverted>
          <Menu inverted pointing secondary>
            <Menu.Item name={param} />
          </Menu>
        </Segment>
      </Link>
    </div>
  );
};
export default Category;
