import { Link } from 'react-router-dom';
import Styles from './welcome.module.css';
export default function Welcome({name}) {
    return(
        <>
            <div className={Styles.container}>
                <div className={Styles.greeting}>
                    <span>
                        Welcome {name}!
                    </span>
                    <Link to='/rooms' style={{textDecoration:'none'}}>
                        <span className={Styles.continue}>
                            Continue   
                        </span>
                    </Link>
                </div>

            </div>
        </>
    )
}