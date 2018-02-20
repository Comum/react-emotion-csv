import * as d3 from 'd3';

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
    },
    getAllTransactions: function () {
        return new Promise(resolve => {
            d3.csv('../data/transactions.csv', function(data) {
                resolve(data);
            });
        });
    },
    getFilteredEmotionsListFromCsv: function (description, emotion) {
        return new Promise(resolve => {
            module.exports.getAllTransactions()
            .then(value => {
                return new Promise(resolve => {
                    if (description.length) {
                        value = value.filter(transaction => {
                            if (transaction.description.indexOf(description) >= 0) {
                                return transaction;
                            }
                        });
                    }

                    resolve(value);
                });
            })
            .then(value => {
                return new Promise(resolve => {
                    if (emotion !== '0') {
                        value = value.filter(transaction => {
                            if (transaction.emotion === emotion) {
                                return transaction;
                            }
                        });
                    }

                    resolve(value);
                });
            })
            .then(value => {
                resolve(value);
            });
        });
    }
}