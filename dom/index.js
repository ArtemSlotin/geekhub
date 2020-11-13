jQuery('input').on('paste', function (e) {
	e.preventDefault();

	var text = e.originalEvent.clipboardData.getData('text/plain').split('\n');
	var input = e.currentTarget;
	let arr = [];

	for (let elem of text) {
		arr.push(elem.split(';'));
	}

	let row;
	let col;
	if (input.name === 'a1') {
		row = 0;
		col = 0;
	} else if (input.name === 'a2') {
		row = 1;
		col = 0;
	} else if (input.name === 'b1') {
		row = 0;
		col = 1;
	} else if (input.name === 'b2') {
		row = 1;
		col = 1;
	}

	for (let j = 0; j < arr.length - 2 + row; j++) {
		let tbody = document.querySelector('tbody');
		let tr = document.createElement('tr');
		let th = document.createElement('th');
		th.innerHTML = 3 + j;
		tr.appendChild(th);

		for (let i = 0; i < 2; i++) {
			let td = document.createElement('td');

			let inputs = document.createElement('input');
			inputs.type = 'text';
			inputs.value = '';

			td.appendChild(inputs);

			tr.appendChild(td);
		}

		tbody.appendChild(tr);

	}

	let trs = document.querySelectorAll('tbody tr');

	for (let tr of trs) {

		for (let k = 0; k < arr[0].length - 2 + col; k++) {
			let td = document.createElement('td');

			let inputs = document.createElement('input');
			inputs.type = 'text';
			inputs.value = '';

			td.appendChild(inputs);

			tr.appendChild(td);
		}
	}

	let tr = trs[row];
	let syumbols = ['C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
	let ths = document.querySelector('thead tr');
	let tds = tr.querySelectorAll('td');

	for (let i = 0; i < tds.length - 2; i++) {
		let th = document.createElement('th');
		th.innerHTML = syumbols[i];

		ths.appendChild(th);
	}

	for (let i = 0; i < arr.length; i++) {
		let trsNew = trs[row + i];
		let inputNew = trsNew.querySelectorAll('tr td input');

		for (let j = col; j < arr[0].length + col; j++) {
			inputNew[j].value = arr[i][j - col];
		}
	}

	let allSymbols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];;
	for (let i = 0; i < trs.length; i++) {
		let inputs = trs[i].querySelectorAll('td input');
		for (let j = 0; j < inputs.length; j++) {
			inputs[j].name = allSymbols[j] + (i + 1);
		}
	}
});