import { Filter1Outlined } from '@material-ui/icons';
import React, { Fragment, useState } from 'react'

const Addimages = () => {


    var formData = new FormData();

    const handlevent = (e) => {

        formData.append("file", e.target.files[0]);;

    }

    return (<Fragment>

        <div className='container'>
            <form action="http://localhost:3000/images/upload" method="POST" enctype="multipart/form-data">
                <div className="custom-file mb-3">
                    <input type="file" name="file" id="file" className="custom-file-input" />
                    <label for="file" className="custom-file-label">Choose File</label>
                </div>
                <input type="submit" value="Submit" className="btn btn-primary btn-block" />
            </form>

            <div className='row border'>
                <img src={'http://localhost:3000/images/2fae0dc566087eaa1f16b07dc729d8ea.png?output-format=webp&fit=around|1029:555&crop=1029:555;*,*'} alt='' />
            </div>
        </div>


    </Fragment>
    )
}



export default Addimages;