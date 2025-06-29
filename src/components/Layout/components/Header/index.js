import { Children, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass, faEllipsisVertical, faEarthAsia, faCircleQuestion, faKeyboard } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import Button from '~/components/Button';
import {Wrapper as PopperWrapper} from '~/components/Popper';
import styles from './Header.module.scss';
import images from '~/assets/images';
import AccountItem from '~/components/AccountItem';
import Menu from '~/components/Popper/Menu';
import { data } from 'react-router-dom';


const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia}/>,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion}/>,
        title: 'Feedback and Help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard}/>,
        title: 'Keyboard shortcuts',
    }
];

function Header() {

    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 0)
    }, []);
    
    // Handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change language
                break;
            default:
        }
    };

    return (
        <header className={cx('warpper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt='Tiktok' />
                </div>
                <Tippy 
                    interactive
                    // visible={searchResult.length > 0}
                        render={attrs => (
                                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                    <PopperWrapper> 
                                        <h4 className={cx('search-tittle')}>
                                            Accounts
                                        </h4>
                                        <AccountItem/>
                                        <AccountItem/>
                                        <AccountItem/>
                                    </PopperWrapper>
                                </div>
                        )}
                    >
                    <div className={cx('search')}>
                        <input placeholder='Search accounts and videos' spellCheck={false} />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('actions')}>
                    <Button text>Upload</Button>
                    <Button primary>Log in</Button>

                    <Menu items={MENU_ITEMS} onChange={handleMenuChange}> 
                        <button className={cx('more-button')}>
                            <FontAwesomeIcon icon={faEllipsisVertical}/>
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;