import { useEffect } from 'react';
import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Home() {
  useEffect(() => {
    // Load Dialogflow Messenger styles
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/themes/df-messenger-default.css';
    document.head.appendChild(link);

    // Load Dialogflow Messenger script
    const script = document.createElement('script');
    script.src = 'https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
  <Header title={["Hello, I'm myAster, your virtual assistant.", <br key="break" />, "How can I assist you today?"]} />
</main>


      <Footer />

      {/* Dialogflow Messenger */}
      <df-messenger
        project-id="aster-prod-375112"
        agent-id="35520a2b-8518-4033-885d-67c474e3292a"
        language-code="en"
        max-query-length="-1"
        allow-feedback="all"
        style={{
          zIndex: 999,
          position: 'fixed',
          bottom: '16px',
          right: '16px',
          '--df-messenger-font-color': '#000',
          '--df-messenger-font-family': 'Roboto',
          '--df-messenger-chat-background': '#fff',
          '--df-messenger-message-user-background': '#C8E6C9',
          '--df-messenger-message-bot-background': '#E7EFFE',
        }}
      >
        <df-messenger-chat-bubble chat-title="myAster Assistant"></df-messenger-chat-bubble>
      </df-messenger>
    </div>
  );
}
