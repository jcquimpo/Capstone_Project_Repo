import React from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './styles/Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-information'>
                <p className='footer-information-heading'>
                    Feel Free to Send a Message!
                </p>
                <p className='footer-information-text'>
                    Talk with Us!
                </p>
                <div className='input-areas'>
                    <form>
                        <input type='email' name='email' placeholder='Email' className='footer-input' />
                        <Button buttonStyle='btn--outline'>Submit</Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/login'>How it Works 1</Link>
                        <Link to='/profile'>How it Works 2</Link>
                        <Link to='/register_client'>How it Works 3</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/login'>How it Works 1</Link>
                        <Link to='/profile'>How it Works 2</Link>
                        <Link to='/register_client'>How it Works 3</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/login'>How it Works 1</Link>
                        <Link to='/profile'>How it Works 2</Link>
                        <Link to='/register_client'>How it Works 3</Link>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link className='social-logo'>
                            MindEase <i className='fab fa-typo3' />
                        </Link>
                    </div>
                    <small className='website-rights'>MindEase © 20xx</small>
                    <div className='social-icons'>
                        <Link className='social-icon-link' to='/' target='_blank' aria-label='Facebook'>
                            <i className='fab fa-facebook-f'></i>
                        </Link>
                        <Link className='social-icon-link' to='/' target='_blank' aria-label='Instagram'>
                            <i className='fab fa-instagram'></i>
                        </Link>
                        <Link className='social-icon-link' to='/' target='_blank' aria-label='LinkedIn'>
                            <i className='fab fa-linkedin'></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
