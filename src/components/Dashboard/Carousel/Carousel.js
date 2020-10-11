import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const CustomedCarousel = (props) => {

    return(       
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite={false}
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 4000,
              min: 1120
            },
            items: 5,
            partialVisibilityGutter: 40
          },
          laptop: {
            breakpoint: {
              max: 1120,
              min: 980
            },
            items: 5,
            partialVisibilityGutter: 40
          },
          tablet: {
            breakpoint: {
              max: 980,
              min: 768
            },
            items: 4,
            partialVisibilityGutter: 30
          },
          mobileWide: {
            breakpoint: {
              max: 768,
              min: 464
            },
            items: 3,
            partialVisibilityGutter: 30
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0
            },
            items: 2,
            partialVisibilityGutter: 30
          }
        }}
        showDots={false}
        sliderClass=""
        slidesToSlide={3}
        swipeable
/*         beforeChange={(nextSlide, { currentSlide, onMove }) => {
          return alert('111');
          doSpeicalThing();
        }} */
        beforeChange={function(nextSlide) {
          if (nextSlide >= (props.genreList.length - 5)) {
            return props.addNewMovies();
          } else {
            return false
          }
        }}
      >
        {props.genreList} 
      </Carousel>   
    )
}

export default CustomedCarousel;


