import Head from 'next/head';
import SubscribeBlock from '../components/subscribe';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sue's Diary ~ Suu no Nikki</title>
      </Head>

      <main className="box">
        <img src="/static/logo.svg" className="logo" />

        <p className="soon">Coming soon...</p>

        <SubscribeBlock />
      </main>
    </div>
  );
}
