const express = require("express");
const ejs = require("ejs");

const app = express()

app.set("view engine", "html")

app.engine("html", ejs.renderFile)

app.use("/dizayn", express.static("assets/css"))


const port = process.env.PORT || 2001

app.get("/", (req, res) => {

	res.render("app", { 
		siteName: "Dashboard Kit", 
		sideBarMenu: [ "Overview", "Tickets", "Ideas", "Contacts", "Agents", "Articles", "Settings", "Subscription" ],
		title: 'Tickets',
		username: 'Jones Ferdinand',
		topTitle: 'All Tickets',
		sort: 'Sort',
		filter: 'Filter',
		topData: [ "Ticket details", "Customer name", "Date", "Priority" ],
		userDetails: [ "Contact Email not Linked", 'Adding Images to Featured Posts', 'When will I be charged this month?', 'Payment not going through', 'Unable to add replies' ],
		userNames: [ "Tom Cruise", 'Matt Damon', 'Robert Downey', 'Christian Bale', 'Henry Cavil' ],
		dates: [ "May 26, 2019", 'May 26, 2019', 'May 26, 2019', 'May 25, 2019', 'May 25, 2019' ],
		customerDate: 'on 24.05.2019',
		time: [ '6:30 PM', '8:00 AM', '7:30 PM', '5:00 PM', '4:00 PM' ],
		updated: 'Updated 1 day ago',
		btn: ['HIGH', 'LOW', 'NORMAL']
	})
})

app.listen(port, () => {

	console.log("Server ready at http://localhost:" + port)
});
