import React from 'react';
import { Link } from "react-router-dom";
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";

export interface PostSummary {
  id: string,
  title: string,
  slug: string,
  date: string,
  emoji: string,
}

interface Props {
  summary: PostSummary
}

export const Summary: React.FC<Props> = ({ summary }) => {
  return (
    <div style={{ margin: "auto", maxWidth: "1024px" }}>
      <Link to={`/posts/${summary.slug}`} style={{ textDecoration: 'none', color: 'black' }}>
        <h1>{summary.emoji} {summary.title} <span style={{color: "#9B9D9A"}}>- {summary.date.split("-").join("/")}</span></h1>
      </Link>
      <hr style={{ borderTop: "dashed 5px" }} />
    </div>
  );
}

export default Summary;