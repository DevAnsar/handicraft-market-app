

function TouchSlider({ data={"title":"","objects":[]} }){

    return (
        <section className='slider-box'>
            <h5 className='row header'>
                <div className='col s12'>
                    <span className=" text-color slider-title active">
                      {data.title}
                    </span>
                
                </div>
            </h5>
            <div className='row'>
                {
                    data?.objects?.map(obj=>(
                        <div key={obj} className="col s6 m4 l3">
                            <div className="card box z-depth-2">
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