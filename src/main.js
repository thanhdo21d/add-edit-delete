import { render, router } from "../lib"
import './style/main.css'
import "bootstrap/dist/css/bootstrap.min.css"
import home from "./pages/home"
// import edit from "./pages/edit"
import addItem from "./pages/addItems"

// DOM declaration
var app = document.querySelector('#app')

router.on('/', function() {
    render(home, app)
})
router.on('/add', function() {
    render(addItem, app)
})
// router.on('/edit', function() {
//     render(edit, app)
// })
// router.on('/edit/:id', function({data}) {
//     render(()=>{
//         edit(data.id)
//     }, app)
// })


router.resolve()



