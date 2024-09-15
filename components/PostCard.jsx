// components/PostCard.js
"use client";
import Link from "next/link";

export default function PostCard({ post }) {
	return (
		<div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
			<img
				src={`http://127.0.0.1:8000/${post.image}`} // Assuming post.image contains the image URL
				alt={post.title}
				className="w-full h-48 object-cover" // Adjust height as needed
			/>
			<div className="p-4">
				<h2 className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors mb-2">
					{post.title}
				</h2>
				<p className="text-gray-600 text-base leading-relaxed mb-4">
					{post.description}
				</p>
				<Link
					href={`/post/${post.id}`}
					className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors inline-block"
				>
					Read more
				</Link>
			</div>
		</div>
	);
}
