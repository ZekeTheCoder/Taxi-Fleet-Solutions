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
public class Vehicle {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer vehicle_id;
    private LocalDateTime created_at;
    private String name;
    private String licence_plate;
    private String category;
    private double amount;
    private int income_id;
    private int driver_id;
    private int subscriber_id;

    @PrePersist
    void assignCreatedAt(){
        this.created_at = LocalDateTime.now();
    }
}
