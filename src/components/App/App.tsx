// src/components/App/App.tsx
import styles from './App.module.css';
import CafeInfo from '../CafeInfo/CafeInfo';

const App = () => {
  return (
    <div className={styles.app}>
      <CafeInfo />
    </div>
  );
};

export default App;