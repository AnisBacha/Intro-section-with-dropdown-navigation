const SiteInfo = () => {
    return (
        <main className="main">
            <h2 className="main__h2">Make remote work</h2>
            <p className="main__p">
                Get your team in sync, no matter your location. Streamline processes. create team rituals, and watch productivity soar.
            </p>
            <button>Learn more</button>
            <section className="main__clients">
                <img 
                    src={require('./images/client-databiz.svg').default}
                    alt='databiz client'
                />
                <img 
                    src={require('./images/client-audiophile.svg').default}
                    alt='audiophile client'
                />
                <img 
                    src={require('./images/client-meet.svg').default}
                    alt='meet client'
                />
                <img 
                    src={require('./images/client-maker.svg').default}
                    alt='maker client'
                />

            </section>
        </main>
    )
}

export default SiteInfo
