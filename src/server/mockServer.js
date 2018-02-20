module.exports = {
    mockAddEmotion: function (id, emotion) {
        return new Promise(resolve => {
            console.log(`Mock function to add ${emotion} to transaction ${id}`);
            resolve();
        });
    },
    mockRemoveEmotion: function (id, emotion) {
        return new Promise(resolve => {
            console.log(`Mock function to remove emotion from transaction ${id}`);
            resolve();
        });
    }
}