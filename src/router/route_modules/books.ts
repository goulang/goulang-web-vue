const Books = () => import(/* webpackChunkName: "books" */ '@/pages/booksModule/books.vue')
const BooksRouteList = [
    {
        path: "/books",
        name: "books",
        component: Books
    }
]
export default BooksRouteList;