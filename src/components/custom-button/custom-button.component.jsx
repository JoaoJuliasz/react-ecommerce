import React from 'react'

import './custom-button.styles.scss'

const CustomButton = ({ children, isGoogleSignIn, ...props }) => (
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
        {...props}>
        {/* Button value */}
        {children}
    </button>
)

export default CustomButton