import Button from '@mui/material/Button';
import type { NextPage } from 'next';
import Head from 'next/head';

import { MobxComponentText } from '~/components/MobxComponentText';
import { MyCard, MyComponent } from '~/components/MyCard';
import { TestComponent } from '~/components/TestComponent';
import styles from '~/styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>MVP App</title>

        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <TestComponent name={'onrad'} />
        <MyComponent>
          <p>test styled component</p>
        </MyComponent>
        <MobxComponentText />
        <MyCard />
        <Button variant="contained">Hello World</Button>
      </main>
    </div>
  );
};

export default Home;
