// ECHO is on.
public class Workout {
    private String type;
    private int duration; // in minutes
    private int caloriesBurned;
    private String date;

    public Workout(String type, int duration, int caloriesBurned, String date) {
        this.type = type;
        this.duration = duration;
        this.caloriesBurned = caloriesBurned;
        this.date = date;
    }

    // Getters and Setters
    public String getType() {
        return type;
    }

    public int getDuration() {
        return duration;
    }

    public int getCaloriesBurned() {
        return caloriesBurned;
    }

    public String getDate() {
        return date;
    }
}
