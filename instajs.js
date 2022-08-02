import Bio from './modules/Bio.js'
import Gallery from './modules/Gallery.js'
import Nav from './modules/Nav.js'

const Instajs=()=>{
	return `
		${Nav()}
		<div class="constainer">
			${Bio()}
			${Gallery()}
		</div>
	`
}
document.getElementById('root').innerHTML=Instajs();