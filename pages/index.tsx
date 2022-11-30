import { FC } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Layout from '../components/layout';
import VideoCard from '../components/video-card';

import styles from './index.module.css';

interface VideosResponse {
  videos: Video[];
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const videosResponse: VideosResponse = await fetch(
    `https://www.globalcyclingnetwork.com/api/videos`
  ).then((response) => response.json());

  return { props: { videos: videosResponse.videos ?? [] } };
};

type Props = {
  videos: Video[];
};

const Home: FC<Props> = ({ videos }) => {
  return (
    <Layout>
      <Head>
        <title>Mobile Nav</title>
        <meta name="description" content="Mobile Nav code task" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {videos && 
        <div className={styles['videos']}>
          <h2 className={styles['videos__title']}>Videos</h2>
          <h3 className={styles['videos__count']}>{videos.length} video{videos.length > 1 ? 's' : ''}</h3>
          {videos.map((video) => (
            <VideoCard {...video} key={video._id} />
          ))}
        </div>
      }
    </Layout>
  );
};

export default Home;
