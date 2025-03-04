import styles from '../../styles/Header.module.css';
import CardImg from '../../assets/cardimg.webp';
import Image from 'next/image'

const Header = () => {
    return (
        <div className={styles.HeroContainer}>
            <div className={styles.HeroCardContainer}>
                <div className={styles.Card}>
                    <div className={styles.CardImageContainer}>
                        <Image
                            src={CardImg}
                            alt="Image container pic"
                            width={500}
                            height={350}
                        />
                    </div>

                </div>
            </div>
            <div className={styles.HeroTextConatiner}>
                <div className={styles.HeroTextContainer}>
                    <p>Hey, there !</p>
                    <p>We are,</p>
                    <p className={styles.herotextBigfont}>
                        Students' <p>Chapter CSE</p>{' '}
                    </p>
                    <p>and this is our,</p>
                    <p className={styles.herotextHighlight}>Official Website</p>
                </div>
            </div>
        </div>
    );
};

export default Header;
