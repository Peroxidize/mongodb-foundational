// Use the 'ecommerce' database
use ecommerce;

// Drop existing collections to reset
db.categories.drop();
db.products.drop();

// Insert categories
db.categories.insertMany([
    {
        name: "Clothing",
        description: "Apparel including shirts, pants, and dresses"
    },
    {
        name: "Electronics",
        description: "Devices such as smartphones, laptops, and accessories"
    },
    {
        name: "Books",
        description: "Fictional, Literature, and Educational Books"
    }
]);

// Insert products
db.products.insertMany([
    {
        _id: ObjectId("675c4068b3327e944d3a87bb"),
        name: "Graphic T-Shirt",
        price: 15.99,
        category_name: "Clothing",
        description: "Cotton t-shirt with printed design",
        stock: 100,
        tags: ["clothing", "tshirt", "casual"]
    },
    {
        name: "Smartphone",
        price: 699.99,
        category_name: "Electronics",
        description: "5G smartphone with 128GB storage",
        stock: 50,
        tags: ["electronics", "smartphone", "mobile"]
    },
    {
        name: "Science Fiction Novel",
        price: 12.5,
        category_name: "Electronics",
        description: "Hardcover science fiction book",
        stock: 20,
        tags: ["books", "fiction", "novel"]
    }
]);

// Fetch all categories
print("\nREAD: All Categories:");
db.categories.find().forEach(printjson);

// Fetch all products
print("\nREAD: All Products:");
db.products.find().forEach(printjson);

// Update stock for "Graphic T-Shirt"
print("\nUPDATE: Updating stock for 'Graphic T-Shirt'...");
db.products.updateOne(
    { name: "Graphic T-Shirt" },
    { $set: { stock: 90 } }
);

print("Updated product:");
db.products.find({ name: "Graphic T-Shirt" }).forEach(printjson);

// Add a new tag to "Smartphone"
print("\nUPDATE: Adding new tag 'tech' to 'Smartphone'...");
db.products.updateOne(
    { name: "Smartphone" },
    { $push: { tags: "tech" } }
);
print("Updated product:");
db.products.find({ name: "Smartphone" }).forEach(printjson);

// Delete the "Science Fiction Novel" product
print("\nDELETE: Removing 'Science Fiction Novel' from products...");
db.products.deleteOne({ name: "Science Fiction Novel" });
print("Remaining products:");
db.products.find().forEach(printjson);

// Delete the "Books" category
print("\nDELETE: Removing 'Books' category...");
db.categories.deleteOne({ name: "Books" });
print("Remaining categories:");
db.categories.find().forEach(printjson);

// Create an index on the 'name' field in the products collection
db.products.createIndex({ name: 1 });
