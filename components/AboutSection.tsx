import React, { useRef, useEffect, useState } from 'react';

// Custom hook to detect if an element is on screen
const useOnScreen = (options: IntersectionObserverInit) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      }
    }, options);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, options]);

  return [ref, isVisible] as const;
};


const AboutSection: React.FC = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

  return (
    <section id="about-us" ref={ref}>
       <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
        <div className="max-w-4xl mx-auto text-center glass-card rounded-xl p-6 md:p-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">About Us</h2>
          <p className="text-base text-gray-400 leading-relaxed max-w-3xl mx-auto">
              At AILM, our mission is to streamline your creative process by curating the most innovative and powerful AI tools on the market. We save you countless hours of research, presenting a handpicked selection of platforms that are redefining content creation. Whether you're a filmmaker, designer, marketer, or hobbyist, our featured tools are ready to be integrated directly into your production and creative workflows, helping you turn ambitious concepts into stunning reality. As affiliate partners, we provide a direct gateway to these cutting-edge technologies. Please note that while we don't own the tools themselves, our passion is connecting you with the best resources to elevate your work.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;