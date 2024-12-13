# MongoDB Foundational

## Getting Started

Follow the steps below to set up and restore the necessary collections for this project.

### Clone the Repository

To get started, clone the project repository to your local machine:

```bash
git clone https://github.com/Peroxidize/mongodb-foundational.git
```

### Restore Collections

The project requires restoring specific MongoDB collections. Use the following commands to restore the `products` and `categories` collections into the `ecommerce` database.

#### Restore the `products` Collection

```bash
mongorestore --db ecommerce --collection products ./products.bson
```

#### Restore the `categories` Collection

```bash
mongorestore --db ecommerce --collection categories ./categories.bson
```

## Additional Information

Ensure that MongoDB is installed and running on your system before executing the commands. You can check the MongoDB documentation for installation instructions if needed:

- [MongoDB Installation Guide](https://www.mongodb.com/docs/manual/installation/)

After restoring the collections, you can use tools like MongoDB Compass or the `mongo` shell to verify that the collections have been successfully imported into the `ecommerce` database.
