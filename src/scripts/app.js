// import React from 'react'
// import ReactDOM from 'react-dom'

// var app = function() {

// 	var HomePage = React.createClass({
// 		render: function() {
// 			return (
// 				<div className="spookyContainer">
// 					<Header />
// 					<ImageContainer />
// 				</div>
// 				)
// 		}
// 	})

// 	var Header = React.createClass({
// 		render: function() {
// 			return (
// 				<div className="header">
// 					<h1>HAPPY HALLOWEEN</h1>
// 					<NavBar />
// 				</div>
// 				)
// 		}
// 	})

// 	var NavBar = React.createClass({
// 		render: function() {
// 			return (
// 				<div className="nav">
// 					<a href="#contact">contact pus</a>
// 					<a href="#about">aBOOOOt us</a>
// 					<a href="#home">home</a>
// 				</div>
// 				)
// 		}
// 	})

// 	var ImageContainer = React.createClass ({
// 		render: function(){
// 			return (
// 				<div className = "theImg">
// 					<img src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSxLuj5fi_zds1taNewBDyxzccOV1px7oQtQ_7li7L9VxWJx3KT' />
// 					<p> write something scary </p>
// 				</div>
// 				)

// 		}



// 	})



// 	ReactDOM.render(<HomePage />, document.querySelector('.container'))


// }




// app()


import React from 'react'
import ReactDOM from 'react-dom'

var blogPage = function(){

	var HomePage = React.createClass({
		render: function (){
			return (
				<div className = 'tiyBlogContainer'>
					<SkyLineLogo />
					<HoustonSkyline />
					<TiyLogo />
					<LeftCol />
					<RightCol />
					<PopOut />
				</div>
				)
		}
	}), 
	var SkyLineLogo = React.createClass({
		render: function(){
			return(
				<div className = 'skyLineLogo'>
					<img src = "http://magentanova.github.io/html-intro-1/images/houston.jpg" />
					<div className = 'tiyLogoPic'>
	// 					<img src = "http://magentanova.github.io/html-intro-1/images/ironyardlogo.png" />
	// 				</div>
				</div>
			)
		}
	})
	// var HoustonSkyline = React.createClass({
	// 	render: function(){
	// 		<div className = 'houstonSkylinepic'>
	// 			<img src = "http://magentanova.github.io/html-intro-1/images/houston.jpg" />
	// 		</div>
	// 	}
	// }), 
	// var TiyLogo = React.createClass({
	// 	render: function(){
	// 		return (
	// 			<div className = 'tiyLogoPic'>
	// 				<img src = "http://magentanova.github.io/html-intro-1/images/ironyardlogo.png" />
	// 			</div>
	// 		)
	// 	}
	// }), 

	var LeftCol = React.createClass({

		render: function() {
			<div className = 'leftCol'>
				<h1> THE IRON YARD HOUSTON </h1>
				<h2> Happenings and updates from The Iron Yard Houston, TX </h2>
				<h3> SEARCH </h3>
				<input type="text" placeholder ="Search Keywords" required />
			</div>
		}

	}),

	// var LeftCol = React.createClass({
	// 	render: function() {
	// 		return(
	// 			<div className = 'leftCol'>
	// 				<LeftHeader />
	// 				<Happenings />
	// 				<SearchText />
	// 				<SearchBox />
	// 			</div>
	// 		)	
	// 	}	
	// }),
	// var LeftHeader = React.createClass({
	// 	render: function(){
	// 		return(
	// 			<div className = 'leftHeader'>
	// 				<h1> THE IRON YARD | HOUSTON </h1>
	// 			</div>
	// 		)
	// 	}
	// }), 
	// var Happenings = React.createClass({
	// 	render: function(){
	// 		return(
	// 			<div className = 'happeningsInfo'>
	// 				<h1> Happenings and updates from The Iron Yard in Houston, TX </h1>
	// 			</div>
	// 		)	
	// 	}
	// }), 
	// var SearchText = React.createClass({
	// 	render: function(){
	// 		return(
	// 			<div className = 'searchText'>
	// 				<h1> SEARCH </h1>
	// 			</div>
	// 		)
	// 	}
	// }), 
	// var SearchBox = React.createClass({
	// 	render: function(){
	// 		return(
	// 			<div className = 'searchBox'>
	// 				<input class = "search" type="text" />
	// 			</div>
	// 		)	
	// 	}
	// }),
	var RightCol = React.createClass({
		render: function(){
			return(
				<div className = 'rightCol'>
					<RightHeader />
					<ClassPic />
					<BlogContent />
				</div>
			)	
		}
	}),
	var RightHeader = React.createClass({
		render: function(){
			return(
				<div className = 'rightHeader'>
					<h1> September 22nd Starts New Class of Iron Yard Students </h1>
					<div className = 'subtitle'>
						<h1> By Brian Dorton, Campus Director at The Iron Yard Houston </h1>
					</div>
				</div>
			)
		}
	}), 
	 var ClassPic = React.createClass({
		render: function(){
			return(
				<div className = 'classPic'>
					<img src = 'http://magentanova.github.io/html-intro-1/images/classroom.jpg' />
				</div>
			)
		}
	}), 
	var BlogContent = React.createClass({
		render: function(){
			return(
				<div className = 'blogContent'>
					<p> Who doesn't love going to a gay bar? Gay bars are fun and great and wonderful 
					— but when a gaggle of bridesmaids ready to party in some penis hats walk in, things can get tricky. 
					Because try as some might to reduce these spaces to unnecessary drinking venues, gay bars are important political 
					zones where pride thrives. As the Pulse tragedy has pointed out, gay bars are historically safe spaces for LGBTQ 
					persons to be themselves in a nonjudgmental environment. That's exactly why the vibe of a gay bar can get tense when 
					a group like a bachelorette party enters, en masse, claiming the space for their own. As gay comedian Drew Droege 
					wonderfully explained, it can turn not cute, fast. Why? Because the history of our spaces gets rewritten by straight 
					people and it just feels wrong. Look: it's always great to have straight or cisgender people at gay bars or in queer spaces. 
					I love that we can come together to celebrate each other! So, I'm definitely not saying that you shouldn't have a 
					bachelorette party at a gay bar. It's just that, if you do, you should be sensitive to the space. And how can that be 
					achieved? Here are five pieces of advice to help you fit in fine.</p>
				</div>
			)
		}
	}),
	var PopOut = React.createClass({
		render: function(){
			return(
				<PopHeader />
				<PopLogo />
				<PopText />
				<PopButton />
			)
		}
	}),
	var PopHeader = React.createClass({
		render: function(){
			return(
				<div className = 'popHeader'>
					<h1> Never miss a post! </h1>
				</div>
			)
		}
	}), 
	var PopLogo = React.createClass({
		render: function(){
			return(
				<div className = 'popLogo'>
					<img src = 'http://magentanova.github.io/html-intro-1/images/ironyardlogo.png' />
				</div>
			)
		}
	}), 
	var PopText = React.createClass({
		render: function(){
			return(
				<div className = 'popText'>
					<p> tiyhouston <br /> The Iron Yard | Houston </p>
				</div>
			)
		}
	}), 
	var PopButton = React.createClass({
		render: function(){
			return(
				<div className = 'PopButton'>
					<button name="button"> + Follow </button>
				</div>
			)
		}
	})

	ReactDOM.render(<HomePage />), document.querySelector('.container') // where did we get .container from?

}

blogPage()


















