import classNames from "classnames/bind";
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p9-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/94e1267b55fd9631f367cdc8bc167996~tplv-tiktokx-cropcenter:300:300.webp?dr=14577&refresh_token=420882f3&x-expires=1747310400&x-signature=uhtAO59Sdy8oZtUIvzcYGZjmPiw%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=c1333099&idc=sg1" alt="Hoaa" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}
export default AccountItem;