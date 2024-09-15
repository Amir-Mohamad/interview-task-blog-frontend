// app/post/[id]/page.js
export default async function Post({ params }) {
	const { id } = params;
	const response = await fetch(`http://127.0.0.1:8000/api/articles/${id}`);
	const post = await response.json();

	return (
		<div class="mx-auto block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
			<img
				src={`http://127.0.0.1:8000/${post.image}`}
				alt={post.title}
				className="w-full h-auto mb-6 rounded-md shadow-md"
			/>

			<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
				Noteworthy technology acquisitions 2021
			</h5>
			<p class="font-normal text-gray-700 dark:text-gray-400">
				Here are the biggest enterprise technology acquisitions of 2021 so far,
				in reverse chronological order.
			</p>
		</div>
	);
}
