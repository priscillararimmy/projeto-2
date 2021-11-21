import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components"



const ConteinerSlider = styled.div`
`
export const SliderShow = ({onChange, onClickItem, onClickThumb, ...props }) => {
    return (
        <Carousel 
            autoPlay={true} 
            infiniteLoop={true} 
            showArrows={true} 
            onChange={onChange} 
            onClickItem={onClickItem}
            onClickThumb={onClickThumb}
            dynamicHeight={true}
            >

            {props.images.map((image, index) => (
                <ConteinerSlider key={`${image.id}-${index}`}>
                    <img src={image.image} alt={image.image} />
                </ConteinerSlider>
            ))}
        </Carousel>
    );
}

