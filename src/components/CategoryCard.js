import React, { Fragment } from 'react'

const CategoryCard = (props) => {
    return (<Fragment>

        < div className="card rounded " style={{"width":  '15rem' }}>
            <img src={props.src} className="card-img-top image-fluid" alt="..." />
            <div className="card-body">
                <h4 style={{'fontSize':'1rem'}}>{props.text}</h4>
            </div>
        </div>
    </Fragment>
    )
}

export default CategoryCard;