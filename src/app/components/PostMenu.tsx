import React from "react";
import Title from "./Title";
import BlogPost from "./BlogPost";

function PostMenu() {
  return (
    <div className="relative h-36 lg:h-48 border-t border-gray-200 bg-gray-50">
      <Title
        title="Blog"
        desc="A collection of my thoughts and writings."
      />
      <BlogPost />
    </div>
  );
}

export default PostMenu;
