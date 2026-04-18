test('Validates JSON structure for API payload', () => {
    const createPayload = (userId, color) => {
        return {
            userId: userId,
            color: color,
            timestamp: new Date().toISOString()
        };
    };

    const payload = createPayload(1, "Blue");

    expect(payload).toMatchObject({
        userId: expect.any(Number),
        color: expect.any(String),
        timestamp: expect.any(String)
    });
});