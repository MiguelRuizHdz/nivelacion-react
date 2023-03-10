import React from 'react'

const Layout = ({ children }) => {
  
	return (
    <>
    	<header>
				<h2>React Nivelation</h2>
			</header>

			<main>
				{ children }
			</main>

			<footer>
				&copy; Miguel Ruiz - {new Date().getFullYear()}
			</footer>
    </>
  )
}

export default Layout;