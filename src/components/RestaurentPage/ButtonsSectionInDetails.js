import React, { Fragment } from 'react'
import { Button } from '@material-ui/core'
import { StarBorderOutlined } from '@material-ui/icons'
import DirectionsOutlinedIcon from '@material-ui/icons/DirectionsOutlined';
import BookOutlinedIcon from '@material-ui/icons/BookOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';

const ButtonsSectionInDetails = () => {
    return (<Fragment>


        <div className='col-8'>
            <div className='row'>
                <Button varient='outlined' startIcon={<StarBorderOutlined />} color="secondary">addviews</Button>
                <Button varient='outlined' startIcon={<DirectionsOutlinedIcon />} >directions</Button>
                <Button varient='outlined' startIcon={<BookOutlinedIcon />} >Bookmark</Button>

                <Button varient='outlined' startIcon={<ShareOutlinedIcon />} >Share</Button>

            </div>
        </div>

    </Fragment >)
}

export default ButtonsSectionInDetails