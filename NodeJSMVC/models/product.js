const fs = require('fs');
const path = require('path');

const products = [];

const pathToManage = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'product.json'
);

const getProductsFromFile = (cb) => {
    fs. readFile(pathToManage, (err, fileContent) => {
        if (err || !fileContent) {
            return cb([]);
        }

        cb(JSON.parse(fileContent));
    });
}

module.exports = class Product {
    constructor(title) {
        this.title = title;
    }

    save() {
        getProductsFromFile(products => {
            products.push(this); 

            fs.writeFile(pathToManage, JSON.stringify(products), (err) => {
                if (err) 
                    console.error(err);
            });
        });
    }

    static fetchAll(cb) {
      getProductsFromFile(cb);
    }
}