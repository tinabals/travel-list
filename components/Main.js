import React from  'react'

const Main = (props) => {
    return <section> 
            <img src={props.imageUrl} className='travel--image' />
            <div className='travel--description'>
                <div className="travel-google-location">
                    <img src='./images/location.png' className="location-img" />
                    <span className='location-container'> 
                    <span className="location"> {props.location} </span>
                    <a href={props.googleMapsUrl} className="google-url"> View on Google Maps </a>
                    </span>
                </div> 
                <h3 className="travel-title">{props.title} </h3>
                <p className="travel-date">{props.startDate} -{props.endDate} </p>
                <p className="travel-desc"> {props.description} </p>
            </div>
    </section>
}

export default Main