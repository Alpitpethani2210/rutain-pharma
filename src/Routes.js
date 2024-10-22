import { useRoutes } from "react-router-dom"
import Blogs from "./Pages/Blogs"
import CompanyProfile from "./Pages/CompanyProfile"
import { Home } from "./Pages/Home"
import { NotFound } from "./Pages/NotFound"
import Product from "./Pages/Product"
import BlogDetails from "./Pages/BlogDetails"

export const ProjectRoutes = ()=>{
    let element = useRoutes([
        {path:'/',element:<Home/>},
        {path:'/company-profile',element:<CompanyProfile/>},
        {path:'/Product',element:<Product/>},
        {path:'/blogs',element:<Blogs/>},
        {path:'/blog-details',element:<BlogDetails/>},
        {path:'*',element:<NotFound/>},
    ])
    return element
}