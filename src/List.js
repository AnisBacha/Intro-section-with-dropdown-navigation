import { useState } from 'react'
import Company from './Company';
import Features from './Features';

const List = () => {
    const [isFeaturesCollapsed, setIsFeaturesCollapsed] = useState(true);
    const [isCompanyCollapsed, setIsCompanyCollapsed] = useState(true);
    const menuOpenStyle = `
        html, body{
            magin: 0;
            height: 100%;
            overflow: hidden;
        }
        body{
            background-color: hsl(0, 0%, 41%, 0.05);
        }
        .header{
            background-color: hsl(0, 0%, 98%);
        }
    `
    return (
        <>
            <ul className='header__list'>
                <li onClick={() => setIsFeaturesCollapsed(!isFeaturesCollapsed)}>
                    Features 
                   {isFeaturesCollapsed?
                        <img src={require('./images/icon-arrow-down.svg').default} alt='arrow-down' /> :
                        <img src={require('./images/icon-arrow-up.svg').default} alt='arrow-up' />
                   }
                </li>
                {!isFeaturesCollapsed && (
                    <>
                        <Features />
                        <style>{menuOpenStyle}</style>
                    </>
                ) }
                <li onClick={() => setIsCompanyCollapsed(!isCompanyCollapsed)}>
                    Company
                    {isCompanyCollapsed?
                        <img src={require('./images/icon-arrow-down.svg').default} alt='arrow-down' /> :
                        <img src={require('./images/icon-arrow-up.svg').default} alt='arrow-up' />
                   }
                </li>
                {!isCompanyCollapsed && (
                    <>
                        <Company />
                        <style>{menuOpenStyle}</style>
                    </>
                )}
                <li>Careers</li>
                <li>About</li>
            </ul>
            <div className='buttons'>
                <button className='login-button'>Login</button>
                <button className='register-button'>Register</button>
            </div>
            
        </>
    )
}

export default List
