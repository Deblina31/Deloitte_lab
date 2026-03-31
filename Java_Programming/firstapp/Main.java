package  firstapp;
import  java.io.*;
import  java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter the temprateure value in celcius: ");
        double celciusTemperature = sc.nextDouble();
        sc.close();
        double farenheitTemperature = (celciusTemperature * 1.8) + 32;

        System.out.println(farenheitTemperature);

    }
}