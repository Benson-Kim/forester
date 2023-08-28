import client from "@sanity/client";

export default client({
	projectId: "mv1l42cz",
	dataset: "production",
	useCdn: true,
});
