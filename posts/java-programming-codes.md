---
title: "Java Programming Codes"
categories: ["java", "codes", "computer"]
date: "Oct 4, 2022"
excerpt: "These are important Java Codes for Grade 9th as well as for Grade 10th. I want all the students to learn and practice these codes."
cover_image: "/images/posts/img9.jpg"
---

# Codes

Two of the following questions, I am leaving for you because I have already explained these in the class. So you should be able to do by yourself.

- Program to demonstrate a menu‐driven class to accept a number from the user and check whether it is a Perfect number or not in Java.
    
    ```java
    import java.util.Scanner;
    
        public class Scanner
    
        {
    
            public static void main(String[] args) 
    
            {
    
                int n, sum = 0;
    
                Scanner s = new Scanner(System.in);
    
                System.out.print("Enter any integer you want to check:");
    
                n = s.nextInt();
    
                for(int i = 1; i < n; i++)
    
                {
    
                    if(n % i == 0)
    
                    {
    
                        sum = sum + i;
    
                    }
    
                }
    
                if(sum == n)
    
                {
    
                    System.out.println("Given number is Perfect");
    
                }
    
                else
    
                {
    
                    System.out.println("Given number is not Perfect");
    
                }    
    
            }
    
            int divisor(int x)
    
            {
    
               return x;
    
            }
    
        }
    ```
    
- Write a program to print “Hello World” on console.
    
    ```java
    class Simple{  
            public static void main(String args[]){  
             System.out.println("Hello World");  
            }  
        }
    ```
    
- Write a program to print same character on each line and having character increment on each line.
    
    ```java
    import java.util.Scanner;
    
    public class MultipleLinePattern {
     
     public static void main(String[] args) {
      
         String pattern;
         int noOfTimes;
         
         Scanner scanner = new Scanner(System.in);
         
         System.out.print("Enter the pattern to print : ");
         pattern = scanner.nextLine();
         
         System.out.print("Enter number of times it should get printed : ");
         noOfTimes = scanner.nextInt();
    
         for(int i = 1; i <= noOfTimes; i++) {
             
             for(int j = 1; j <= i; j++) { 
                 System.out.print(pattern);
             }
             System.out.println();
         }
     }
    
    }
    ```
    
- Write a program to input a number and count the number of digits.
    
    ```java
    import java.util.Scanner;
    public class CountingDigitsInInteger {
       public static void main(String args[]){
          Scanner sc = new Scanner(System.in);
          int count = 0;
          System.out.println("Enter a number ::");
          int num = sc.nextInt();
          while(num!=0){
             num = num/10;
             count++;
          }
          System.out.println("Number of digits in the entered integer are : "+ count);
       }
    }
    ```
    
- Write a program to find the sum of digits of an integer that is an input.
    
    ```java
    import java.util.Scanner;  
        public class SumOfDigitsExample1   
        {  
        public static void main(String args[])  
        {  
        int number, digit, sum = 0;  
        Scanner sc = new Scanner(System.in);  
        System.out.print("Enter the number: ");  
        number = sc.nextInt();  
        while(number > 0)  
        {  
        //finds the last digit of the given number    
        digit = number % 10;  
        //adds last digit to the variable sum  
        sum = sum + digit;  
        //removes the last digit from the number  
        number = number / 10;  
        }  
        //prints the result  
        System.out.println("Sum of Digits: "+sum);  
        }  
        }
    ```
    
- Write a program to print first 10 terms of fibonacci sequence.
    
    ```java
    class FibonacciExample1{  
        public static void main(String args[])  
        {    
         int n1=0,n2=1,n3,i,count=10;    
         System.out.print(n1+" "+n2);//printing 0 and 1    
            
         for(i=2;i<count;++i)//loop starts from 2 because 0 and 1 are already printed    
         {    
          n3=n1+n2;    
          System.out.print(" "+n3);    
          n1=n2;    
          n2=n3;    
         }    
          
        }
    }
    ```
    
