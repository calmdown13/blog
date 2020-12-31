import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Header from "./Header";
import Post from "./Post";
import Summary, { PostSummary } from "./Summary";

interface Props {
  summaries: PostSummary[]
}

export const Routes: React.FC<Props> = ({ summaries }) => {
  console.log(summaries)
  return (
    <BrowserRouter>
      <>
        <Header />
        <Switch>
          <Route path="/posts/:slug">
            <Post summaries={summaries} />
          </Route>
          <Route path="/">
            {summaries.map((summary) => <Summary summary={summary} key={summary.id} />)}
          </Route>
        </Switch>
      </>
    </BrowserRouter>
  );
}
