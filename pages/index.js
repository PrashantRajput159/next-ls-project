import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useDispatch,useSelector} from 'react-redux';
import { fetchposts } from '../store/actions/postAction'; 
import { useEffect } from 'react';


export default function Home() {

  const dispatch = useDispatch();

  const {posts} = useSelector(state=>state.post);

  useEffect(()=>{
    dispatch(fetchposts())
  },[])

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Next.js!
        </h1>
        {posts && posts.map(item=>(
          <h1 key={item}>{item}</h1>
        )) }
      </main>
    </div>
  )
}
