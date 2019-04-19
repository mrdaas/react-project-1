import React from "react"
import Navbar from "./comp/NavBar"
import SummaryContent from "./comp/SummaryContent"
import HeaderImage from "./comp/HeaderImage"
import BlogEntries from "./comp/BlogEntries"
import Gallary from "./comp/Gallary"

function MyApp() {

    return (


<div>
   <Navbar />
   <HeaderImage />
   <SummaryContent />
   <Gallary />
   
   <BlogEntries />
</div>
    )

}

export default MyApp

