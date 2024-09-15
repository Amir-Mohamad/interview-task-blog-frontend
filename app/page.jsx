// app/blog/page.js
"use client";
import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";

export default function Blog() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const fetchPosts = async () => {
			const response = await fetch("http://127.0.0.1:8000/api/articles");
			const data = await response.json();
			setPosts(data);
		};

		fetchPosts();
	}, []);

	return (
		<div className="p-4">
			<h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
				{posts.map((post) => (
					<PostCard key={post.id} post={post} />
				))}
			</div>
		</div>
	);
}
