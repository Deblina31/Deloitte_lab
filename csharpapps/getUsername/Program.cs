using System;

class GetUserName
{
    public string ExtractUsername(string email)
    {
        int index = email.IndexOf('@');
        if (index != -1)
        {
            return email.Substring(0, index);
        }
        return "Invalid Email";
    }
}
class Program
{
static void Main()
    {
        Console.Write("Enter Email: ");
        string email = Console.ReadLine() ?? "";

        GetUserName obj = new GetUserName();

        string username = obj.ExtractUsername(email);

        Console.WriteLine("Username: " + username);
    }
}