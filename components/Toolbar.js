import styles from '../styles/Toolbar.module.css'

import {useRouter} from 'next/router';


const Toolbar = () => {
    const router = useRouter();
    return(
        <div className={styles.main}>
            <div onClick={()=>router.push('/')}>Home</div>
            <div onClick={()=>router.push('/Feed/1')}>FEED</div>
            <div onClick={()=>router.push('/Eom')}>EOM</div>
            <div onClick={()=>window.location.href ='https://twitter.com'}>TWITTER</div>
        </div>
    )
}

export default Toolbar;