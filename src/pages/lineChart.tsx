// import { data } from '../components/line';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import { io } from 'socket.io-client';

const socket = io('http://localhost:3005/');

import styles from '@/styles/Home.module.css';

const MyResponsiveLine = dynamic(() => import('../components/line'), {
  ssr: false,
});

const Chart = () => {
  console.log('home');

  const [data, setData] = useState(null);

  socket.on('newsData', (dataResponse) => {
    setData(dataResponse);
    console.log(data);
  });

  return (
    <div className={styles.divchart}>
      <button
        onClick={() => {
          console.log('scrape');
          socket.emit('scrape');
        }}
      >
        Click
      </button>
      <p>Line Chart Page</p>
      {data && <MyResponsiveLine data={data} />}
    </div>
  );
};
export default Chart;
