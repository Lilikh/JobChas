export async function getData(url: string): Promise<any> {
    try {
      const response = await fetch(url);
      const data = await response.json();
    
      console.log(data.hits);
  
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }