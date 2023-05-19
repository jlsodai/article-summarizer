export async function fetchData(endpoint: string) {
	const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${endpoint}`, {
		cache: "no-store",
		headers: {
			"X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY as string,
			"X-RapidAPI-Host": process.env.NEXT_PUBLIC_API_HOST as string,
		},
	});
	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}
	return res.json();
}
