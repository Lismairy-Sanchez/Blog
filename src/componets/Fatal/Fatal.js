import React from 'react'

const Fatal =(props) =>(
    <h2 className='center red'>
        {/* Nombre del parametro que se le pasa a fatal */}
        {props.message}
    </h2>
)

export default Fatal;