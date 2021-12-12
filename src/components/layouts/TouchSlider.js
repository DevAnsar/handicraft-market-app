
import "./../../styles/slider.css";
function TouchSlider({ data={"title":"","objects":[]} }){

    return (
        <section className='slider-box box '>
            <h5 className='row header'>
                <div className='col s12 '>
                    <span className=" text-color slider-title active">
                      {data.title}
                    </span>
                
                </div>
                <div className="divider" />
            </h5>
            <div className='row slider-items'>
                {
                    data?.objects?.map(obj=>(
                        <div key={obj+ Math.random()} className="col-6 col-md-4 col-lg-3 ">
                            <div className="card box z-depth-2 slider-item">
                                <div className="card-content text-color" style={{height:'200px',overflow:'hidden'}}>
                                {/* image */}
                                {obj.text}
                                </div>
                            </div>
                        </div>
                    )
                    )
                }
            </div>
        </section>

    )
}
export default TouchSlider;