import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';


const items = [
    {
      src:'assets/img/slide/s3.jpg',
      altText: 'Slide 1',
      caption: <p class="animate__animated animate__fadeInUp">There is something profoundly satisfying about sharing a meal. Eating together, breaking bread together, is one of the oldest and most fundamentally unifying of human experiences.</p>,
      header: <span><h1 className="animate__animated animate__fadeInDown text-" style={{color: "orange"}} >Lunchclub</h1></span>,
      id: '1'
    },
    {
      src: 'assets/img/slide/spices.jpg',
      altText: 'Slide 2',
      caption: <p class="animate__animated animate__fadeInUp">When we come to the table, we shouldn t negotiate right away. We should spend time walking together, eating together, making acquaintance, telling each other about our own experiences.</p>,
      header: <h1 className="animate__animated animate__fadeInDown" style={{color: "orange"}}>Share your experinces with us on a food table</h1>,
      id: '2'
    },
    {
      src: 'assets/img/slide/m1.jpg',
      altText: 'Slide 3',
      caption: <p class="animate__animated animate__fadeInUp">No matter our age, everyone in our household knows that cooking and eating together is where fun is.</p>,
      header: <h1 class="animate__animated animate__fadeInDown" style={{color: "orange"}}>Have some fun!</h1>,
      id: '3'
    }
  ];

const HomeCarousel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <img className="d-block w-100" src={item.src} alt={item.altText} />
        <CarouselCaption className="text-white" captionText={item.caption} captionHeader={item.header}/>
      </CarouselItem>
    );
  });

  return (
    <section id="hero">
        <div >
        <style>
            {
            `.custom-tag {
                max-width: 100%;
                height: 300px;
                background: #212529;
                
                }`
            }
        </style>
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
        >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
        </div>
    </section>    
  );
}

export default HomeCarousel;

