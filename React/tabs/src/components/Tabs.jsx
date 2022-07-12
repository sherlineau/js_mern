import React from 'react'
import { useState } from 'react'

export const Tabs = (props) => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const onClickHandler = (e,value) => {
        setSelectedIndex(value);
    }

    const tabStyle = {
        padding: '12px 15px',
    }

    return (
        <div className='container m-2'>
            <div className="btn-group">
            {
                props.tabSections.map((tab,i) => {
                    return (
                        <button onClick={ e => onClickHandler(e,i)} style={ tabStyle } className="btn btn-primary">
                            <span key={i}>{tab.label}</span>
                        </button>
                    )
                })
            }

            </div>
            <div className='container m-2'>
                {<p>{props.tabSections[selectedIndex].content}</p>}
            </div>
        </div>
        
    )
}
