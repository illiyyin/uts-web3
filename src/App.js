import {BrowserRouter ,  Switch} from "react-router-dom";
import Header from "./Header";
import Blog from "./Blog";
import React, { Component } from 'react';

//install bootstrap dulu
import 'bootstrap/dist/css/bootstrap.min.css';

// Ini merupakan functional component
// https://getbootstrap.com/docs/4.4/examples/navbar-static/
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/about">
            About
          </Route>
           {/* merubah component={BlogDetail} */}
          <Route path="/blog/:articleId" component={BlogDetail} />
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/">
            Home
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
// export default Blog;
