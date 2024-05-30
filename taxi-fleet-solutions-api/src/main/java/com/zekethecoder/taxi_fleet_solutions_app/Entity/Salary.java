package com.zekethecoder.taxi_fleet_solutions_app.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Salary {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer salary_id;
    private LocalDateTime created_at;
    private String description;
    private String payment_method;
    private double amount;
    //    relationships
//    @OneToMany(cascade = CascadeType.ALL,fetch = FetchType.EAGER,orphanRemoval = true)
    private List<Income> Incomes;
    private int driver_id;

    @PrePersist
    void assignCreatedAt(){
        this.created_at = LocalDateTime.now();
    }
}
