// import { data } from '../components/line';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { io } from 'socket.io-client';
import { useSpring, animated } from 'react-spring';

const socket = io('http://localhost:3005/');

import styles from '@/styles/Home.module.css';

const MyResponsiveLine = dynamic(() => import('../components/line'), {
  ssr: false,
});

const Chart = () => {
  console.log('home');

  const [data, setData] = useState<any>([]);
  const [animatedData, setAnimatedData] = useState(data);
  const [spring, setSpring] = useSpring(() => ({
    x: 1,
    from: { x: 0 },
    reset: true,
    reverse: false,
    delay: 0,
    config: { duration: 2000 },
    onRest: () => {
      // Once the animation is complete, update the data
      setAnimatedData(data);
      console.log('animating again');
    },
  }));
  useEffect(() => {
    console.log({ data });
    const animationTimeouts = data['data'].map((_: any, index: number) => {
      return setTimeout(() => {
        setSpring({ x: index });
      }, index * 1000); // Apply a delay of 1 second per index
    });
    console.log('animation timeout');
    return () => {
      animationTimeouts.forEach((timeout: any) => clearTimeout(timeout));
    };
  }, [data]);

  useEffect(() => {
    socket.emit('scrape');
  }, []);
  socket.on('newsData', async (dataResponse) => {
    await setData(dataResponse);
    console.log(data['data']);
  });

  useEffect(() => {
    setAnimatedData(data);
  }, [data]);

  return (
    <div className={styles.divchart}>
      <p>Line Chart Page</p>

      <MyResponsiveLine
        data={animatedData}
        {...spring}
      />
    </div>
  );
};
export default Chart;
