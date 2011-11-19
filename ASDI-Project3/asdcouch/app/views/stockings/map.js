function (doc) {
	if (doc._id.substr(0,9) === "stocking:") {
		emit(doc._id.substr(0,8), {
			"catagory": doc.catagory,
			"whofor": doc.whofor,
			"item": doc.item,
			"note": doc.note,
			"bought": doc.bought,
			"wrapped": doc.wrapped
		});
	}
}