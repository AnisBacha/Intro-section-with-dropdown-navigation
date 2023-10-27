import { useState } from 'react';
import Menu from './Menu';
const MobileHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuOpenStyle = `
        html, body{
            magin: 0;
            height: 100%;
            overflow: hidden;
        }
        body{
            background-color: hsl(0, 0%, 41%, 0.3);
        }
    `
    return (
        <>
            <section className="header__top-bar">
                <img src={require('./images/logo.svg').default} alt='logo' />
                <div className='header__menu-icon' onClick={() => setIsMenuOpen(true)}>
                <img 
                    src={require('./images/icon-menu.svg').default}
                    alt='menu'
                />
                </div>
            </section>
            {isMenuOpen === true &&(
                <>
                    <Menu setIsMenuOpen={setIsMenuOpen} />
                    <style>{menuOpenStyle}</style>
                </>  
            )}
        </>
    )
}

export default MobileHeader
