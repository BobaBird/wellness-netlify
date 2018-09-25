import React from 'react';

const PostListing = ({ post }) => <article  >
    <h2>{post.frontmatter.title}</h2>
    <span>
        <h2>
            {post.frontmatter.date}
        </h2>
    </span>   
    <h1 dangerouslySetInnerHTML={{  __html: post.html }}  />
</article>
;

export default PostListing;