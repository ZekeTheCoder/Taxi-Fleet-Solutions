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
public class Admin {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long admin_id;
    private LocalDateTime created_at;
    private String fullName;
    @Column(unique = true)
    private String email;
    private String password;

    @PrePersist
    void assignCreatedAt(){
        this.created_at = LocalDateTime.now();
    }
}
