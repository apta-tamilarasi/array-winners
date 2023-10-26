let a=["anna","beth","cara"]

document.write("Given array =[ "+a+" ]<br><br>")


let win=a.filter(function(e,i){
	if(i==0){
		document.write(`Gold winner is ${e}<br>`)
	}

	else if(i==1){
		document.write(`Silver winner is ${e}<br>`)
	}


	else if(i==2){
		document.write(`Bronze winner is ${e}<br>`)
	}
})

