import React, { Fragment } from 'react'
import CollectionCard from './CollectionCard'

const CollectionSection=()=>{
    return(<Fragment>
         <div className='row m-5'>
                    <div className={'col-12'}>
                        <h2>{'Collection'}</h2>
                    </div>
                    <div className="col-8">
                        <p>{'Explore curated lists of top restaurants, cafes, pubs, and bars in Hyderabad, based on trends'}</p>
                    </div>
                    <div className={'col-4'}>
                        <a href={'#'}>{'All Location in hyd'}</a>
                    </div>
                   <div className={'col-12 collectivcontainer'}>
                   <CollectionCard 
                    src={'https://b.zmtcdn.com/data/collections/f9d822284b336c1eb8c3af8c42216389_1460023238.jpg?output-format=webp'}
                    href='#'
                    text={'Bars & restunets'}/>
                     <CollectionCard 
                    src={'https://b.zmtcdn.com/data/collections/f9d822284b336c1eb8c3af8c42216389_1460023238.jpg?output-format=webp'}
                    href='#'
                    text={'Bars & restunets'}/>
                     <CollectionCard 
                    src={'https://b.zmtcdn.com/data/collections/f9d822284b336c1eb8c3af8c42216389_1460023238.jpg?output-format=webp'}
                    href='#'
                    text={'Bars & restunets'}/>
                     <CollectionCard 
                    src={'https://b.zmtcdn.com/data/collections/f9d822284b336c1eb8c3af8c42216389_1460023238.jpg?output-format=webp'}
                    href='#'
                    text={'Bars & restunets'}/>
                    
                   </div>
                </div>
    </Fragment>)
}



export default CollectionSection;