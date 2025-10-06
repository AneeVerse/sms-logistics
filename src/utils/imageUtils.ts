/**
 * Utility function to properly encode image URLs for web browsers
 * Handles special characters like &, spaces, etc. in image filenames
 */
export function encodeImageUrl(imagePath: string): string {
  // Split the path into directory and filename parts
  const pathParts = imagePath.split('/');
  const filename = pathParts[pathParts.length - 1];
  const directory = pathParts.slice(0, -1).join('/');
  
  // Encode only the filename part to preserve the directory structure
  const encodedFilename = encodeURIComponent(filename);
  
  return `${directory}/${encodedFilename}`;
}