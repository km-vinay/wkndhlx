import ffetch from '../../scripts/ffetch.js';

async function queryDemo() {
	const limit = 20;
	const entries = ffetch('/query-index.json').sheet('default').limit(limit);
	const table = document.createElement('table');
	for await (const post of entries) {
		const tr = document.createElement('tr');
		tr.innerHTML = `<td>${post.title}</td><td>${post.description}</td>`;
		table.append(tr);
	}
	return table;
}

export default async function decorate(block) {
	const table = await queryDemo();
	[...block.children].forEach((row) => {
		const image = row.getElementsByTagName('img')[0];
		row.innerHTML = `<div><img src = ${image.src}></img><br/><p>${row.innerText}</p></div>`;

	});
	block.append(table);

}
