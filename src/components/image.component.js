import { useEffect, useRef, useState } from "react";

const Image = ({ src, className, lazyLoad = false, placeholderColor = ''}) => {
  const imageRef = useRef();
  const [isVisible, setIsVisible] = useState(!lazyLoad);

  useEffect(() => {
    if (!lazyLoad) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => observer.disconnect();
  }, [lazyLoad]);

  const bgStyle = isVisible ? { backgroundImage: `url(${src})` } : { backgroundColor: placeholderColor };

  return (
    <div ref={imageRef} className={className} style={{...bgStyle}}></div>
  );
}

export default Image;