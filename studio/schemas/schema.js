// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

import schemaTypes from "all:part:@sanity/base/schema-type";

import blockContent from "./blockContent";
import category from "./category";
import resentWork from "./resentWork";
import post from "./post";
import author from "./author";
import tag from "./tag";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    post,
    author,
    category,
    resentWork,
    blockContent,
    tag
  ])
});
