import React from 'react'
import './StyleSheet.css'

function StyleSheet(props) {
    const className = props.primary ? 'primary' : ''
    return (
        <div>
            <div className={`${className} font-xl`}>StyleSheet</div>
        </div>
    )
}

export default StyleSheet
