const VITE_FRAPPE_API_URL = import.meta.env.VITE_FRAPPE_API_URL;

export async function fetchAnalytics() {
  try {
    const response = await fetch(`${VITE_FRAPPE_API_URL}/vision_analytics`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching analytics:', error);
    return null;
  }
}

export async function fetchCameraData() {
  try {
    const response = await fetch(`${VITE_FRAPPE_API_URL}/vision_camera`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching camera data:', error);
    return null;
  }
}