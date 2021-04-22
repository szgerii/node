
const postContainer = document.getElementById('post-container');

fetch('/get_bejegyzesek').then(function(válasz) {
	válasz.json().then(function(dokumentumok) {

		/* dokumentumok:
		[
			{
				title: 'title',
				content: 'content'
			},
			{
				title: 'title',
				content: 'content'
			}
		]
		*/

		dokumentumok.forEach(bejegyzes);
	});
});

/*
<div class="post">
	<h2 class="post-title">Cím</h2>
	<span class="post-content"></span>
</div>
*/

// bejegy: { title: 'valami', content: 'valami' }
function bejegyzes(bejegy) {
	const div = document.createElement('div');
	div.className = 'post';

	const h2 = document.createElement('h2');
	h2.innerText = bejegy.title;
	h2.className = 'post-title';
	div.appendChild(h2);

	const span = document.createElement('span');
	span.innerText = bejegy.content;
	span.className = 'post-content';
	div.appendChild(span);

	postContainer.appendChild(div);
}
