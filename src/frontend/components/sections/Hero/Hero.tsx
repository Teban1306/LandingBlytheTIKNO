import SplitText from '../../common/SplitText/SplitText';

export const Hero = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-[90vh] flex items-center mb-8"
      style={{
        backgroundImage: `url('/images/headerfondo.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative z-10 max-w-7xl px-8 sm:px-12 lg:px-16">
        <div className="text-left max-w-3xl">
          <div className="mb-6">
            <SplitText
              text="Descubre el encanto único"
              className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white drop-shadow-lg text-shadow-lg"
              delay={50}
              duration={0.8}
              ease="power3.out"
              splitType="words"
              from={{ opacity: 0, y: 20 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-50px"
            />
            <SplitText
              text="de las Blythe Dolls"
              className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white drop-shadow-lg text-shadow-lg block mt-2"
              delay={50}
              duration={0.8}
              ease="power3.out"
              splitType="words"
              from={{ opacity: 0, y: 20 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-50px"
            />
          </div>
          <SplitText
            text="Cada muñeca cuenta una historia. ¿Cuál será la tuya?"
            className="font-sans text-2xl md:text-3xl text-white mb-8 max-w-2xl font-light italic drop-shadow-md"
            delay={50}
            duration={0.8}
            ease="power3.out"
            splitType="words"
            from={{ opacity: 0, y: 20 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-50px"
          />
        </div>
      </div>
    </section>
  );
};