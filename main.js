


function fun1() {
	var firstNumber = document.getElementById('firstNumb').value;
	var secondNumber = document.getElementById('secondNumb').value;
	var result = document.getElementById('newNumb');
	var select = document.getElementById('selectOption').selectedIndex;

	if (select == '0') {
		result.innerHTML = +firstNumber + +secondNumber;
	} else if (select == '1') {
		result.innerHTML = firstNumber - secondNumber;
	} else if (select == '2') {
		result.innerHTML = firstNumber * secondNumber;
	} else if (select == '3') {
		result.innerHTML = firstNumber / secondNumber;
	}
}
// 	switch(select) {
// 		case 0: {
// 			result.innerHTML = +firstNumber + +secondNumber;
// 			break;
// 		}
// 		case 1: {
// 			result.innerHTML = firstNumber - secondNumber;
// 			break;
// 		}
// 		case 2: {
// 			result.innerHTML = firstNumber * secondNumber;
// 			break;
// 		}
// 		case 3: {
// 			result.innerHTML = firstNumber / secondNumber;
// 			break;
// 		}

// 	}
// }
