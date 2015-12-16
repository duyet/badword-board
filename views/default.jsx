var React = require('react');

var DefaultLayout = React.createClass({
  render: function() {
    var githubStyle ={
      position: 'fixed',
      top: 0,
      right: 0,
      border: 0,
      zIndex: 200
    };
    return (
      <html>
        <head>
          <meta charset="utf-8"></meta>

          <title>{this.props.title}</title>

          <meta name="description" content="Auto collect bad words to board."></meta>
          <meta name="author" content="Van-Duyet Le"></meta>
          <meta name="viewport" content="width=device-width, initial-scale=1"></meta>

          <link rel="stylesheet" type="text/css" href="/css/bootstrap.min.css"></link>
          <link rel="stylesheet" type="text/css" href="/css/style.css"></link>
        </head>
        <body>
          <header className="text-center">
            <h1 className="title">Bad Words Board</h1>
            <div>Auto collect bad words in the internet.</div>
            <div></div>
          </header>
          <div className="grid text-center Rejections">{this.props.children}</div>
          <script src="/js/masonry.js"></script>
          <script src="/js/script.js"></script>
          <script src="/js/googleAnalytics.js"></script>
        </body>
      </html>
    );
  }
});

module.exports = DefaultLayout;
