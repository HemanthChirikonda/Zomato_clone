import React, { Fragment } from 'react'
import './CollectionCard.css'


const CollectionCard = (props) => {
    return (<Fragment>

      <div className={'collection-div'}>
      < div className="collection">
            <img src={props.src} className="bg-collection" alt="..." />
            <div className={'collection-link'}>
                <a href={props.href}>{props.text}</a>
            </div>
        </div>
      </div>

    </Fragment>)
}

export default CollectionCard;