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

  const handleClearStorage = () => {
    localStorage.clear();
    alert('Local storage cleared');
  };

  const handleReload = () => {
    location.reload();
  };

  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title={["Hello, I'm myAster, your virtual assistant.", <br key="break" />, "How can I assist you today?"]} />
        
        {/* Button to clear localStorage */}
        <button onClick={handleClearStorage}>Clear Local Storage</button>

        {/* Button to reload the page */}
        <button onClick={handleReload}>Reload Page</button>

        <button onClick={() => location.reload()}>Start New Chat</button>
      </main>

      <Footer />

      {/* Dialogflow Messenger */}
      <df-messenger
        project-id="aster-prod-375112"
        agent-id="8226ecbb-5838-41c6-bffb-1b1730bb1d0d"
        language-code="en"
        max-query-length="-1"
        style={{
          zIndex: 999,
          position: 'fixed',
          bottom: '16px',
          right: '16px',
          '--df-messenger-font-color': '#FFF',
          '--df-messenger-font-family': 'Google Sans',
          '--df-messenger-chat-background': '#EEF7EE',
          '--df-messenger-message-user-background': '#097138',
          '--df-messenger-message-bot-background': '#fff',
        }}
      >
        <df-messenger-chat-bubble chat-title="myAster Assistant"></df-messenger-chat-bubble>
      </df-messenger>
    </div>
  );
}
