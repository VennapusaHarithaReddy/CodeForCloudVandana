import java.util.Scanner;

public class PangramChecker {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter a sentence: ");
        String sentence = scanner.nextLine();

        if (isPangram(sentence)) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }

    public static boolean isPangram(String sentence) {
       
        boolean[] alphabetUsage = new boolean[26];
        sentence = sentence.toLowerCase();
        for (char c : sentence.toCharArray()) {
            if (Character.isLetter(c)) {
                int index = c - 'a';
                alphabetUsage[index] = true;
            }
        }
        for (boolean used : alphabetUsage) {
            if (!used) {
                return false; 
            }
        }

        return true; 
    }
}
