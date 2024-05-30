package com.zekethecoder.taxi_fleet_solutions_app.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer customer_id;
    private String fullName;
    @Column(unique = true)
    private String email;
    private String phone;
    private String start_date;
    private String end_date;
    private String pickup_location;
    private String dropOff_location;
    private String booking_status;
//    relationships
    private double amount_paid;

//    @Enumerated(EnumType.STRING)
//    private Booking booking_status;

}
