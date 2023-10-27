import List from './List'

const DesktopHeader = () => {
    return (
        <section className="header__top-bar">
                <img src={require('./images/logo.svg').default} alt='logo' />
                <List />
        </section>
    )
}

export default DesktopHeader
