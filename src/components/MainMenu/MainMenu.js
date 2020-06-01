import React, {Component} from 'react';
import styles from './MainMenu.scss';
import { Link } from "react-router-dom";
import classNames from 'classnames/bind';
import menubar from './../../images/menubar.png';
import cross from './../../images/cross.png';


const cx = classNames.bind(styles);

class MainMenu extends Component {
  constructor(props){
    super(props);
    this.state = {
      menubar: false,
    }
  }

  handleClickMenubar = () => {
    this.setState({menubar: true});
  }

  handleClickCross = () => {
    this.setState({menubar: false});
  }

  render() {
    return (
      <div>
        { this.state.menubar === true ?
            <div className={cx('short-back')}>
              <div className={cx('cross-div')} onClick={this.handleClickCross}><img src={cross} alt="cross" className={cx('cross')}/></div>
              <div className={cx('hidden')}>
                <div className={cx('hidden-about')}><Link to="/about" className={cx('link')}>About</Link></div>
                <div className={cx('hidden-work')}>Work</div>
              </div>
            </div>
            :
            <div className={cx('menu-back')}>
              <div className={cx('menu-context')}>
                <div className={cx('menu-kayin')}><Link to="/" className={cx('link')}>Kayin</Link></div>
                <div className={cx('under-menu')}>
                  <div className={cx('menubar-div')} onClick={this.handleClickMenubar}><img src={menubar} alt="menubar" className={cx('menubar')}/></div>
                  <div className={cx('work-menu')}>Work</div>
                  <div className={cx('about-menu')}><Link to="/about" className={cx('link')}>About</Link></div>
                </div>
              </div>
            </div>
        }
      </div>
    );
  }
}

export default MainMenu;
