sleep = function (wakeup, goToWork) {
	console.log("Sleeping!");
	setTimeout(function() {
		console.log("Done sleeping.");
		wakeup(goToWork);
	}, 3000);
}

wakeup = function (goToWork) {
	console.log("Getting dressed");
	setTimeout(function() {
		console.log("Ready!");
		goToWork();
	}, 3000);
}

goToWork = function () {
	console.log("Off to work.");
}

sleep(wakeup, goToWork);