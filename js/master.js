(() => { 
	//what do we want to work with
	// 
	// this is a 1 to 1 connection (selects one elemtn)
		var badge = document.querySelector("#badge");

		// this is a one to many sletion ( gets a collection of elemetns)
		var allTheBadges = document.querySelectorAll('.isabadge');


		// what do we want it to do 
		function logMyId() {
			//log some stuff to the dve tools
			console.log(this.id);
			debugger;
		}

		// how o we want to do that?
		// 1 to 1 event handling
		badge.addEventListener("click", logMyId);

		allTheBadges.forEach(currentbadge => currentbadge. addEventListener("click", logMyId));
		
})();