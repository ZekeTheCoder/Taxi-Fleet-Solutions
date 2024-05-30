package com.zekethecoder.taxi_fleet_solutions_app.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Driver {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer user_id;
    private String fullName;
    @Column(unique = true)
    private String email;
    private String phone;
    private String address;
    private String type;
    private int driver_id;
    private int vehicle_id;
//    private int income_id;
//    private List<Income> Incomes;

//    relationships
    private double amount_paid;

//    @Enumerated(EnumType.STRING)
//    private Booking booking_status;

}
