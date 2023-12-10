// services/tollService.js

const TOLLGURU_API_KEY = 'nHm3dLjdL6mrr8FHjBmQr7j6mrQb8BD9'; // Replace with your TollGuru API key

export const calculateToll = async (waypoints) => {
  try {
    const response = await fetch(`https://api.tollguru.com/v1/calculation?source=here&key=${TOLLGURU_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        locations: waypoints,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error calculating toll:', error);
    throw error;
  }
};
