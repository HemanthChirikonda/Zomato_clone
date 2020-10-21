import React, { Fragment } from 'react'
import './Restaurantcard.css'

const ResturantCard = () => {
    const item = ['chennice', 'biriyani', 'north', 'south']
    return (<Fragment>
        <div className={"col-6 "}>
            <div className="card mb-3 bg-white" style={{ "max-width": "540",position:'relative' }}>
                <div className="row no-gutters " >
                    <div className=" imageContainer">
                        <img src="https://thumbs.dreamstime.com/z/woman-praying-free-birds-to-nature-sunset-background-woman-praying-free-birds-enjoying-nature-sunset-99680945.jpg" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h3 className="maintitle">{"Chop sticks"}</h3>
                            <span className={'wraptext'}>{'⭐⭐⭐⭐⭐'}</span>
                            <span className={'wraptext'}>{'4.25rating'}</span>
                            <div>
                                {
                                    item.map(item => {
                                        return (<span className={'wraptext'}>{item}</span>)
                                    })
                                }
                                <div>
                                    <span className={'wraptext'}>{'Cost 200rs for two'}</span>
                                </div>
                                <span className={'wraptext col-4'}>{'Min 50'}</span>
                                <span className={'wraptext col-4'}>{'Up to 30min'}</span>
                            </div>
                            <p className="card-text"><small className="text-muted">{'Accepts cash & online payments'}</small></p>

                        </div>
                    </div>
                  
                <div className='col-12' style={{ borderTop: '1px solid lightgray' }}>
                
                    <div style={{backgroundColor:'lightgreen'}}>
                    <button className='btn btn-outline-success onlineOrder-btn' style={{float:'right',border:'none'}}>{'Order Online >'}</button>
                    </div>
                </div>
               
                </div>
               

            </div>
        </div>
    </Fragment>)
}

export default ResturantCard;