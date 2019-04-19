import React from "react"

function Gallary () {

    const imagestyle = {

        width: "100%",
    }

    return (



    <div> 
        <div  className="container">
                  <div  className="Gallery-heading">Gallery</div>
                    <div  className="row gallery-style">
                          <div  className="col-md-3 column">
                              <img src="https://www.w3schools.com/howto/img_nature.jpg"  className="gallery-image"  style={imagestyle} data-toggle="modal" data-target="#myModal"  className="hover-shadow cursor" />
                          </div>
                          <div  className="col-md-3 column">
                              <img src="https://www.w3schools.com/howto/img_snow.jpg"  className="gallery-image"  style={imagestyle} data-toggle="modal" data-target="#myModal"  className="hover-shadow cursor" />
                          </div>
                          <div  className="col-md-3 column">
                              <img src="https://www.w3schools.com/howto/img_mountains.jpg"  className="gallery-image"  style={imagestyle} data-toggle="modal" data-target="#myModal"  className="hover-shadow cursor" />
                          </div>
                          <div  className="col-md-3 column">
                              <img src="https://www.w3schools.com/howto/img_lights.jpg"  className="gallery-image"  style={imagestyle} data-toggle="modal" data-target="#myModal"  className="hover-shadow cursor" />
                          </div>
                    </div>
                    <div  className="row">
                        <div  className="col-md-3 column">
                            <img src="https://www.w3schools.com/howto/img_nature.jpg"  className="gallery-image"  style={imagestyle} data-toggle="modal" data-target="#myModal"  className="hover-shadow cursor" />
                        </div>
                        <div  className="col-md-3 column">
                            <img src="https://www.w3schools.com/howto/img_snow.jpg"  className="gallery-image"  style={imagestyle} data-toggle="modal" data-target="#myModal"  className="hover-shadow cursor" />
                        </div>
                        <div  className="col-md-3 column">
                            <img src="https://www.w3schools.com/howto/img_mountains.jpg"  className="gallery-image"  style={imagestyle} data-toggle="modal" data-target="#myModal"  className="hover-shadow cursor" />
                        </div>
                        <div  className="col-md-3 column">
                            <img src="https://www.w3schools.com/howto/img_lights.jpg"  className="gallery-image"  style={imagestyle} data-toggle="modal" data-target="#myModal"  className="hover-shadow cursor" />
                        </div>
                    </div>
        </div>    
    </div>

    )

}

export default Gallary