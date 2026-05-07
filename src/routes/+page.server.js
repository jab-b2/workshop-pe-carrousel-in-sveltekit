export const load = async () => {
    const endpoint = 'https://api.nasa.gov/planetary/apod?count=5&api_key=USdwfLnGhgzveNUTUT2Wz6w1P7B1KreRaKjoUrP6'

    const response = await fetch(endpoint);
    const data = await response.json();

    return {
      features: data.data
    }
}