import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/themes/df-messenger-default.css"
        />
        <script
          src="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js"
          defer
        ></script>
      </Head>

      <Component {...pageProps} />

      {/* Dialogflow Messenger */}
      <df-messenger
        project-id="aster-prod-375112"
        agent-id="8226ecbb-5838-41c6-bffb-1b1730bb1d0d"
        language-code="en"
        max-query-length="-1"
      >
        <df-messenger-chat chat-title="myAster"></df-messenger-chat>
      </df-messenger>

      <style jsx>{`
        df-messenger {
          z-index: 999;
          position: fixed;
          --df-messenger-font-color: #000;
          --df-messenger-font-family: Google Sans;
          --df-messenger-chat-background: #f3f6fc;
          --df-messenger-message-user-background: #d3e3fd;
          --df-messenger-message-bot-background: #fff;
          bottom: 0;
          right: 0;
          top: 0;
          width: 350px;
        }
      `}</style>
    </>
  );
}

export default MyApp;
