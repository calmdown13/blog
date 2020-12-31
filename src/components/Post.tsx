import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { BlockMapType, NotionRenderer } from "react-notion";
import { PostSummary } from "./Summary";
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";

export const getPostContent = async (postId: string) => {
  return await fetch(
    `https://notion-api.splitbee.io/v1/page/${postId}`
  ).then((res) => res.json());
}

interface UrlParams {
  slug: string
}

interface Props {
  summaries: PostSummary[]
}

export const Post: React.FC<Props> = ({ summaries }) => {
  const { slug } = useParams<UrlParams>();
  const [content, setContent] = useState<null | BlockMapType>(null);
  const summary = summaries.find(s => s.slug === slug);

  useEffect(() => {
    async function f() {
      if (summary) {
        const content = await getPostContent(summary.id);
        setContent(content)
      }
    }
    f();
  }, [summary])

  if (summary && content) {
    return (
      <div style={{ margin: "auto", maxWidth: "1024px" }}>
        <h1>{summary.title}</h1>
        <hr />
        {content ? <NotionRenderer blockMap={content} /> : <br />}
      </div>
    );
  } else {
    return (
      <div style={{ margin: "auto", maxWidth: "1024px" }}>
      </div>
    )
  }
}

export default Post;