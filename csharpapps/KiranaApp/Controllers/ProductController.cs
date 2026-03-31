using kiranaapp.Models;
using kiranaapp.Services;
using Microsoft.AspNetCore.Mvc;

namespace kiranaapp.Controllers;

[ApiController]
[Route("api/v1/[controller]")]
public class ProductController : ControllerBase
{
    public ProductController()
    {
    }

    // CREATE a new product
    [HttpPost]
    public IActionResult Create(Product product)
    {
        var createdProduct = ProductService.Add(product);
        return CreatedAtAction(nameof(Get), new { id = createdProduct.Id }, createdProduct);
    }

    // READ all products
    [HttpGet]
    public IActionResult GetAllProducts()
    {
        return Ok(ProductService.GetAll());
    }

    // READ a single product by id
    [HttpGet("{id}")]
    public IActionResult Get(int id)
    {
        var product = ProductService.Get(id);

        if (product == null)
            return NotFound();

        return Ok(product);
    }

    // UPDATE an existing product
    [HttpPut("{id}")]
    public IActionResult Update(int id, Product updatedProduct)
    {
        var success = ProductService.Update(id, updatedProduct);

        if (!success)
            return NotFound();

        return NoContent(); // 204
    }

    // DELETE a product
    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        var success = ProductService.Delete(id);

        if (!success)
            return NotFound();

        return NoContent(); // 204
    }

    // TOGGLE enable/disable
    [HttpPatch("{id}/toggle")]
    public IActionResult ToggleEnabled(int id)
    {
        var success = ProductService.ToggleEnabled(id);

        if (!success)
            return NotFound();

        return NoContent();
    }
}