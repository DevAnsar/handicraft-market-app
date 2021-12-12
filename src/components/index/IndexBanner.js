import './../../styles/index.css';
import {Slider,Slide,Caption} from 'react-materialize'
function IndexBanner({sliders}){

    return(

      <section className="">
        {/* <div className="col s12 m12 l12">
          <div className="card box" style={{height:'100vh'}}>
            <div className="card-content " style={{height:'200px',overflow:'hidden'}}>
           
           </div>
          </div>
        </div> */}

          <Slider
            fullscreen={false}
            options={{
              duration: 500,
              height: 400,
              indicators: true,
              interval: 6000
            }}
          >
            {
              sliders.map(slide=>(

                <Slide key={slide.id} image={<img alt={slide.Tagline} src={Slide.src} />}>
                  <Caption placement={slide.placement}>
                    <h3 className='text-color'>
                      {slide.Tagline}
                    </h3>
                    <h5 className="light text-color text-lighten-3">
                      {slide.slogan}
                    </h5>
                  </Caption>
              </Slide>

              ))
            }

            {/* <Slide image={<img alt="" src="http://lorempixel.com/780/580/nature/2"/>}>
              <Caption placement="left">
                <h3>
                  Left Aligned Caption
                </h3>
                <h5 className="light grey-text text-lighten-3">
                  Here's our small slogan.
                </h5>
              </Caption>
            </Slide>
            <Slide image={<img alt="" src="https://lorempixel.com/780/580/nature/3"/>}>
              <Caption placement="right">
                <h3>
                  Right Aligned Caption
                </h3>
                <h5 className="light grey-text text-lighten-3">
                  Here's our small slogan.
                </h5>
              </Caption>
            </Slide>
            <Slide image={<img alt="" src="https://lorempixel.com/580/250/nature/4"/>}>
              <Caption placement="center">
                <h3>
                  This is our big Tagline!
                </h3>
                <h5 className="light grey-text text-lighten-3">
                  Here's our small slogan.
                </h5>
              </Caption>
            </Slide> */}
          </Slider>
        </section>
    )
}
export default IndexBanner;