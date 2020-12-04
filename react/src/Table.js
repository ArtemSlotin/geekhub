import React from 'react';

export default function Table(props) {
	let {columns, rows, cell, data} = props;
	const alpha = 'abcdefghijklmnopqrstuvwxyz';

	function addHeader(cols) {
		const headers = [];
		for (let i = 0; i < cols; i++) {
			headers.push(<td>{alpha[i].toUpperCase()}</td>);
		}
		return headers;
	}

	function addRows() {
		const row = [];
		for (let i = 0; i < props.rows; i++) {
			row.push(<tr>
				<td>{i + 1}</td>
				{addCells(i, props.columns)}</tr>);
		}
		return row;
	}

	function addCells(rowNum, cols) {
		const cells = [];
		for (let i = 0; i < cols; i++) {
			cells.push(<td><input type='text' name={alpha[i] + (rowNum + 1)} value={insertValue(rowNum, i)}/></td>)
		}

		return cells;
	}

	function insertValue(rowIndex, colIndex) {

		if (props.data === undefined || props.cell === undefined) {return ;}
		if (rowIndex < props.cell[1] - 1 || colIndex < alpha.indexOf(props.cell[0])) {return;}
		return props.data[rowIndex - props.cell[1] + 1][colIndex - alpha.indexOf(props.cell[0])];
	}

	return (
		<table>
			<thead>
			<tr>
				<td>&nbsp;</td>
				{addHeader(props.columns)}
			</tr>
			</thead>
			<tbody>
			{addRows()}
			</tbody>
		</table>
	);
};
// export default function Table(props) {
// 	let {columns, rows, cell, data} = props;
// 	let table;
// 		table = [
// 		['asd' , 'asadf'],
// 		['2 asd' , '2 asadf']
// 	];
// function Th(props) {
// 	let th = [];
// 	for (let i = 0; i < props.columns; i++) {
// 		if (i === 0) {
// 			th[0] = <th>{'\u0A00'}</th>;
// 		}
// 		th.push(<th key={'th' + 1}>{alpha[i].toUpperCase()}</th>);
// 		console.log(th);
// 	}
// 	return th;
// };
// function Tr(props) {
// 	let tr = [];
// 	let td = [];
// for (let i = 0; i < props.rows; i++) {
// 	tr.push(<tr>{td}</tr>);
// 	for (let j = 0; j < props.columns; j++) {
// 		if (j === 0) {
// 			td.push(<th>{j+1}</th>);
// 		}
// 		td.push(<td><input type={text} name={alpha[j] + (j + 1)}/></td>);
// 	}
// 	console.log(tr);
// }
// 	return tr;
// }
//





// 	return (
// 		<table>
// 			<thead>
// 			<tr>
// 				<Th columns={columns}/>
// 			</tr>
// 			</thead>
//
// 			<tbody>
// 				<Tr rows={rows} columns={columns}/>
// 			</tbody>
// 		</table>
// 	);
// };
//
