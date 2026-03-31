namespace kiranaapp.Models;

public class Product
{
    public int Id{get; set;}
    public string Name{get;set;}= string.Empty;
    public bool IsEnabled{get;set;}
    public double Price{get;set;}
    public int Quantity{get;set;}
}