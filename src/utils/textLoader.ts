export async function loadTextContent(filePath: string): Promise<string> {
  try {
    // Rens filstien og sørg for at den starter med /
    const cleanPath = filePath.replace('public/', '');
    const path = cleanPath.startsWith('/') ? cleanPath : `/${cleanPath}`;
    
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error(`Failed to load content: ${response.statusText}`);
    }
    const text = await response.text();
    
    // Håndter tomme filer eller ugyldige responser
    if (!text.trim()) {
      return 'No content available';
    }
    
    return text;
  } catch (error) {
    console.error('Error loading text content:', error);
    return 'Content not available';
  }
} 