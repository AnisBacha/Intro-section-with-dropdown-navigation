import List from './List';

const Menu = ({setIsMenuOpen}) => {

    return (
        <section className="header__menu">
            <div className='menu-open-icon'>
            <img 
                className='close-menu' 
                src={require('./images/icon-close-menu.svg').default} 
                alt='close-menu'
                onClick={() => setIsMenuOpen(false)}
            />
            </div>
            <List />
        </section>
    )
}

export default Menu
