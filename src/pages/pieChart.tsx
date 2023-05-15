import { data } from '../components/pie';

import dynamic from 'next/dynamic';

import styles from '@/styles/Home.module.css';

const MyResponsivePie = dynamic(() => import('../components/pie'), {
  ssr: false,
});

const Chart = () => {
  return (
    <div className={styles.divchart}>
      <MyResponsivePie data={data} />
    </div>
  );
};
export default Chart;
