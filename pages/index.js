import React from 'react';

import App from './bootcamp/warmup';

// import App from './react/1-hello-world';
// import App from './react/2-components-composition';
// import App from './react/3-props';
// import App from './react/3-props/ChildrenExample';
// import App from './react/4-typechecking';
// import App from './react/5-jsx';
// import App from './react/6-state'; // gotcha.js
// import App from './react/7-lifecycle-methods';
// import App from './react/7-lifecycle-methods/Fetcher';
// import App from './react/8-context'; // gotcha.js
// import App from './react/9-performance';
// import App from './react/gotchas/setStateGotcha';

// import App from './relay/1-hello-world/HelloWorld';
// import App from './relay/2-query-renderer/Example';
// import App from './relay/3-fragments/App';

export default () => (
  <React.Fragment>
    <style global jsx>{`
      body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
        background-color: #eee;
      }

      .App {
        max-width: 750px;
        margin: 0 auto;
        padding: 50px 100px;
        background-color: white;
      }
    `}</style>
    <div className="App">
      <App />
    </div>
  </React.Fragment>
);
