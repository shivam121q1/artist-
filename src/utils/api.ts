import axios from "axios";

const API_BASE_URL = "http://13.202.181.37:9006/wuelev8/api/v1/aibuilder";

// Define the expected structure of the API response
interface AIBrandResponse {
  result: any; // Change `any` to the actual expected data type
}

/**
 * Fetches AI brand output based on an ID.
 * @param {string} id - The ID to fetch data for.
 * @returns {Promise<any>} - Returns the API result.
 */
export const getAIBrandOutput = async (id: string): Promise<any> => {
  try {
    const response = await axios.get<AIBrandResponse>(`${API_BASE_URL}/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
      console.log(response?.data?.result)
    return response.data?.result; // Return only the result
  } catch (error) {
    console.error("Error fetching AI brand output:", error);
    throw error; // Rethrow error for handling in components
  }
};
