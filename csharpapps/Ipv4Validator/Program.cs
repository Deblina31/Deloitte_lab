using System;
using IpValidatorApp;

class Program
{
    static void Main()
    {
        Console.Write("Enter IP Address: ");
        string input = Console.ReadLine();

        IPv4Address ip = new IPv4Address(input);

        if (ip.IsValid)
            Console.WriteLine("IP Class: " + ip.GetClassification());
        else
            Console.WriteLine("Invalid IP Address");
    }
}