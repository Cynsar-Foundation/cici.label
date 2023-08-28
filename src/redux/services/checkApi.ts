// utils/checkAPI.ts

const checkAPI = async (apiUrl: string): Promise<boolean> => {
    try {
      const response = await fetch(apiUrl);
      if (response.ok) {
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  };
  
  export default checkAPI;
  