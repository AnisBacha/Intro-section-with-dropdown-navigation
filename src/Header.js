import MobileHeader from './MobileHeader';
import DesktopHeader from './DesktopHeader';

const Header = ({windowWidth}) => {   
    
    return (
        <header className="header">
            {windowWidth < 1024 ? (
                <MobileHeader />
            ) : (
                <DesktopHeader />
            )}
        </header>
    )
}

export default Header
