import React, { useEffect, useState } from 'react';
import { Routes } from "./components/Routes";
import { PostSummary } from "./components/Summary";
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";

const NOTION_BLOG_ID = 'c8a5edd24277496c927cf011353c283b'

export const getPostSummaries = async (): Promise<PostSummary[]> => {
  return await fetch(
    `https://notion-api.splitbee.io/v1/table/${NOTION_BLOG_ID}`
  ).then((res) => res.json());
}

export const App: React.FC = () => {
  const [summaries, setSummaries] = useState<PostSummary[]>([])

  useEffect(() => {
    async function f() {
      const summaries = await getPostSummaries();
      setSummaries(summaries.reverse())
    }
    f();
  }, [])

  return (
    <div style={{ marginLeft: "10px", marginRight: "10px" }} >
      <Routes summaries={summaries} />
    </div>
  );
}

export default App;
