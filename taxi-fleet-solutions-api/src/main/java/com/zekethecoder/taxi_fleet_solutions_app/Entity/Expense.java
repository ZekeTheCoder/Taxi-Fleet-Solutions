package com.zekethecoder.taxi_fleet_solutions_app.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Expense {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer expense_id;
    private LocalDateTime created_at;
    private String description;
    private String category;
    private double amount;
    private int vehicle_id;
    private int driver_id;

    @PrePersist
    void assignCreatedAt(){
        this.created_at = LocalDateTime.now();
    }
}
