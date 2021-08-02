import React, { Component } from 'react'
import HornedBeats from './HornedBeats' 


class Main extends Component {
    render() {
        return (
            <div>

                <HornedBeats
                title = 'UniWhal'
                imgUrl = 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg'
                description = 'A unicorn and a narwhal nuzzling their horns'
                />

               <HornedBeats
                title = 'Unicorn Head'
                imgUrl = 'https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg'
                description = 'Someone wearing a creepy unicorn head mask'
               />


            </div>
        )
    }
}

export default Main
