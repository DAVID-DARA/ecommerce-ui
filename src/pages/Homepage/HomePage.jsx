import React from 'react';
import PropTypes from 'prop-types';

import styles from './HomePage.module.css';
import Navigation from '../../components/Navbar/Navigation';
import summerFit from '../../assets/images/test.webp';
import summerFitTwo from '../../assets/images/main.webp';
import starIcon from '../../assets/new-icons/star-ico.png';
import rightArrowIcon from '../../assets/new-icons/right-arrow.png';
import Preloader from '../../components/Preloader/Preloader';
import useAssetsLoader from '../../hooks/useAssetsLoader';

const HomePage = () => {
  const assets = [summerFit, summerFitTwo, starIcon, rightArrowIcon];
  const assetsLoading = useAssetsLoader(assets);

  if (assetsLoading) {
    return <Preloader />;
  }

  return (
    <div className={styles.home}>
      <Navigation />
      <div className={styles.sectionOne}>
        <div className={styles.main}>
          <div className={styles.homeLeft}>
            <div className={styles.summerSaleInfo}>
              <img src={starIcon} alt="Star Icon" width="20px" />
              <span className={styles.summerSaleInfoText}>50% OFF Summer Super Sale</span>
            </div>
            <p className={styles.infoText}>Step into Style: Your</p>
            <p className={styles.infoText}>Ultimate Fashion Destination</p>
            <span className={styles.infoSpanText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
            </span>
            <button className={styles.shop}>
              Shop Now <img src={rightArrowIcon} alt="Right Arrow" width="20px" />
            </button>
          </div>
          <div className={styles.homeRight}>
            <img src={summerFit} className={styles.homeMainImgOne} alt="Summer sales outfit" width="350px" />
            <img src={summerFitTwo} className={styles.homeMainImgTwo} alt="Main outfit" width="415px" />
          </div>
        </div>
      </div>
    </div>
  );
};

HomePage.propTypes = {
  starIcon: PropTypes.string.isRequired,
  rightArrowIcon: PropTypes.string.isRequired,
  summerFit: PropTypes.string.isRequired,
  summerFitTwo: PropTypes.string.isRequired,
};

export default HomePage;
