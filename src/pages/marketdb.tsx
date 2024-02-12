const { useState } = require("react");

import { FormEvent } from "react";
import database from "./api/marketDB.json";

function searchProducts(searchTerm: string, database: any) {
	const results = [];

	for (const url in database) {
		for (const subURL in database[url]) {
			for (const product in database[url][subURL]) {
				const description = database[url][subURL][product]["description"];
				const relevance = calculateRelevance(product, searchTerm);

				results.push({
					product,
					relevance,
					description,
					pricePerOunce: database[url][subURL][product]["pricePerOunce"]
				});
			}
		}
	}
	results.sort((a, b) => b.relevance - a.relevance);

	return results.slice(0, 5);
}

function calculateRelevance(product: string, searchTerm: string) {
	const regex = new RegExp(searchTerm, "gi");
	let matches = ((product.replace(/-/g, "") + product.replace(/-/g, " ")).match(regex) || []).length;

	if (matches > 0) {
		matches = matches / product.length;
	}

	return matches;
}

function capitalizeAndSpace(str: string) {
	let words = str.split("-");

	for (let i = 0; i < words.length; i++) {
		words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
	}

	return words.join(" ");
}

function Product(props: { product: string; description: string; pricePerOunce: number }) {
	return (
		<div className="bg-lochmara-100 p-4 rounded-lg shadow-lg border-lochmara-300 border-2">
			<h3 className="text-lg font-bold">{capitalizeAndSpace(props.product)}</h3>
			<p>Description: {props.description}</p>
			<p className="font-bold">Price per Ounce: {props.pricePerOunce.toLocaleString("en-US", { style: "currency", currency: "USD" })}</p>
		</div>
	);
}

function handleInput(e: FormEvent<HTMLInputElement>, setResults: Function) {
	const searchTerm = (e.target as HTMLInputElement).value;

	if (searchTerm == "") {
		setResults([]);
		return;
	}

	const searchResults = searchProducts(searchTerm, database);
	const currentResults: JSX.Element[] = [];

	for (const searchResult in searchResults) {
		if (searchResults[searchResult].relevance == 0) continue;

		const product = searchResults[searchResult].product;
		const description = searchResults[searchResult].description;
		const pricePerOunce = searchResults[searchResult].pricePerOunce;

		currentResults.push(<Product key={product} product={product} description={description} pricePerOunce={pricePerOunce}></Product>);
	}

	setResults(currentResults);
}

export default function FoodDB() {
	const [results, setResults] = useState([]);

	return (
		<div className="lg:p-8 p-4 shadow-xl rounded-xl bg-lochmara-200 m-2 mt-8 lg:m-8">
			<h1 className="text-3xl font-semibold mb-4">Generic Supermarket Database</h1>

			<div className="p-4 rounded-lg mt-4 mb-4 shadow-xl border-2 border-lochmara-300 bg-lochmara-100">
				<h2>Explore a wide range of products and their prices.</h2>
				<h2>
					Using a web-scrapped DB from{" "}
					<a href="https://cooklist.com/products/browse" className="text-lochmara-500 underline">
						CookList
					</a>
					.
				</h2>
			</div>

			<div className="flex items-center space-x-4 mb-4">
				<label className="text-lg font-semibold flex-shrink-0">Enter search term:</label>
				<div className="relative flex-grow">
					<input
						type="text"
						id="inputBox"
						onInput={(e) => {
							handleInput(e, setResults);
						}}
						className="px-6 py-4 border rounded-lg focus:outline-none focus:border-lochmara-500 w-full text-xl"
					></input>
				</div>
			</div>

			<div id="results" className="grid grid-cols-1 gap-4">
				{results}
			</div>
		</div>
	);
}
