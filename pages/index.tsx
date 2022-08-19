import Head from 'next/head';
import React, { FC } from 'react';
import Hello from '@components/Hello';

const Home: FC = () => (
  <div>
    <Head>
      <title>Welcome to Projekt Mendota</title>
      <meta name="description" content="Next app template" />
    </Head>
    <main>
      <Hello message="Hello World!" />
    </main>
  </div>
);

export default Home;
