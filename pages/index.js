import Head from 'next/head'

export default () => (
  <div>
    <Head>
      <title>My page title</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="container">
      <div className="content">
        The Parametric Press
      </div>
    </div>
    <style global jsx>{`
      .container {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
      }
      .content {
        flex: none;
        max-width: 50%;
        -webkit-animation-name: spin;
        -webkit-animation-duration: 40000ms;
        -webkit-animation-iteration-count: infinite;
        -webkit-animation-timing-function: linear;
        -moz-animation-name: spin;
        -moz-animation-duration: 40000ms;
        -moz-animation-iteration-count: infinite;
        -moz-animation-timing-function: linear;
        -ms-animation-name: spin;
        -ms-animation-duration: 40000ms;
        -ms-animation-iteration-count: infinite;
        -ms-animation-timing-function: linear;
        -o-transition: rotate(3600deg);
      }

      @-moz-keyframes spin {
          from { -moz-transform: rotate(0deg); }
          to { -moz-transform: rotate(360deg); }
      }
      @-webkit-keyframes spin {
          from { -webkit-transform: rotate(0deg); }
          to { -webkit-transform: rotate(360deg); }
      }
      @keyframes spin {
          from {transform:rotate(0deg);}
          to {transform:rotate(360deg);}
      }
      }
    `}</style>
    <style global jsx>{`
      body {
        {/* background: black; */}
      }
    `}
    </style>
  </div>
)
