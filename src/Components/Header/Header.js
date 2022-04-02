import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBookmark } from '@fortawesome/free-solid-svg-icons';
import logo from '../../images/logo.png';
import CustomLink from '../CustomLink/CustomLink';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='bg-slate-800 py-2 px-5 flex justify-between items-center'>
            <Link to="/">
                <div className="logo-area flex flex-col md:flex-row md:items-end sm:items-center">
                    <img src={logo} alt="logo" width={40} className='' />
                    <h3 className='pl-1 text-orange-300 text-sm md:text-2xl font-semibold'>Food Recipe</h3>
                </div>
            </Link>
            <div className='text-white flex md:mr-8'>
                <CustomLink to="/search"><FontAwesomeIcon icon={faSearch} /></CustomLink>
                <CustomLink to="/collections"><FontAwesomeIcon icon={faBookmark} /></CustomLink>
            </div>
        </nav>
    );
};

export default Header;