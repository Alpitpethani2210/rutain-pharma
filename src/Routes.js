import { useRoutes } from "react-router-dom"
import { Home } from "./Pages/Home"
import { NotFound } from "./Pages/NotFound"
import CompanyProfile from "./Pages/CompanyProfile"
import Product from "./Pages/Product"

export const ProjectRoutes = ()=>{
    let element = useRoutes([
        {path:'/',element:<Home/>},
        {path:'/company-profile',element:<CompanyProfile/>},
        {path:'/Product',element:<Product/>},
        {path:'*',element:<NotFound/>},
    ])
    return element
}