import React, { Fragment } from 'react'

const Title =(props)=>{
    return (<Fragment>
        <h1 className={props.className}>{props.text}</h1>
    </Fragment>)
}

export default Title;