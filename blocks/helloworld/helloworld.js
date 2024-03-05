export default async function decorate(block) {
	const table = await queryDemo();
	[...block.children].forEach((row) => {
		const image = row.getElementsByTagName('img')[0];
		row.innerHTML = `<div><img src = ${image.src}></img><br/><p>${row.innerText}</p></div>`;
	});
	block.append(table);
}
