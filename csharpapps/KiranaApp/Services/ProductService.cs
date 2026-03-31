using System.Collections.Generic;
using System.Linq;
using kiranaapp.Models;

namespace kiranaapp.Services
{
    public static class ProductService
    {
        private static List<Product> Products { get; } = new();
        private static int nextId = 3; // next auto-increment id

        static ProductService()
        {
            Products.AddRange(new List<Product>
            {
                new Product { Id = 1, Name = "Rice", IsEnabled = true },
                new Product { Id = 2, Name = "Wheat", IsEnabled = true }
            });
        }

        // CREATE
        public static Product Add(Product product)
        {
            product.Id = nextId++;
            Products.Add(product);
            return product;
        }

        // READ ALL
        public static List<Product> GetAll() => Products;

        // READ ONE
        public static Product? Get(int id) => Products.FirstOrDefault(p => p.Id == id);

        // UPDATE
        public static bool Update(int id, Product updatedProduct)
        {
            var existing = Products.FirstOrDefault(p => p.Id == id);
            if (existing == null) return false;

            existing.Name = updatedProduct.Name;
            existing.IsEnabled = updatedProduct.IsEnabled;
            return true;
        }

        // DELETE
        public static bool Delete(int id)
        {
            var product = Products.FirstOrDefault(p => p.Id == id);
            if (product == null) return false;

            Products.Remove(product);
            return true;
        }

        // TOGGLE ENABLED/DISABLED
        public static bool ToggleEnabled(int id)
        {
            var product = Products.FirstOrDefault(p => p.Id == id);
            if (product == null) return false;

            product.IsEnabled = !product.IsEnabled;
            return true;
        }
    }
}