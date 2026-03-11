//Console.WriteLine("Hello, World!");

using System;
namespace MyNameSpace
{
    class MyClass
    {
        public void MyMethod()
        {
            Console.WriteLine("Hello from MyNameSpace");
        }
    }
}

class AnathorClass
{
    static void Main()
    {
        MyNameSpace.MyClass obj= new MyNameSpace.MyClass();
        obj.MyMethod();
    }
}