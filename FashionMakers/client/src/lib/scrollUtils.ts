/**
 * Scrolls to the specified element with smooth animation
 * @param elementId - The ID of the element to scroll to
 * @param offset - Optional offset from the top (default: 80px for header height)
 */
export const scrollToElement = (elementId: string, offset: number = 80): void => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
};

/**
 * Checks if an element is in the viewport
 * @param element - The element to check
 * @param offset - Optional offset (default: 100px)
 * @returns Boolean indicating if element is in viewport
 */
export const isElementInViewport = (element: HTMLElement, offset: number = 100): boolean => {
  const rect = element.getBoundingClientRect();
  
  return (
    rect.top <= (window.innerHeight - offset) &&
    rect.bottom >= offset
  );
};
