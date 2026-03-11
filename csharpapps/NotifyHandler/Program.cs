void Handler(string msg) => Console.WriteLine(msg);
var publisher= new Publisher();
publisher.OnNotify+=Handler;
publisher.DoWork();
public delegate void NotifyHandler(string message);

public class Publisher
{
    public event NotifyHandler OnNotify;

    public void DoWork()
    {
        OnNotify?.Invoke("Work Completed!");
    }
}




