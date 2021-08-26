import React from 'react'
import Button from './Button'

const Subscribe = () => {
    return (
        <div className="subscribe">
            <h1>Subscribe and Follow Us</h1>
            <p>Be part of the story and follow us on Twitter via <a href="https://github.com/Em-codes">@yourname</a> and subscribe to the newsletter for news and updates about our workshops</p>
            <form>
                <input type="email" required />
                <Button onSubmit={() => {alert('Submitted')}} text={'subscribe'} />
            </form>
            
        </div>
    )
}

export default Subscribe