- Write a program to take a string as input and print it in reverse.
    
    ```java
    public class Reverse   
        {    
            public static void main(String[] args) {    
                String string = "Dream big";    
                //Stores the reverse of given string    
                String reversedStr = "";    
                    
                //Iterate through the string from last and add each character to variable reversedStr    
                for(int i = string.length()-1; i >= 0; i--){    
                    reversedStr = reversedStr + string.charAt(i);    
                }    
                    
                System.out.println("Original string: " + string);    
                //Displays the reverse of given string    
                System.out.println("Reverse of given string: " + reversedStr);    
            }    
        }
    ```
    
- Write a program to input two numbers and display the sum of these numbers on console.
    
    ```java
    public class SumOfNumbers1  
        {  
        public static void main(String args[])   
        {  
        int n1 = 225, n2 = 115, sum;  
        sum = n1 + n2;  
        System.out.println("The sum of numbers is: "+sum);  
        }  
        }
    ```
    
- Write a program to input first name and last name and display the full name on the console.
- Write a program to find largest of three numbers.
    
    ```java
    import java.util.Scanner;  
        public class LargestNumberExample1  
        {  
        public static void main(String[] args)   
        {  
        int a, b, c, largest, temp;  
        //object of the Scanner class  
        Scanner sc = new Scanner(System.in);  
        //reading input from the user  
        System.out.println("Enter the first number:");  
        a = sc.nextInt();  
        System.out.println("Enter the second number:");  
        b = sc.nextInt();  
        System.out.println("Enter the third number:");  
        c = sc.nextInt();  
        //comparing a and b and storing the largest number in a temp variable  
        temp=a>b?a:b;  
        //comparing the temp variable with c and storing the result in the variable  
        largest=c>temp?c:temp;  
        //prints the largest number  
        System.out.println("The largest number is: "+largest);  
        }  
        }
    ```
    
- Write a program to input a sentence and convert it into uppercase and display each word on separate line.
    
    ```java
    import java.util.*;
    
    class Main
    
    {
    
    public static void main(String args[])
    
    {
    
    Scanner s=new Scanner(System.in);
    
    int length;
    
    char tmpchar;
    
    System.out.println(" Enter a Sentence ");
    
    String sent1=s.nextLine();
    
    length=sent1.length();
    
    String sent2=sent1.toUpperCase();
    
    for(int i=0; i<length; i++)
    
    {
    
    tmpchar=sent2.charAt(i);
    
    if(tmpchar==' ') {
        System.out.print("\n");
    }
    else {
        System.out.print(tmpchar);
    }
    }
    
    }
    
    }
    ```
    
- Write a program to create a class with two variables and a method.
- Write a program to find sum of first n natural numbers.
    
    ```java
    public class Main  
        {  
        public static void main(String[] args)   
        {  
        int i, num = 10, sum = 0;  
        //executes until the condition returns true  
        for(i = 1; i <= num; ++i)  
        {  
        //adding the value of i into sum variable  
        sum = sum + i;  
        }  
        //prints the sum   
        System.out.println("Sum of First 10 Natural Numbers is = " + sum);  
        }  
        }
    ```
    
- Write a program to take as input length, breadth and height of cuboid and to display volume of the same on the console.
    
    ```java
    import java.util.Scanner;
    class VolumeOfCuboid 
    {
       public static void main(String args[]) 
        {   
           
    Scanner s= new Scanner(System.in);
    System.out.println("Enter the length of Cubiod:");
    double l=s.nextDouble();
    System.out.println("Enter the breadth of Cubiod:");
    double b=s.nextDouble();
    System.out.println("Enter height of Cubiod:");
    double h=s.nextDouble();
                    
    	
           
                     double  volume= l*b*h;
    
                 System.out.println("Volume Of Cuboid is:" +volume);
    
           
              
       }
    }
    ```
    
- Write a program showing typecasting in Java.
    
    ```java
    public class Main {
      public static void main(String[] args) {
        int myInt = 9;
        double myDouble = myInt; // Automatic casting: int to double
    
        System.out.println(myInt);
        System.out.println(myDouble);
      }
    }
    ```