using GradeCalculator;

public class Program
{
    public static void Main()
    {
        Student student= new Student{Name= "Deblina Singha Roy"};
        student.Courses.Add(new Course {Name="JS", Grade=3.5, CreditHours=3});
        student.Courses.Add(new Course {Name="HTML", Grade=3, CreditHours=4});
        student.Courses.Add(new Course {Name="CSS", Grade=4.0, CreditHours=5});

        double gpa= student.CalculateGPA();
        Console.WriteLine($"Student: {student.Name}");
        Console.WriteLine($"GPA: {gpa:F2}");

    }
}