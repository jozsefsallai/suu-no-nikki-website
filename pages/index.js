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

        <p>
          A plucky young girl goes on an extraordinary adventure that changes her life forever.
          Will she understand the concepts of true friendship and responsibility? Follow Sue on
          her journey to self-discovery and personal growth in this fun retro platformer.
        </p>

        <p className="soon">Coming soon...</p>

        <hr />

        <SubscribeBlock />
      </main>
    </div>
  );
}
