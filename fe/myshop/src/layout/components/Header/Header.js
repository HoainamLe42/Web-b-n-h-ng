import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import Button from '~/components/Button';
import { Link } from 'react-router-dom';
import { faTruckFast } from '@fortawesome/free-solid-svg-icons';
import config from '~/config';
import { fomater } from '~/utils/fomater';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header-top')}>
                <div className="container">
                    <div className={cx('header-main')}>
                        <div className="row">
                            <div className="col-6">
                                <div className={cx('header-left')}>
                                    <div>
                                        <FontAwesomeIcon className={cx('icon-ship')} icon={faTruckFast} />
                                        <span>hoainamle@gmail.com</span>
                                    </div>
                                    <div className={cx('separator')}></div>
                                    <div className={cx('header-left__text')}>
                                        Miễn phí ship đơn từ {fomater(200000)}
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <ul className={cx('header-right')}>
                                    <li>
                                        <Link to={''}>
                                            <FontAwesomeIcon className={cx('icon')} icon={faFacebook} />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={''}>
                                            <FontAwesomeIcon className={cx('icon')} icon={faInstagram} />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={''}>
                                            <FontAwesomeIcon className={cx('icon')} icon={faTwitter} />
                                        </Link>
                                    </li>
                                    <Button
                                        className={cx('log-in')}
                                        text
                                        to={config.routes.login}
                                        leftIcon={<FontAwesomeIcon className={cx('icon')} icon={faUser} />}
                                    >
                                        Đăng nhập
                                    </Button>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h2>Header</h2>
        </div>
    );
}

export default Header;
