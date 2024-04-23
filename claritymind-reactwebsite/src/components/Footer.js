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
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Contact Us Here!</h2>
                        <Link to='/login'>claritymind.ai@mail.com</Link>
                        <Link to='/profile'>123-456-7890</Link>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link className='social-logo'>
                            Clarity Mind <i className='fab fa-typo3' />
                        </Link>
                    </div>
                    <small className='website-rights'>Clarity Mind © 20xx</small>
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
