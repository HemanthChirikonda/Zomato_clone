import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import './CategoryCard.css'
const CategoryCard = (props) => {
    return (<Fragment>

        < div className="card" style={{ "width": '15rem', overflow: 'hidden', border: 'none' }}>
            <Link to={props.href} className='border rounded categorycard '>
                <img src={props.src} className="card-img-top image-fluid" alt="..." />
                <div className="card-body">
                    <h4 style={{ 'fontSize': '1rem' }}>{props.text}</h4>
                </div>
            </Link>
        </div>
    </Fragment>
    )
}

export default CategoryCard;