export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const city = req.query.city;
  if (!city || typeof city !== "string") {
    return res.status(400).json({ error: "City is required" });
  }

  const apiKey = process.env.VISUAL_CROSSING_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "Weather service not configured" });
  }

  try {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(city)}?key=${apiKey}`;
    const weatherResponse = await fetch(url);

    if (!weatherResponse.ok) {
      return res
        .status(weatherResponse.status)
        .json({ error: "Failed to fetch weather data" });
    }

    const data = await weatherResponse.json();
    return res.status(200).json(data);
  } catch {
    return res.status(500).json({ error: "Failed to fetch weather data" });
  }
}
