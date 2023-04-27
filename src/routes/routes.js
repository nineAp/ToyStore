import About from '../pages/About'
import Cart from '../pages/Cart'
import Categories from '../pages/Categories'
import Feedback from '../pages/Feedback'
import Home from '../pages/Home'
import Toys from '../pages/Toys'
import SearchPage from '../pages/SearchPage'
import SelectedCategory from '../pages/SelectedCategory'
import ToyPage from '../pages/ToyPage'
import {HOME_PATH, TOYS_PATH, CATEGORIES_PATH, CART_PATH, FEEDBACK_PATH, ABOUT_PATH, SEARCH_PATH} from '../utils/consts'

export const routes = [
    {
        path: HOME_PATH,
        element: <Home/>
    },
    {
        path: TOYS_PATH + '/pages/:currentPage/',
        element: <Toys/>
    },
    {
        path: TOYS_PATH + '/:toyId',
        element: <ToyPage/>
    },
    {
        path: CATEGORIES_PATH,
        element: <Categories/>
    },
    {
        path: `${CATEGORIES_PATH}/:catId/pages/:currentPage`,
        element: <SelectedCategory></SelectedCategory>
    },
    {
        path: CART_PATH,
        element: <Cart/>
    },
    {
        path: FEEDBACK_PATH,
        element: <Feedback/>
    },
    {
        path: ABOUT_PATH,
        element: <About/>
    },
    {
        path: `${SEARCH_PATH}/:searchRequest`,
        element: <SearchPage/>
    },

]