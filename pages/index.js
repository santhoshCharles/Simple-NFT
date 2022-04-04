import styles from '../styles/Home.module.css'
import { Button, DatePicker } from 'antd';
import 'antd/dist/antd.css';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter()
  useEffect(() => {
    router.push('/Login');
  }, [])
  return (
    <div>
    </div>
  )
}
