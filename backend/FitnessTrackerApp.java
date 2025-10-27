// ECHO is on.
import java.util.ArrayList;
import java.util.List;

public class FitnessTrackerApp {
    private static List<Workout> workoutList = new ArrayList<>();

    // Method to add a new workout entry
    public static void addWorkout(String type, int duration, int caloriesBurned, String date) {
        workoutList.add(new Workout(type, duration, caloriesBurned, date));
    }

    // Method to retrieve all workouts (could be enhanced to return specific data)
    public static List<Workout> getAllWorkouts() {
        return workoutList;
    }

    public static void main(String[] args) {
        // Example usage
        addWorkout("Running", 30, 300, "2025-10-01");
        addWorkout("Cycling", 45, 500, "2025-10-02");

        // Print all workouts
        for (Workout workout : getAllWorkouts()) {
            System.out.println(workout.getType() + ": " + workout.getDuration() + " minutes, " + workout.getCaloriesBurned() + " calories");
        }
    }
}
