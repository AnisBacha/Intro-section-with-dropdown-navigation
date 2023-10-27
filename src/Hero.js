const Hero = ({windowWidth}) => {

    return (
        <section className="hero">
            {windowWidth < 1024 ?(
                <img 
                src={require('./images/image-hero-mobile.png')}
                alt='hero-mobile'
                width={'750'}
                height={'564'}
                />
            ) : (
                <img 
                src={require('./images/image-hero-desktop.png')}
                alt='hero-desktop'
                width={'960'}
                height={'1280'}
                />
            )
            }
        </section>
    )
}

export default Hero
