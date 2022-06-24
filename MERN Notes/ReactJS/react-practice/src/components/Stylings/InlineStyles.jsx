import React from 'react'

const InlineStyles = () => {

    const TextStyles = {
        color: 'green',
        fontsize: '10px',
        fontFamily: 'Helvetica',
        fontweight: 'bold',
    }

    return (
        <>
            <h1 style={TextStyles}>Adding inline styles</h1>
            <h1 style={{color: 'yellow', fontsize: '5px'}}>ADDING INLINE STYLES</h1>
        </>
      )
}

export default InlineStyles