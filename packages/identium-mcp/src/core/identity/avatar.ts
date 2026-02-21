export class AvatarManager {
    /**
     * Generates a procedural SVG avatar based on a personality vector.
     * @param vector 16-dimension personality vector [0-1].
     */
    static generateSVG(vector: number[]): string {
        // Extract some values for visual properties
        const primaryHue = Math.floor(vector[0] * 360);
        const secondaryHue = Math.floor(vector[5] * 360);
        const complexity = vector[2]; // Curiosity
        const randomness = vector[15]; // Diplomacy/Chaos

        const primaryColor = `hsl(${primaryHue}, 70%, 60%)`;
        const secondaryColor = `hsl(${secondaryHue}, 60%, 40%)`;

        // Generate patterns based on the vector
        const numShapes = 5 + Math.floor(complexity * 10);
        let shapes = "";

        for (let i = 0; i < numShapes; i++) {
            const x = vector[(i % 16)] * 100;
            const y = vector[((i + 3) % 16)] * 100;
            const size = 10 + (vector[((i + 7) % 16)] * 30);
            const opacity = 0.3 + (vector[((i + 11) % 16)] * 0.5);

            shapes += `<circle cx="${x}" cy="${y}" r="${size}" fill="${i % 2 === 0 ? primaryColor : secondaryColor}" fill-opacity="${opacity}" />`;
        }

        return `
      <svg width="200" height="200" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:${primaryColor};stop-opacity:1" />
            <stop offset="100%" style="stop-color:${secondaryColor};stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="100" height="100" fill="url(#grad)" fill-opacity="0.1" rx="20" />
        ${shapes}
      </svg>
    `.trim();
    }
}
