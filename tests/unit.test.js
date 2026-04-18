const sanitizeColorName = (name) => {
    if (!name) return "";
    // Remove extra spaces and make it Title Case (e.g., "  blue  " -> "Blue")
    const trimmed = name.trim();
    return trimmed.charAt(0).toUpperCase() + trimmed.slice(1).toLowerCase();
};

test('Sanitizes color names for the database', () => {
    expect(sanitizeColorName("  blue  ")).toBe("Blue");
    expect(sanitizeColorName("RED")).toBe("Red");
    expect(sanitizeColorName("sky blue")).toBe("Sky blue");
    expect(sanitizeColorName("")).toBe("");
});